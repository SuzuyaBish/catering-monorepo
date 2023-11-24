import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { toast } from "sonner"
import { uploadImage } from "./general"

const supabase = createClientComponentClient()

export const createBlog = async (title: string, image: File) => {
  try {
    const imageUrl = await uploadImage(image, "blogs")

    const { data, error } = await supabase
      .from("blogs")
      .insert([
        {
          title,
          image: imageUrl,
        },
      ])
      .select("*")

    if (error) {
      throw error
    }

    if (data) {
      toast.success("Blog created successfully", {
        description: "You will be redirected shortly.",
      })

      return data
    }
  } catch (error) {
    throw error
  }
}
