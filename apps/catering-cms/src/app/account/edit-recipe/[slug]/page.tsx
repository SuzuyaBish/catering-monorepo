"use server"

import { cookies } from "next/headers"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"

import RecipeEditor from "@/components/recipes/RecipeEditor"
import RecipeViewer from "@/components/recipes/RecipeViewer"

export default async function RecipeEditPage({
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
    <div className="flex min-h-full flex-col">
      <div className="container mx-auto flex w-full items-start gap-x-8 px-4 py-10 sm:px-6 lg:px-8">
        <aside className="sticky top-8 w-96 shrink-0 xl:block">
          <RecipeEditor recipe={recipe} />
        </aside>
        <main className="flex-1">
          <RecipeViewer />
        </main>
      </div>
    </div>
  )
}
