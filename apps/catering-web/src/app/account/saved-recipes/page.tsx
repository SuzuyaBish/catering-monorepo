import { fetchUser } from "@/lib/actions"
import { getRecipesFromFavorites } from "@/lib/functions"
import RecipeList from "@/components/recipe/RecipeList"

const secondaryNavigation = [
  { name: "Account", href: "/account", current: false },
  { name: "Saved Recipes", href: "/account/saved-recipes", current: true },
]

export const dynamic = "force-dynamic"

export default async function SavedRecipes() {
  const user = await fetchUser()

  return (
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
          <main className="max-w-3xl px-4 py-20 sm:px-6 lg:max-w-7xl lg:px-8">
            <RecipeList
              recipes={getRecipesFromFavorites(user.favorites)}
              user={user}
            />
          </main>
        </main>
      </div>
    </div>
  )
}
