import type { Metadata } from "next"
import { Montserrat, Quicksand } from "next/font/google"
import { Toaster } from "sonner"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import Footer from "@/components/layout/Footer"
import SiteHeader from "@/components/layout/Nav"
import { TailwindIndicator } from "@/components/TailwindIndicator"

import "./globals.css"

const quicksand = Quicksand({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-quicksand",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ["Recipes", "Catering", "Food"],
  authors: [
    {
      name: "Jarrod Sloan",
      url: "https://jarrodsloan.com",
    },
  ],
  creator: "Jarrod Sloan",
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    // images: [siteConfig.ogImage],
    // creator: "@shadcn",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body
        className={cn(
          "bg-background text-blueColor min-h-screen scroll-smooth antialiased",
          quicksand.variable,
          montserrat.variable
        )}
      >
        <div className="font-quicksand relative flex min-h-screen flex-col">
          <SiteHeader />
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
        <TailwindIndicator />
        <Toaster position="top-right" richColors />
      </body>
    </html>
  )
}
