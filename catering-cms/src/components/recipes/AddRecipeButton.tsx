"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

import { createRecipe } from "@/lib/functions/recipe-functions"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { Icons } from "../Icons"

export function AddRecipeButton() {
  const router = useRouter()
  const [title, setTitle] = useState("")
  const [image, setImage] = useState<File | null>(null)
  const [loading, setLoading] = useState(false)

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setLoading(true)

    const res = await createRecipe(title, image!)

    if (res) {
      const data = res[0] as Recipe
      router.push(`/account/edit-recipe/${data.id}`)
    } else {
      setLoading(false)
    }

    setTitle("")
    setImage(null)
    setLoading(false)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Create Recipe</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Recipe</DialogTitle>
          <DialogDescription>
            Please select an image and fill out the form below.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit} className="grid gap-4 py-4">
          <div className="flex flex-col items-start space-y-3">
            <Label htmlFor="image">Recipe Image</Label>
            <Input
              id="name"
              type="file"
              accept="image/png, image/jpeg, image/jpg"
              required
              onChange={(e) => setImage(e.target.files?.[0] ?? null)}
              disabled={loading}
            />
          </div>
          <div className="flex flex-col items-start space-y-3">
            <Label htmlFor="Title">Recipe Title</Label>
            <Input
              id="Title"
              placeholder="Strawberry Pancakes"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              required
              disabled={loading}
            />
          </div>
          <Button type="submit" disabled={loading}>
            {loading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
            Create Recipe
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
