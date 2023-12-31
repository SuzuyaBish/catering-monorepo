"use server"

import { cookies } from "next/headers"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"

import BlogEditor from "@/components/blogs/BlogEditor"
import BlogViewer from "@/components/blogs/BlogViewer"

export default async function BlogEditPage({
  params,
}: {
  params: { slug: string }
}) {
  const cookieStore = cookies()
  const supabase = createServerComponentClient({ cookies: () => cookieStore })
  const { data } = await supabase
    .from("blogs")
    .select("*, author(*)")
    .eq("id", params.slug)
    .single()

  const { data: userData } = await supabase.from("users").select("*")

  const blog = data as Blog
  const users = userData as User[]

  return (
    <div className="flex min-h-full flex-col">
      <div className="container mx-auto flex w-full items-start gap-x-8 px-4 py-10 sm:px-6 lg:px-8">
        <aside className="sticky top-8 w-96 shrink-0 xl:block">
          <BlogEditor blog={blog} users={users} />
        </aside>
        <main className="flex-1">
          <BlogViewer />
        </main>
      </div>
    </div>
  )
}
