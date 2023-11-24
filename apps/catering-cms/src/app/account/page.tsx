"use server"

import { cookies } from "next/headers"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"

import PageHeader from "@/components/layout/PageHeader"
import { AddRecipeButton } from "@/components/recipes/AddRecipeButton"
import RecipeGridList from "@/components/recipes/RecipeGridList"

export default async function AccountPage() {
  const cookieStore = cookies()
  const supabase = createServerComponentClient({ cookies: () => cookieStore })
  // const { data, error } = await supabase
  //   .from("recipes")
  //   .select("*, reviews(*, author(*))")
  const { data, error } = await supabase
    .from("recipes")
    .select("id, image, title, description")
  const recipes = data as Recipe[]
  return (
    <div className="container py-10">
      <PageHeader title="Recipes">
        <AddRecipeButton />
      </PageHeader>
      <RecipeGridList recipes={recipes} />
    </div>
  )
}
