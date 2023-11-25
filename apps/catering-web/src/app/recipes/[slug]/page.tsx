"use server"

import { Suspense } from "react"
import Image from "next/image"

import { fetchRecipeFromId } from "@/lib/functions"
import RecipesTabs from "@/components/recipe/RecipesTabs"
import RelatedRecipesFallback from "@/components/recipe/RelatedFallback"
import RelatedRecipes from "@/components/recipe/RelatedRecipes"

export default async function RecipeDetails({
  params,
}: {
  params: { slug: string }
}) {
  const recipe = await fetchRecipeFromId(params.slug)
  return (
    <div className="">
      <main className="mx-auto px-4 pb-24 pt-14 sm:px-6 sm:pb-32 sm:pt-16 lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-7 lg:grid-rows-1 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16">
          <div className="lg:col-span-4 lg:row-end-1">
            <div className="aspect-h-3 aspect-w-4 relative overflow-hidden rounded-lg bg-gray-100">
              <Image
                src={recipe.recipe.image}
                fill
                alt=""
                className="object-cover object-center"
              />
            </div>
          </div>
          {/* <form action="/auth/signout" method="post">
          <button className="button block" type="submit">
            Sign out
          </button>
        </form> */}
          {JSON.stringify(recipe.user)}
          {/* <RecipeInfo {...recipe.recipe} user={recipe.user} /> */}
          <RecipesTabs {...recipe.recipe} />
        </div>
        <Suspense fallback={<RelatedRecipesFallback />}>
          {/* @ts-expect-error Server Component */}
          <RelatedRecipes />
        </Suspense>
      </main>
    </div>
  )
}
