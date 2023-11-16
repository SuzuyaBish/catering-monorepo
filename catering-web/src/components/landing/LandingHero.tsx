import Image from "next/image"
import Link from "next/link"
import { CheckBadgeIcon } from "@heroicons/react/24/outline"

import OrangeButton from "../general/SignInButton"

export default function LandingHero() {
  return (
    <div className="bg-blueColor">
      <main>
        <div className="relative isolate">
          <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
              <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                  <h1 className="font-montserrat text-4xl font-bold tracking-tight text-white sm:text-6xl">
                    Elevate Your Events with Culinary Excellence
                  </h1>
                  <p className="text-mutedColor relative mt-6 text-lg leading-8 sm:max-w-md lg:max-w-none">
                    Crafting Unforgettable Moments: Elevate Your Events with Our
                    Exquisite Catering Creations and Experience the Art of
                    Culinary Excellence.
                  </p>
                  <div className="mt-10 flex flex-col space-y-3 text-white">
                    <div className="flex items-center gap-x-4">
                      <CheckBadgeIcon className="text-orangeColor h-6 w-6" />
                      <span>Custom Food Menu Catering</span>
                    </div>
                    <div className="flex items-center gap-x-4">
                      <CheckBadgeIcon className="text-orangeColor h-6 w-6" />
                      <span>Free Delivery Catering</span>
                    </div>
                    <div className="flex items-center gap-x-4">
                      <CheckBadgeIcon className="text-orangeColor h-6 w-6" />
                      <span>100% Guarantee For Our Product Quality</span>
                    </div>
                  </div>
                  <div className="mt-10 flex items-center gap-x-6">
                    <Link href="/contact">
                      <OrangeButton text="Free Catering Consultation" />
                    </Link>
                  </div>
                </div>
                <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                  <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                    <div className="relative aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg">
                      <Image
                        src="/images/hero1.jpg"
                        alt=""
                        fill
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                    <div className="relative aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg">
                      <Image
                        src="/images/hero2.jpg"
                        alt=""
                        fill
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg">
                      <Image
                        src="/images/hero3.jpg"
                        alt=""
                        fill
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                    <div className="relative aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg">
                      <Image
                        src="/images/hero4.jpg"
                        alt=""
                        fill
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg">
                      <Image
                        src="/images/hero5.jpg"
                        alt=""
                        fill
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
