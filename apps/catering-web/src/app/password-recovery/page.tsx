"use client"

import { useState } from "react"
import Image from "next/image"
import { toast } from "sonner"

import { createClient } from "@/lib/client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Icons } from "@/components/icons"

export default function PasswordRecoveryPage() {
  const supabase = createClient()

  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState("")

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setLoading(true)
    const currentUrl = window.location.origin

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${currentUrl}/auth/callback?next=/password-recovery/reset-password`,
      })

      if (error) {
        toast.error(error.message)
        setLoading(false)
      } else {
        setLoading(false)
        toast.success("Reset request sent", {
          description: "Please check your email for a recovery link",
        })
      }
    } catch (error) {
      setLoading(false)
      toast.error("An unexpected error occurred", {
        description: "Please try again later.",
      })
    }
  }

  return (
    <div className="h-full">
      <div className="flex h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="relative mx-auto h-24 w-24">
            <Image
              className="object-cover"
              src="/ico.png"
              fill
              alt="Your Company"
            />
          </div>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Password Recovery
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={onSubmit} className="space-y-6">
            <div>
              <Label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </Label>
              <div className="mt-2">
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  disabled={loading}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div>
              <Button
                type="submit"
                className="bg-orangeColor hover:bg-orangeColor/80 w-full"
                disabled={loading}
              >
                {loading && (
                  <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                )}
                Send Password Recovery
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
