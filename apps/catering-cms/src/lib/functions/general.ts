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
      toast.error("Error uploading image", {
        description: error.message,
      })
      return
    }

    const { data: urlData } = await supabase.storage
      .from(bucket)
      .getPublicUrl(name)

    return urlData.publicUrl
  } catch (error) {
    throw error
  }
}
