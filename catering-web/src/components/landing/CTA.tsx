import Link from "next/link"

import OrangeButton from "../general/SignInButton"

export default function CTA() {
  return (
    <div
      style={{
        backgroundImage: "url('/images/cta.jpg')",
      }}
      className="relative isolate my-20 overflow-hidden bg-gray-900 bg-cover"
    >
      <div className="z-50 px-6 py-24 backdrop-brightness-50 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-montserrat text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to cater your next event?
            <br />
            Get in touch today!
          </h2>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="#">
              <OrangeButton text="Book Now" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
