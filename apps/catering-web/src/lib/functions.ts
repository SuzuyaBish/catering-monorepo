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
  if (!blog.bottom_content) return false
  if (!blog.image) return false
  if (!blog.break_image) return false
   
  return true
}