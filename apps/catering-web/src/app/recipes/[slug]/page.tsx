"use server"

import { Suspense } from "react"
import { cookies } from "next/headers"
import Image from "next/image"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"

import RecipeInfo from "@/components/recipe/RecipeDetails"
import RecipesTabs from "@/components/recipe/RecipesTabs"
import RelatedRecipes from "@/components/recipe/RelatedRecipes"
import RelatedRecipesFallback from "@/components/recipe/RelatedFallback"

const product = {
  name: "Application UI Icon Pack",
  price: "$220",
  description:
    "The Application UI Icon Pack comes with over 200 icons in 3 styles: outline, filled, and branded. This playful icon pack is tailored for complex application user interfaces with a friendly and legible look.",
  highlights: [
    "200+ SVG icons in 3 unique styles",
    "Compatible with Figma, Sketch, and Adobe XD",
    "Drawn on 24 x 24 pixel grid",
  ],
  imageSrc:
    "https://tailwindui.com/img/ecommerce-images/product-page-05-product-01.jpg",
  imageAlt:
    "Sample of 30 icons with friendly and fun details in outline, filled, and brand color styles.",
}

export default async function RecipeDetails({
  params,
}: {
  params: { slug: string }
}) {
  const cookieStore = cookies()
  const supabase = createServerComponentClient({ cookies: () => cookieStore })
  const { data } = await supabase
    .from("recipes")
    .select("*, reviews(*, author(*))")
    .eq("id", params.slug)
    .single()
  const recipe = data as Recipe
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
          <RecipeInfo {...recipe} />
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
