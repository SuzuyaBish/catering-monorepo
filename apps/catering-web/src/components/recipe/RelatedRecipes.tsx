import { cookies } from "next/headers"
import Image from "next/image"
import Link from "next/link"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"

import { getReviewAverage } from "@/lib/functions"

export default async function RelatedRecipes() {
  const cookieStore = cookies()
  const supabase = createServerComponentClient({ cookies: () => cookieStore })
  const { data } = await supabase.from("recipes").select("*").limit(4)
  const recipes = data as Recipe[]

  return (
    <div className="mx-auto mt-24 max-w-2xl sm:mt-32 lg:max-w-none">
      <div className="flex items-center justify-between space-x-4">
        <h2 className="text-lg font-medium text-gray-900">
          Customers also viewed
        </h2>
        <Link
          href="/recipes"
          className="text-orangeColor whitespace-nowrap text-sm font-medium"
        >
          View all
          <span aria-hidden="true"> &rarr;</span>
        </Link>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="group relative">
            <div className="aspect-h-3 aspect-w-4 relative overflow-hidden rounded-lg bg-gray-100">
              <Image
                src={recipe.image}
                alt=""
                fill
                className="object-cover object-center"
              />
              <div
                className="flex items-end p-4 opacity-0 group-hover:opacity-100"
                aria-hidden="true"
              >
                <div className="w-full rounded-md bg-white bg-opacity-75 px-4 py-2 text-center text-sm font-medium text-gray-900 backdrop-blur">
                  View Product
                </div>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between space-x-8 text-base font-medium text-gray-900">
              <h3>
                <Link href={`/recipes/${recipe.id}`}>
                  <span aria-hidden="true" className="absolute inset-0" />
                  {recipe.title}
                </Link>
              </h3>
              <p>{getReviewAverage(recipe)}</p>
            </div>
            <p className="mt-1 text-sm text-gray-500">{recipe.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
