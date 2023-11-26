"use client"

import { useState } from "react"
import { toast } from "sonner"

import { sendEmail, sendEmailConfirm } from "@/lib/actions"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import OrangeButton from "@/components/general/SignInButton"

export default function ContactPage() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [message, setMessage] = useState("")
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setLoading(true)

    await sendEmail([email], firstName, lastName).then(async (v) => {
      setLoading(false)
      setFirstName("")
      setLastName("")
      setMessage("")
      setEmail("")

      if (v) {
        toast.success("Email sent successfully", {
          description: "We will get back to you as soon as possible",
        })
        await sendEmailConfirm(firstName, lastName, email, message)
      }
    })
  }

  return (
    <div className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
            width={200}
            height={200}
            x="50%"
            y={-64}
            patternUnits="userSpaceOnUse"
          >
            <path d="M100 200V.5M.5 .5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y={-64} className="overflow-visible fill-gray-50">
          <path
            d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M299.5 800h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>
        <rect
          width="100%"
          height="100%"
          strokeWidth={0}
          fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
        />
      </svg>
      <div className="mx-auto max-w-xl lg:max-w-4xl">
        <h2 className="font-montserrat text-4xl font-bold tracking-tight text-gray-900">
          Let’s talk about your project
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          We help companies and individuals build out their brand guidelines.
        </p>
        <div className="mt-16 flex flex-col gap-16 sm:gap-y-20 lg:flex-row">
          <form onSubmit={onSubmit} className="lg:flex-auto">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <Label
                  htmlFor="first-name"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  First name
                </Label>
                <div className="mt-2.5">
                  <Input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <Label
                  htmlFor="last-name"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Last name
                </Label>
                <div className="mt-2.5">
                  <Input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    required
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <Label
                  htmlFor="last-name"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Email address
                </Label>
                <div className="mt-2.5">
                  <Input
                    type="email"
                    name="last-name"
                    id="last-name"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <Label
                  htmlFor="message"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Message
                </Label>
                <div className="mt-2.5">
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="mt-10">
              <OrangeButton
                size="lg"
                text="Let's Talk"
                type="submit"
                disabled={loading}
                loading={loading}
              />
            </div>
            <p className="mt-4 text-sm leading-6 text-gray-500">
              By submitting this form, I agree to the{" "}
              <a href="#" className="font-semibold text-indigo-600">
                privacy&nbsp;policy
              </a>
              .
            </p>
          </form>
          <div className="lg:mt-6 lg:w-80 lg:flex-none">
            <img
              className="h-12 w-auto"
              src="https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg"
              alt=""
            />
            <figure className="mt-10">
              <blockquote className="text-lg font-semibold leading-8 text-gray-900">
                <p>
                  “The Cooked Sisters turned our anniversary dinner into a
                  romantic experience. From the moment we contacted them, the
                  team displayed exceptional professionalism and a genuine
                  passion for their craft. The menu they curated for our special
                  evening was nothing short of extraordinary. Each dish was a
                  journey through flavors, and the impeccable service added an
                  extra layer of sophistication. The Cooked Sisters made our
                  anniversary truly memorable, and we look forward to savoring
                  their culinary delights in the future.”
                </p>
              </blockquote>
              <figcaption className="mt-10 flex gap-x-6">
                <img
                  src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=96&h=96&q=80"
                  alt=""
                  className="h-12 w-12 flex-none rounded-full bg-gray-50"
                />
                <div>
                  <div className="text-base font-semibold text-gray-900">
                    Brenna Goyette
                  </div>
                  <div className="text-sm leading-6 text-gray-600">
                    CEO of Workcation
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  )
}
