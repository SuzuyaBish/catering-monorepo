"use client"

import { FC, useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, Trash } from "lucide-react"

import { updateRecipe } from "@/lib/functions/recipe-functions"
import { useRecipeStore } from "@/lib/stores/recipe-store"

import { Icons } from "../Icons"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { Textarea } from "../ui/textarea"
import DeleteRecipeButton from "./DeleteRecipeButton"

interface RecipeEditorProps {
  recipe: Recipe
}

const RecipeEditor: FC<RecipeEditorProps> = (props) => {
  const store = useRecipeStore()
  const router = useRouter()

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    store.setRecipe(props.recipe)
    store.setRecipeImage({} as File)
  }, [])
  return (
    <div>
      <div className="flex items-center justify-between">
        <Button
          size="icon"
          variant="outline"
          disabled={loading}
          onClick={() => {
            store.setRecipe({} as Recipe)
            store.setRecipeImage({} as File)
            router.back()
          }}
        >
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <div className="flex items-center space-x-3">
          <DeleteRecipeButton loading={loading} setLoading={setLoading} />
          <Button
            variant="secondary"
            disabled={loading}
            onClick={async () => {
              setLoading(true)

              await updateRecipe(store.recipe, store.recipeImage).then(() => {
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
            <Label htmlFor="title">Recipe Image</Label>
            <Input
              id="title"
              placeholder="Recipe Image"
              type="file"
              accept="image/*"
              onChange={(e) => store.setRecipeImage(e.target.files![0] as File)}
              disabled={loading}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="title">Recipe Title</Label>
            <Input
              id="title"
              placeholder="Recipe Title"
              value={store.recipe.title}
              disabled={loading}
              onChange={(e) =>
                store.setRecipe({ ...store.recipe, title: e.target.value })
              }
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Recipe Description</Label>
            <Textarea
              id="description"
              placeholder="Recipe Description"
              value={store.recipe.description}
              disabled={loading}
              onChange={(e) =>
                store.setRecipe({
                  ...store.recipe,
                  description: e.target.value,
                })
              }
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="title">Recipe Highlights (comma separated)</Label>
            <Textarea
              id="title"
              placeholder="Recipe Highlights"
              value={store.recipe.highlights}
              disabled={loading}
              onChange={(e) =>
                store.setRecipe({
                  ...store.recipe,
                  highlights: e.target.value.split(","),
                })
              }
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="title">Recipe Ingredients (comma separated)</Label>
            <Textarea
              id="title"
              placeholder="Recipe Ingredients"
              value={store.recipe.ingredients}
              disabled={loading}
              onChange={(e) =>
                store.setRecipe({
                  ...store.recipe,
                  ingredients: e.target.value.split(","),
                })
              }
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="title">Recipe Instructions (comma separated)</Label>
            <Textarea
              id="title"
              placeholder="Recipe Instructions"
              value={store.recipe.instructions}
              disabled={loading}
              onChange={(e) =>
                store.setRecipe({
                  ...store.recipe,
                  instructions: e.target.value.split(","),
                })
              }
            />
          </div>
        </div>
      </form>
    </div>
  )
}

export default RecipeEditor
