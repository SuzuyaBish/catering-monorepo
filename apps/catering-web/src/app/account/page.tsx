'use client'

import { User, createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { useEffect, useState } from "react"

export default function AccountPage() {
  const supabase = createClientComponentClient()
  const [user, setUser] = useState<User | null>(null) 

  const getUser = async () => {
    const thing = await supabase.auth.getUser() 

    return thing.data.user
  }

  useEffect(() => {
    getUser().then((user) => setUser(user))
  }, [])

  return (
    <form action="/auth/signout" method="post">
      <button className="button block" type="submit">
        {user ? `Sign out ${user.email}` : "Sign out"}
      </button>
    </form>
  )
}
