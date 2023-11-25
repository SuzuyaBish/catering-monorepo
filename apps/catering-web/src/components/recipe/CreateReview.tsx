"use client"

import { FC, useState } from "react"

import { writeReview } from "@/lib/functions"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"

import { Icons } from "../icons"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import { useRouter } from "next/navigation"

interface CreateReviewButtonProps {
  recipe: Recipe
  user: User
}

const CreateReviewButton: FC<CreateReviewButtonProps> = (props) => {
  const [open, setOpen] = useState(false)
  const router = useRouter()

  const [review, setReview] = useState("")
  const [rating, setRating] = useState<number | null>(null)
  const [loading, setLoading] = useState(false)

  const min = 0
  const max = 5

  const handleChange = (event: { target: { value: any } }) => {
    const value = Math.max(min, Math.min(max, Number(event.target.value)))
    setRating(value)
  }

  return (
    <Dialog open={open} onOpenChange={() => setOpen(!open)}>
      <DialogTrigger asChild>
        <button
          type="button"
          className="text-orangeColor flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-50 px-8 py-3 text-base font-medium"
        >
          Write Review
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Write Review</DialogTitle>
          <DialogDescription>
            Posting a review will make your name, avatar and review visible to
            everyone viewing this recipe.
          </DialogDescription>
        </DialogHeader>
        <div className="flex w-full flex-col items-center space-y-2">
          <div className="grid w-full flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <Textarea
              id="link"
              value={review}
              onChange={(e) => setReview(e.target.value)}
              className="h-32 max-h-32"
              maxLength={500}
              disabled={loading}
              placeholder="Write a review"
            />
          </div>
          <div className="grid w-full flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <Input
              id="link"
              type="number"
              placeholder="Rating"
              value={rating || undefined}
              disabled={loading}
              onChange={(e) => {
                handleChange(e)
              }}
            />
          </div>
        </div>
        <DialogFooter className="">
          <Button
            type="button"
            variant="secondary"
            disabled={loading}
            onClick={async () => {
              setLoading(true)

              const newReview: Omit<
                Review,
                "id" | "created_at" | "author" | "recipe"
              > = {
                rating: rating!.toString(),
                review: review,
              }

              await writeReview(props.user.id, review, rating!, props.recipe).then(
                () => {
                  setLoading(false)
                  setOpen(false)
                  router.refresh()
                }
              )
            }}
          >
            {loading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
            Post Review
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default CreateReviewButton
