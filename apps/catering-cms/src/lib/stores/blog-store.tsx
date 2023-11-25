import { create } from "zustand"

interface BlogStore {
  blog: Blog
  blogImageMain: File
  setBlog: (blog: Blog) => void
  setBlogImageMain: (blogImageMain: File) => void
}

export const useBlogStore = create<BlogStore>((set) => ({
  blog: {} as Blog,
  blogImageMain: {} as File,
  setBlog: (recipe) => set({ blog: recipe }),
  setBlogImageMain: (recipeImage) => set({ blogImageMain: recipeImage }),
}))
