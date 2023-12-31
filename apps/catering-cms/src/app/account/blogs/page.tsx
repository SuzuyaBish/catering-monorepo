"use server"

import { cookies } from "next/headers"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"

import { AddBlogButton } from "@/components/blogs/AddBlogButton"
import BlogGridList from "@/components/blogs/BlogGridList"
import PageHeader from "@/components/layout/PageHeader"

export default async function BlogsPage() {
  const cookieStore = cookies()
  const supabase = createServerComponentClient({ cookies: () => cookieStore })
  const { data } = await supabase
    .from("blogs")
    .select("id, image, title, subtitle")
  const blogs = data as Blog[]
  return (
    <div className="container py-10">
      <PageHeader title="Blogs">
        <AddBlogButton />
      </PageHeader>
      <BlogGridList blogs={blogs} />
    </div>
  )
}
