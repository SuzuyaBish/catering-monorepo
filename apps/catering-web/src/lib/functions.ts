import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { toast } from "sonner"

const supabase = createClientComponentClient()

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ")
}

export function canShowBlog(blog: Blog) {
  if (!blog) return false
  if (!blog.title) return false
  if (!blog.subtitle) return false
  if (!blog.author) return false
  if (!blog.created_at) return false
  if (!blog.last_updated) return false
  if (!blog.top_content) return false
  if (!blog.image) return false

  return true
}

export function canShowRecipe(recipe: Recipe) {
  if (!recipe) return false
  if (!recipe.title) return false
  if (!recipe.description) return false
  if (!recipe.ingredients) return false
  if (!recipe.instructions) return false
  if (!recipe.highlights) return false
  if (!recipe.image) return false
  if (!recipe.created_at) return false
  if (!recipe.last_updated) return false

  return true
}

export const getReviewAverage = (recipe: Recipe) => {
  const reviews = recipe.reviews
  const reviewCount = reviews.length
  const reviewTotal = reviews.reduce((acc, review) => {
    return acc + Number(review.rating)
  }, 0)

  return Number.isNaN(reviewTotal / reviewCount)
    ? ""
    : reviewTotal / reviewCount
}

export const getRelatedRecipes = (recipe: Recipe, recipes: Recipe[]) => {
  const relatedRecipes = recipes.filter((r) => r.id !== recipe.id)
  return relatedRecipes
}

export const uploadImage = async (file: File) => {
  try {
    const name = `${file.name}`
    const userId = await supabase.auth.getUser()

    const secondsInYear = 31536000

    const { data, error } = await supabase.storage
      .from("users")
      .upload(`${userId.data.user?.id}/${name}`, file, {
        upsert: false,
      })

    if (error) {
      toast.error("Error uploading image", {
        description: error.message,
      })
      return
    }

    const { data: urlData } = await supabase.storage
      .from("users")
      .createSignedUrl(`${userId.data.user?.id}/${name}`, secondsInYear)

    return urlData?.signedUrl
  } catch (error) {
    throw error
  }
}

export const updateUser = async (user: User, image: File | null) => {
  try {
    let newUser = user

    if (image !== null) {
      const imageUrl = await uploadImage(image)

      newUser = {
        ...user,
        avatar: imageUrl || user.avatar,
      }
    }

    const { data, error } = await supabase
      .from("users")
      .update([
        {
          first_name: newUser.first_name,
          last_name: newUser.last_name,
          avatar: newUser.avatar,
        },
      ])
      .eq("id", newUser.id)
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

export const getRecipesFromFavorites = (favorites: Favorite[]) => {
  const recipes = favorites.map((favorite) => favorite.recipe)
  return recipes
}

export const recipeInFavorites = (recipe: Recipe, favorites: Favorite[]) => {
  const recipeIds = favorites.map((favorite) => favorite.recipe.id)
  return recipeIds.includes(recipe.id)
}

export const fetchUser = async () => {
  const user = await supabase.auth.getUser()

  const { data } = await supabase
    .from("users")
    .select("*, favorites(*, recipe(*))")
    .eq("user_id", user.data.user?.id)
    .single()

  return data as User
}

export const fetchRecipeFromId = async (id: string) => {
  const user = await supabase.auth.getSession()

  const { data: userData } = await supabase
    .from("users")
    .select("*")
    .eq("user_id", user.data.session?.user.id)
    .single()

  const { data } = await supabase
    .from("recipes")
    .select("*, reviews(*, author(*))")
    .eq("id", id)
    .single()

  return {
    recipe: data as Recipe,
    user: user,
  }
}
