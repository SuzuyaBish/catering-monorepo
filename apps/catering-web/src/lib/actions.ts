"use server"

import { cookies } from "next/headers"

import { createClient } from "./server"

const cookieStore = cookies()
const supabase = createClient(cookieStore)

export const fetchUser = async () => {
  const user = await supabase.auth.getUser()

  const { data } = await supabase
    .from("users")
    .select("*, favorites(*, recipe(*))")
    .eq("user_id", user.data.user?.id)
    .single()

  return data as User
}

export const fetchRecipes = async () => {
  const user = await fetchUser()

  const { data } = await supabase
    .from("recipes")
    .select("*")
    .order("created_at", { ascending: false })

  return {
    recipes: data as Recipe[],
    user: user as User,
  }
}
