"use server"

import { cookies } from "next/headers"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"

import { Button } from "@/components/ui/button"
import PageHeader from "@/components/layout/PageHeader"
import RecipeGridList from "@/components/recipes/RecipeGridList"
import { AddRecipeButton } from "@/components/recipes/AddRecipeButton"

export default async function AccountPage() {
  const cookieStore = cookies()
  const supabase = createServerComponentClient({ cookies: () => cookieStore })
  const { data } = await supabase.from("recipes").select("*")
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
