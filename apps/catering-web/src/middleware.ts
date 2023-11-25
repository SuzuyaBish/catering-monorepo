import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"

import { createClient } from "./lib/middle"

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createClient(req)

  const {
    data: { user },
  } = await supabase.supabase.auth.getUser()

  // if user is signed in and the current path is / redirect the user to /account
  if (user && req.nextUrl.pathname === "/login") {
    return NextResponse.redirect(new URL("/", req.url))
  }

  if (user && req.nextUrl.pathname === "/signup") {
    return NextResponse.redirect(new URL("/", req.url))
  }

  // if user is not signed in and the current path is not / redirect the user to /
  if (!user && req.nextUrl.pathname === "/account") {
    return NextResponse.redirect(new URL("/login", req.url))
  }

  return res
}

export const config = {
  matcher: ["/account", "/login", "/signup", "/recipes", "/recipes/:id"],
}
