import { create } from "zustand"

interface RecipeStore {
  recipe: Recipe
  recipeImage: File
  setRecipe: (recipe: Recipe) => void
  setRecipeImage: (recipeImage: File) => void
}

export const useRecipeStore = create<RecipeStore>((set) => ({
  recipe: {} as Recipe,
  recipeImage: {} as File,
  setRecipe: (recipe) => set({ recipe }),
  setRecipeImage: (recipeImage) => set({ recipeImage }),
}))
