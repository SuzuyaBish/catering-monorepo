import { FC } from "react"
import Image from "next/image"
import Link from "next/link"

interface RecipeGridListProps {
  recipes: Recipe[]
}

const RecipeGridList: FC<RecipeGridListProps> = (props) => {
  return (
    <ul
      role="list"
      className="grid grid-cols-2 gap-x-4 gap-y-8 py-10 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
    >
      {props.recipes.map((recipe) => (
        <Link key={recipe.id} href={`/account/edit-recipe/${recipe.id}`}>
          <li className="relative">
            <div className="aspect-h-7 aspect-w-10 bg-muted group block w-full overflow-hidden rounded-lg">
              <Image
                src={recipe.image}
                fill
                alt=""
                className="pointer-events-none object-cover group-hover:opacity-75"
              />
              <button
                type="button"
                className="absolute inset-0 focus:outline-none"
              >
                <span className="sr-only">View details for {recipe.title}</span>
              </button>
            </div>
            <p className="text-foreground pointer-events-none mt-2 block truncate text-sm font-medium">
              {recipe.title}
            </p>
            <p className="text-muted-foreground pointer-events-none block text-sm font-medium">
              {recipe.description}
            </p>
          </li>
        </Link>
      ))}
    </ul>
  )
}

export default RecipeGridList
