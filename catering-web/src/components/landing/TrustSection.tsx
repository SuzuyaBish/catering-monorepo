const stats = [
  { id: 1, name: "Food Items", value: "1000+" },
  { id: 2, name: "Satisfied Customers", value: "100+" },
  { id: 3, name: "Awards", value: "10" },
]

export default function TrustSection() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
        <h2 className="text-orangeColor text-base font-semibold leading-8">
          Our track record
        </h2>
        <p className="text-blueColor font-montserrat mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          Trusted by thousands of customers&nbsp;worldwide
        </p>
        <p className="mt-6 text-lg leading-8">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
          impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis
          ratione.
        </p>
      </div>
      <dl className="text-blueColor mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="border-blueColor flex flex-col gap-y-3 border-l pl-6"
          >
            <dt className="text-sm leading-6">{stat.name}</dt>
            <dd className="text-orangeColor order-first text-3xl font-semibold tracking-tight">
              {stat.value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
