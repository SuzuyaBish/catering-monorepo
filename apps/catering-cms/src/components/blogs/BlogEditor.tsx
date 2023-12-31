"use client"

import { FC, useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"

import { updateBlog } from "@/lib/functions/blog-functions"
import { useBlogStore } from "@/lib/stores/blog-store"

import { Icons } from "../Icons"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { Textarea } from "../ui/textarea"
import DeleteBlogButton from "./DeleteBlogButton"
import { UserPicker } from "./UserPicker"

interface BlogEditorProps {
  blog: Blog
  users: User[]
}

const BlogEditor: FC<BlogEditorProps> = (props) => {
  const store = useBlogStore()
  const router = useRouter()

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    store.setBlog(props.blog)
    store.setBlogImageMain({} as File)
  }, [])
  return (
    <div>
      <div className="flex items-center justify-between">
        <Button
          size="icon"
          variant="outline"
          disabled={loading}
          onClick={() => {
            store.setBlog({} as Blog)
            store.setBlogImageMain({} as File)
            router.back()
          }}
        >
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <div className="flex items-center space-x-3">
          <DeleteBlogButton loading={loading} setLoading={setLoading} />
          <Button
            variant="secondary"
            disabled={loading}
            onClick={async () => {
              setLoading(true)

              await updateBlog(store.blog, store.blogImageMain).then(() => {
                setLoading(false)
              })
            }}
          >
            {loading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
            Save Changes
          </Button>
        </div>
      </div>
      <form className="mt-10">
        <div className="grid gap-y-5">
          <div className="space-y-2">
            <Label htmlFor="title">Blog Image</Label>
            <Input
              id="title"
              placeholder="Blog Image"
              type="file"
              accept="image/*"
              onChange={(e) =>
                store.setBlogImageMain(e.target.files![0] as File)
              }
              disabled={loading}
            />
          </div>
          {/* <div className="grid space-y-2">
            <Label>Author</Label>
            <UserPicker users={props.users} />
          </div> */}
          <div className="space-y-2">
            <Label htmlFor="title">Blog Title</Label>
            <Input
              id="title"
              placeholder="Blog Title"
              value={store.blog.title}
              disabled={loading}
              onChange={(e) =>
                store.setBlog({ ...store.blog, title: e.target.value })
              }
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Blog Subtitle</Label>
            <Textarea
              id="description"
              placeholder="Blog Subtitle"
              value={store.blog.subtitle}
              disabled={loading}
              onChange={(e) =>
                store.setBlog({
                  ...store.blog,
                  subtitle: e.target.value,
                })
              }
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Blog Content</Label>
            <Textarea
              id="description"
              placeholder="Blog Top Content"
              value={store.blog.top_content}
              disabled={loading}
              onChange={(e) =>
                store.setBlog({
                  ...store.blog,
                  top_content: e.target.value,
                })
              }
            />
          </div>
        </div>
      </form>
    </div>
  )
}

export default BlogEditor
