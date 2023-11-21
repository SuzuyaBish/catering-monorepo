"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import { Icons } from "@/components/Icons"

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/account" className="mr-6 flex items-center space-x-2">
        <Icons.logo className="h-6 w-6" />
        <span className="hidden font-bold sm:inline-block">Catering CMS</span>
      </Link>
      <nav className="flex items-center space-x-6 text-sm font-medium">
        <Link
          href="/account"
          className={cn(
            "hover:text-foreground/80 transition-colors",
            pathname === "/account" ? "text-foreground" : "text-foreground/60"
          )}
        >
          Recipes
        </Link>
        <Link
          href="/account/blogs"
          className={cn(
            "hover:text-foreground/80 transition-colors",
            pathname?.startsWith("/account/blogs")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Blogs
        </Link>
        <Link
          href="/account/testimonials"
          className={cn(
            "hover:text-foreground/80 transition-colors",
            pathname?.startsWith("/account/testimonials")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Testimonials
        </Link>
      </nav>
    </div>
  )
}
