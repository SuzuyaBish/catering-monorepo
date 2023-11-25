import { FC } from "react"
import Image from "next/image"
import Link from "next/link"
import { StarIcon } from "@heroicons/react/20/solid"

import { canShowRecipe, recipeInFavorites } from "@/lib/functions"

interface RecipeListProps {
  recipes: Recipe[]
  user: User
}

const RecipeList: FC<RecipeListProps> = ({ recipes, user }) => {
  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
      {recipes.map((recipe) => {
        if (canShowRecipe(recipe)) {
          return (
            <Link
              key={recipe.id}
              href={`/recipes/${recipe.id}`}
              className="group"
            >
              <div className="aspect-h-1 aspect-w-1 xl:aspect-h-8 xl:aspect-w-7 w-full overflow-hidden rounded-lg bg-gray-200">
                <Image
                  src={recipe.image}
                  alt=""
                  fill
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <div className="flex items-center justify-between">
                <h3 className="mt-4 text-sm text-gray-700">{recipe.title}</h3>
                {recipeInFavorites(recipe, user.favorites) && (
                  <StarIcon className="text-orangeColor h-4 w-4" />
                )}
              </div>
              <p className="mt-1 text-lg font-medium text-gray-900">
                {recipe.description}
              </p>
            </Link>
          )
        }
      })}
    </div>
  )
}

export default RecipeList
