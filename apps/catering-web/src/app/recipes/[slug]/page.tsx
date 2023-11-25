"use server"

import { Suspense } from "react"
import { cookies } from "next/headers"
import Image from "next/image"

import { createClient } from "@/lib/server"
import RecipeInfo from "@/components/recipe/RecipeDetails"
import RecipesTabs from "@/components/recipe/RecipesTabs"
import RelatedRecipesFallback from "@/components/recipe/RelatedFallback"
import RelatedRecipes from "@/components/recipe/RelatedRecipes"

export default async function RecipeDetails({
  params,
}: {
  params: { slug: string }
}) {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const {
    data: { user },
  } = await supabase.auth.getUser()

  const { data } = await supabase
    .from("recipes")
    .select("*, reviews(*, author(*))")
    .eq("id", params.slug)
    .single()

  const { data: userData } = await supabase
    .from("users")
    .select("*, favorites(*, recipe(*))")
    .eq("user_id", user?.id)
    .single()

  const recipe = data as Recipe
  const userValues = userData as User
  return (
    <div className="">
      <main className="mx-auto px-4 pb-24 pt-14 sm:px-6 sm:pb-32 sm:pt-16 lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-7 lg:grid-rows-1 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16">
          <div className="lg:col-span-4 lg:row-end-1">
            <div className="aspect-h-3 aspect-w-4 relative overflow-hidden rounded-lg bg-gray-100">
              <Image
                src={recipe.image}
                fill
                alt=""
                className="object-cover object-center"
              />
            </div>
          </div>
          <form action="/auth/signout" method="post">
            <button className="button block" type="submit">
              Sign out
            </button>
          </form>
          <RecipeInfo recipe={recipe} user={userValues} />
          <RecipesTabs {...recipe} />
        </div>
        <Suspense fallback={<RelatedRecipesFallback />}>
          {/* @ts-expect-error Server Component */}
          <RelatedRecipes />
        </Suspense>
      </main>
    </div>
  )
}
