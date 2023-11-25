"use client"

import { FC, useState } from "react"
import { useRouter } from "next/navigation"
import { Trash } from "lucide-react"

import { deleteBlog } from "@/lib/functions/blog-functions"
import { useBlogStore } from "@/lib/stores/blog-store"

import { Icons } from "../Icons"
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog"
import { Button } from "../ui/button"

interface DeleteBlogButtonProps {
  loading: boolean
  setLoading: (loading: boolean) => void
}

const DeleteBlogButton: FC<DeleteBlogButtonProps> = (props) => {
  const store = useBlogStore()
  const [open, setOpen] = useState(false)
  const router = useRouter()
  return (
    <AlertDialog open={open} onOpenChange={() => setOpen(!open)}>
      <AlertDialogTrigger>
        <Button variant="destructive" disabled={props.loading} size="icon">
          {props.loading ? (
            <Icons.spinner className="h-4 w-4 animate-spin" />
          ) : (
            <Trash className="h-4 w-4" />
          )}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete this blog
            and remove the data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel disabled={props.loading}>Cancel</AlertDialogCancel>
          <Button
            variant="destructive"
            disabled={props.loading}
            onClick={async () => {
              props.setLoading(true)

              await deleteBlog(store.blog.id).then(() => {
                router.back()
              })
            }}
          >
            {props.loading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Continue
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default DeleteBlogButton
