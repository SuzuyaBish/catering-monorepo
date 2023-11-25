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
