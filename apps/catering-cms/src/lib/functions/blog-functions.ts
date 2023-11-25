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
          author: 1,
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

export const updateBlog = async (blog: Blog, image: File) => {
  try {
    let newBlog = blog

    if (image.name) {
      const imageUrl = await uploadImage(image, "blogs")

      newBlog = {
        ...blog,
        image: imageUrl || blog.image,
      }
    }

    const { data, error } = await supabase
      .from("blogs")
      .update([
        {
          title: newBlog.title,
          image: newBlog.image,
          subtitle: newBlog.subtitle,
          top_content: newBlog.top_content,
          author: newBlog.author.id,
        },
      ])
      .eq("id", blog.id)
      .select("*")

    if (error) {
      console.log(error.message)
      toast.error("Something went wrong", {
        description: "Please try again.",
      })
    }

    if (data) {
      toast.success("Blog updated successfully", {
        description: "You will be redirected shortly.",
      })

      return data
    }
  } catch (error) {
    throw error
  }
}

export const deleteBlog = async (id: string) => {
  try {
    const { data, error } = await supabase
      .from("blogs")
      .delete()
      .eq("id", id)
      .select("*")

    if (error) {
      throw error
    }

    if (data) {
      toast.success("Blog deleted successfully", {
        description: "You will be redirected shortly.",
      })

      return data
    }
  } catch (error) {
    throw error
  }
}
