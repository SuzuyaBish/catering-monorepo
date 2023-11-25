"use server"

import { cookies } from "next/headers"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"

import { canShowBlog } from "@/lib/functions"
import BlogCard from "@/components/blogs/BlogCard"

export default async function BlogsPage() {
  const cookieStore = cookies()
  const supabase = createServerComponentClient({ cookies: () => cookieStore })
  const { data } = await supabase.from("blogs").select("*, author(*)")
  const blogs = data as Blog[]
  return (
    <div className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-montserrat text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            From the blog
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Learn more about our products and services
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {blogs.map((blog) => {
            if (canShowBlog(blog)) {
              return <BlogCard key={blog.id} {...blog} />
            }
          })}
        </div>
      </div>
    </div>
  )
}
