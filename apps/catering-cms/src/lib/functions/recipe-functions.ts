import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { toast } from "sonner"

const supabase = createClientComponentClient()

export const uploadImage = async (file: File, bucket: string) => {
  try {
    const name = `${file.name}`

    const { data, error } = await supabase.storage
      .from(bucket)
      .upload(name, file, {
        upsert: false,
      })

    if (error) {
      console.log("duplicate")
    }

    const { data: urlData } = await supabase.storage
      .from(bucket)
      .getPublicUrl(name)

    return urlData.publicUrl
  } catch (error) {
    throw error
  }
}

export const createRecipe = async (title: string, image: File) => {
  try {
    const imageUrl = await uploadImage(image, "recipes")

    const { data, error } = await supabase
      .from("recipes")
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
      toast.success("Recipe created successfully", {
        description: "You will be redirected shortly.",
      })

      return data
    }
  } catch (error) {
    throw error
  }
}
