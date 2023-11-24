"use server"

import { cookies } from "next/headers"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"

import { AddBlogButton } from "@/components/blogs/AddBlogButton"
import BlogGridList from "@/components/blogs/BlogGridList"
import PageHeader from "@/components/layout/PageHeader"
import TestimonialGridList from "@/components/testimonials/TestimonialGridList"

export default async function TestimonialsPage() {
  const cookieStore = cookies()
  const supabase = createServerComponentClient({ cookies: () => cookieStore })
  const { data } = await supabase
    .from("testimonials")
    .select("*, user(*)")
  const testimonials = data as Testimonial[]
  return (
    <div className="container py-10">
      <PageHeader title="Testimonials">
        <AddBlogButton />
      </PageHeader>
      <TestimonialGridList testimonials={testimonials} />
    </div>
  )
}
