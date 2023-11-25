import { Skeleton } from "../ui/skeleton"

export default function RelatedRecipesFallback() {
  return (
    <div className="mx-auto mt-24 max-w-2xl sm:mt-32 lg:max-w-none">
      <div className="flex items-center justify-between space-x-4">
        <h2 className="text-lg font-medium text-gray-900">
          Customers also viewed
        </h2>
        <a
          href="#"
          className="whitespace-nowrap text-sm font-medium text-indigo-600 hover:text-indigo-500"
        >
          View all
          <span aria-hidden="true"> &rarr;</span>
        </a>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
        {Array(1)
          .fill(0)
          .map((recipe) => (
            <div key={recipe.id} className="group relative">
              <div className="aspect-h-3 aspect-w-4 relative overflow-hidden rounded-lg">
                <Skeleton className="h-full w-full" />
                <div
                  className="flex items-end p-4 opacity-0 group-hover:opacity-100"
                  aria-hidden="true"
                >
                  <div className="w-full rounded-md bg-white bg-opacity-75 px-4 py-2 text-center text-sm font-medium text-gray-900 backdrop-blur">
                    View Product
                  </div>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between space-x-8 text-base font-medium text-gray-900">
                <h3>
                  <a href="#">
                    <span aria-hidden="true" className="absolute inset-0" />
                    <Skeleton className="h-4 w-24" />
                  </a>
                </h3>
                <Skeleton className="h-4 w-10" />
              </div>
              <Skeleton className="mt-4 h-10 w-full" />
            </div>
          ))}
      </div>
    </div>
  )
}
