"use server"

import { cookies } from "next/headers"

import { createClient } from "@/lib/server"
import CTA from "@/components/landing/CTA"
import RecipeList from "@/components/recipe/RecipeList"

// export const dynamic = "force-dynamic"

export default async function RecipePage() {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const {
    data: { user },
  } = await supabase.auth.getUser()

  const { data } = await supabase
    .from("recipes")
    .select("*")

  const { data: userData } = await supabase
    .from("users")
    .select("*, favorites(*, recipe(*))")
    .eq("user_id", user?.id)
    .single()

  const recipe = data as Recipe[]
  const userValues = userData as User
  return (
    <main>
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-orangeColor text-base font-semibold leading-7">
              Our Recipes
            </p>
            <h2 className="font-montserrat mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Easy to follow recipes
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our recipes are designed to be easy to follow and use ingredients
              that are readily available. If you are looking for a recipe that
              you can&apos;t find here, please let us know and we will try to
              add it.
            </p>
          </div>
        </div>
        <section aria-labelledby="products-heading">
          <h2 id="products-heading" className="sr-only">
            Products
          </h2>
          <RecipeList recipes={recipe} user={userValues} />
        </section>
        <CTA />
        <section
          aria-labelledby="more-products-heading"
          className="mt-16 pb-24"
        >
          <h2 id="more-products-heading" className="sr-only">
            More products
          </h2>

          <RecipeList recipes={recipe} user={userValues} />
        </section>
      </div>
    </main>
  )
}
