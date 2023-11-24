import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/providers/ThemeProvider"

import { cn } from "@/lib/utils"
import { Toaster } from "sonner"
import { SiteFooter } from "@/components/layout/SiteFooter"
import { TailwindIndicator } from "@/components/TailwindIndicator"

import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Cooked Sisters CMS",
  description: "Cooked sisters catering cms",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "bg-background min-h-screen scroll-smooth antialiased",
          inter.className
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system">
          <div className="relative flex min-h-screen flex-col">
            <div className="flex-1">{children}</div>
            <SiteFooter />
          </div>
          <TailwindIndicator />
        </ThemeProvider>
        <Toaster position="top-right" richColors />
      </body>
    </html>
  )
}
