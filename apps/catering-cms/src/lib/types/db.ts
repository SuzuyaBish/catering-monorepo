type Recipe = {
  id?: string
  title: string
  description: string
  created_at: string
  last_updated: string
  highlights: string[]
  ingredients: string[]
  instructions: string[]
  reviews: Review[]
  image: string
}

type Review = {
  id: string
  user_id: string
  rating: number
  comment: string
  created_at: string
}

type User = {
  id: string
  user_id: string
  email: string
  first_name: string
  last_name: string
  avatar: string
  role: "Authenticated" | "Moderator"
}
