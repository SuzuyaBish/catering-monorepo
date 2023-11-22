import { FC } from "react"
import Image from "next/image"
import Link from "next/link"

interface RecipeListProps {
  recipes: any
}

const RecipeList: FC<RecipeListProps> = ({ recipes }) => {
  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
      {recipes.map((recipe: any) => (
        <Link key={recipe.id} href={`/recipes/${recipe.id}`} className="group">
          <div className="aspect-h-1 aspect-w-1 xl:aspect-h-8 xl:aspect-w-7 w-full overflow-hidden rounded-lg bg-gray-200">
            <Image
              src={recipe.imageSrc}
              alt={recipe.imageAlt}
              fill
              className="h-full w-full object-cover object-center group-hover:opacity-75"
            />
          </div>
          <h3 className="mt-4 text-sm text-gray-700">{recipe.name}</h3>
          <p className="mt-1 text-lg font-medium text-gray-900">
            {recipe.price}
          </p>
        </Link>
      ))}
    </div>
  )
}

export default RecipeList
