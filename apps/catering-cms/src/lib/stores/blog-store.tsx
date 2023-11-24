import { create } from "zustand"

interface BlogStore {
  blog: Blog
  blogImageMain: File
  blogImageSecondary: File
  setBlog: (blog: Blog) => void
  setBlogImageMain: (blogImageMain: File) => void
  setBlogImageSecondary: (blogImageSecondary: File) => void
}

export const useBlogStore = create<BlogStore>((set) => ({
  blog: {} as Blog,
  blogImageMain: {} as File,
  blogImageSecondary: {} as File,
  setBlog: (recipe) => set({ blog: recipe }),
  setBlogImageMain: (recipeImage) => set({ blogImageMain: recipeImage }),
  setBlogImageSecondary: (recipeImage) => set({ blogImageSecondary: recipeImage }),
}))
