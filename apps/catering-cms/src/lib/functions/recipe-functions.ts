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

export const fetchRecipe = async (id: string) => {
  try {
    const { data, error } = await supabase
      .from("recipes")
      .select("*")
      .eq("id", id)
      .single()

    if (error) {
      throw error
    }

    if (data) {
      return data
    }
  } catch (error) {
    throw error
  }
}

export const getReviewAverage = (recipe: Recipe) => {
  const reviews = recipe.reviews
  const reviewCount = reviews.length
  const reviewTotal = reviews.reduce((acc, review) => {
    return acc + Number(review.rating)
  }, 0)

  return reviewTotal / reviewCount
}

export const updateRecipe = async (recipe: Recipe, image: File) => {
  try {
    let newRecipe = recipe

    if (image.name) {
      const imageUrl = await uploadImage(image, "recipes")

      newRecipe = {
        ...recipe,
        image: imageUrl,
      }
    }

    const { data, error } = await supabase
      .from("recipes")
      .update([
        {
          title: newRecipe.title,
          image: newRecipe.image,
          description: newRecipe.description,
          ingredients: newRecipe.ingredients,
          instructions: newRecipe.instructions,
          highlights: newRecipe.highlights,
        },
      ])
      .eq("id", recipe.id)
      .select("*")

    if (error) {
      console.log(error.message)
      toast.error("Something went wrong", {
        description: "Please try again.",
      })
    }

    if (data) {
      toast.success("Recipe updated successfully", {
        description: "You will be redirected shortly.",
      })

      return data
    }
  } catch (error) {
    throw error
  }
}
