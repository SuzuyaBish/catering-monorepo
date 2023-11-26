import { values } from "@/lib/data"
import TrustSection from "@/components/landing/TrustSection"

export default function AboutPage() {
  return (
    <div className="bg-white pb-16">
      <main className="relative isolate">
        <div className="px-6 pt-16 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-orangeColor font-montserrat text-4xl font-bold tracking-tight sm:text-6xl">
              We love creators
            </h2>
            <p className="text-blueColor mt-6 text-lg leading-8">
              Welcome to The Cooked Sisters, founded by two friends with a
              shared passion for food and a commitment to exceptional service.
              With years of experience in the culinary industry, we&#39;ve
              combined our skills and expertise to create a company that&#39;s
              dedicated to providing delicious food and memorable experiences
              for all occasions.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-20 max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="text-blueColor grid max-w-xl grid-cols-1 gap-8 text-base leading-7 lg:max-w-none lg:grid-cols-2">
              <div>
                <p>
                  Our approach is simple: we believe that the key to great
                  catering is not just about the food, but also about the
                  people. That&#39;s why we work closely with each of our
                  clients to understand their unique needs and preferences, and
                  tailor our menus and services accordingly. Whether you&#39;re
                  planning an intimate dinner party or a large-scale event,
                  we&#39;re here to help you create a one-of-a-kind experience
                  that exceeds your expectations.
                </p>
                <p className="mt-8">
                  At The Cooked Sisters, we&#39;re committed to using only the
                  freshest, highest-quality ingredients, sourced from local and
                  sustainable producers whenever possible. From classic comfort
                  food to innovative global cuisine, we offer a wide range of
                  menu options to suit any taste and budget. And with a team of
                  experienced chefs and servers, we ensure that every dish is
                  expertly prepared and presented with care.
                </p>
              </div>
              <div>
                <p>
                  We&#39;re proud to have built a reputation as one of the most
                  trusted and reliable catering companies in the industry, and
                  we&#39;re passionate about delivering exceptional service to
                  each and every one of our clients. Whether you&#39;re hosting
                  a corporate event, a wedding, or a family gathering, we&#39;re
                  here to make your vision a reality. Contact us today to learn
                  more about our catering services and how we can help you
                  create an unforgettable event.
                </p>
              </div>
            </div>
            <TrustSection inLanding />
          </div>
        </div>
        <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
          <img
            src="/about.jpg"
            alt=""
            className="aspect-[9/4] w-full object-cover xl:rounded-3xl"
          />
        </div>
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-orangeColor text-3xl font-bold tracking-tight sm:text-4xl">
              Our values
            </h2>
            {/* <p className="text-blueColor mt-6 text-lg leading-8">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
              impedit perferendis suscipit eaque, iste dolor cupiditate
              blanditiis.
            </p> */}
          </div>
          <dl className="text-blueColor mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-16">
            {values.map((value) => (
              <div key={value.name} className="relative pl-9">
                <dt className="text-blueColor inline font-semibold">
                  <value.icon
                    className="text-orangeColor absolute left-1 top-1 h-5 w-5"
                    aria-hidden="true"
                  />
                  {value.name}
                </dt>{" "}
                <dd className="inline">{value.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </main>
    </div>
  )
}
