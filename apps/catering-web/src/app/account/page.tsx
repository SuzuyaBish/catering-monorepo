"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"

import { updateUser } from "@/lib/functions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Icons } from "@/components/icons"

const secondaryNavigation = [
  { name: "Account", href: "#", current: true },
  { name: "Saved Recipes", href: "#", current: false },
]

export default function Example() {
  const supabase = createClientComponentClient()

  const [user, setUser] = useState<User>({} as User)
  const [firstName, setFirstName] = useState<string>("")
  const [lastName, setLastName] = useState<string>("")
  const [userImage, setUserImage] = useState<File | null>(null)
  const [buttonLoading, setButtonLoading] = useState<boolean>(false)

  const fetchUser = async () => {
    const currentUser = await supabase.auth.getUser()

    const { data } = await supabase
      .from("users")
      .select("*")
      .eq("user_id", currentUser.data.user?.id)
      .single()
    return data as User
  }

  useEffect(() => {
    fetchUser().then((data) => {
      setUser(data)
      setFirstName(data.first_name)
      setLastName(data.last_name)
    })
  }, [])

  return (
    <>
      <div>
        <div className="xl:pl-72">
          <main>
            <header className="border-b">
              <nav className="flex overflow-x-auto py-4">
                <ul
                  role="list"
                  className="text-muted-foreground flex min-w-full flex-none gap-x-6 px-4 text-sm font-semibold leading-6 sm:px-6 lg:px-8"
                >
                  {secondaryNavigation.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className={item.current ? "text-orangeColor" : ""}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </header>

            <div className="divide-y">
              <div className="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
                <div>
                  <h2 className="text-foreground text-base font-semibold leading-7">
                    Personal Information
                  </h2>
                  <p className="text-muted-foreground mt-1 text-sm leading-6">
                    Use a permanent address where you can receive mail.
                  </p>
                </div>

                <form className="md:col-span-2">
                  <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6">
                    <div className="col-span-full flex items-center gap-x-8">
                      <div className="relative h-24 w-24 flex-none rounded-lg bg-gray-800 object-cover">
                        <Image
                          src={
                            userImage?.name
                              ? URL.createObjectURL(userImage)
                              : user.avatar
                          }
                          fill
                          alt=""
                          className="h-24 w-24 flex-none rounded-lg bg-gray-800 object-cover"
                        />
                      </div>
                      <div>
                        <Input
                          type="file"
                          name="user-image"
                          id="user-image"
                          autoComplete="user-image"
                          onChange={(e) => setUserImage(e.target.files![0])}
                          disabled={buttonLoading}
                          accept="image/png, image/jpeg, image/jpg"
                        />
                        <p className="text-muted-foreground mt-2 text-xs leading-5">
                          JPG, GIF or PNG. 1MB max.
                        </p>
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <Label htmlFor="first-name">First name</Label>
                      <div className="mt-2">
                        <Input
                          type="text"
                          name="first-name"
                          id="first-name"
                          autoComplete="given-name"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          disabled={buttonLoading}
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <Label htmlFor="last-name">Last name</Label>
                      <div className="mt-2">
                        <Input
                          type="text"
                          name="last-name"
                          id="last-name"
                          autoComplete="family-name"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          disabled={buttonLoading}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 flex">
                    <Button
                      type="submit"
                      className="bg-orangeColor"
                      disabled={buttonLoading}
                      onClick={async () => {
                        setButtonLoading(true)

                        const newUser: User = {
                          ...user,
                          first_name: firstName,
                          last_name: lastName,
                        }

                        await updateUser(newUser, userImage).then(() => {
                          setButtonLoading(false)
                        })
                      }}
                    >
                      {buttonLoading && (
                        <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                      )}
                      Save
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}
