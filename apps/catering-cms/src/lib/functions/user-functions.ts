import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"

const supabase = createClientComponentClient()

export const getUserFromEmail = async (email: string) => {
  try {
    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("email", email)
      .single()

    if (error) throw error

    if (data) return data.user_id
  } catch (error) {
    throw error
  }
}

export const checkIfUserIsModerator = async (email: string) => {
  try {
    const user_id = await getUserFromEmail(email)

    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("user_id", user_id)
      .single()

    if (error) {
      return false
    }

    if (data) return data.role === "Moderator"
  } catch (error) {
    throw error
  }
}
