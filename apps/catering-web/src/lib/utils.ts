import { cookies } from "next/headers"
import { createServerClient, type CookieOptions } from "@supabase/ssr"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
