"use client"

import { FC, useState } from "react"
import { useRouter } from "next/navigation"
import { Trash } from "lucide-react"

import { deleteRecipe } from "@/lib/functions/recipe-functions"
import { useRecipeStore } from "@/lib/stores/recipe-store"

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

interface DeleteRecipeButtonProps {
  loading: boolean
  setLoading: (loading: boolean) => void
}

const DeleteRecipeButton: FC<DeleteRecipeButtonProps> = (props) => {
  const store = useRecipeStore()
  const [open, setOpen] = useState(false)
  const router = useRouter()
  return (
    <AlertDialog open={open} onOpenChange={() => setOpen(!open)}>
      <AlertDialogTrigger>
        <Button variant="destructive" disabled={props.loading} size="icon">
          {props.loading && (
            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
          )}
          <Trash className="h-4 w-4" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete this
            recipe and remove the data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel disabled={props.loading}>Cancel</AlertDialogCancel>
          <Button
            variant="destructive"
            disabled={props.loading}
            onClick={async () => {
              props.setLoading(true)

              await deleteRecipe(store.recipe.id).then(() => {
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

export default DeleteRecipeButton
