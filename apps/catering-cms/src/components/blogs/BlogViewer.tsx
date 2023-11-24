'use client'

import { FC } from "react"

import { useBlogStore } from "@/lib/stores/blog-store"

interface BlogViewerProps {}

const BlogViewer: FC<BlogViewerProps> = ({}) => {
  const store = useBlogStore()
  return <div>{store.blog.title}</div>
}

export default BlogViewer
