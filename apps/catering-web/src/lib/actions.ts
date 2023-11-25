"use server"

import { cookies } from "next/headers"

import { ReceiveEmail } from "@/components/contact/OtherTemplate"
import { EmailTemplate } from "@/components/contact/Template"

import { resend } from "./resend"
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

export const sendEmail = async (
  to: string[],
  firstName: string,
  lastName: string
) => {
  try {
    const data = await resend.emails.send({
      from: "Jarrod Sloan <sender@jarrodsloan.com>",
      to: to,
      subject: "Enquiry Received",
      react: EmailTemplate({ firstName, lastName }),
    })

    console.log("Data", data)

    return true
  } catch (error) {
    throw error
  }
}

export const sendEmailConfirm = async (
  firstName: string,
  lastName: string,
  email: string,
  message: string
) => {
  try {
    const data = await resend.emails.send({
      from: "Jarrod Sloan <sender@jarrodsloan.com>",
      to: "sloan.jarrod@gmail.com",
      subject: "Enquiry Received",
      react: ReceiveEmail({
        firstName,
        lastName,
        email,
        message,
      }),
    })

    console.log("Data", data)

    return true
  } catch (error) {
    throw error
  }
}
