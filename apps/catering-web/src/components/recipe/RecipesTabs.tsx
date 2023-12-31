"use client"

import { FC, Fragment } from "react"
import Image from "next/image"
import { Tab } from "@headlessui/react"
import { StarIcon } from "@heroicons/react/20/solid"
import { format } from "date-fns"

import { classNames } from "@/lib/functions"

const faqs = [
  {
    question: "What format are these icons?",
    answer:
      "The icons are in SVG (Scalable Vector Graphic) format. They can be imported into your design tool of choice and used directly in code.",
  },
  {
    question: "Can I use the icons at different sizes?",
    answer:
      "Yes. The icons are drawn on a 24 x 24 pixel grid, but the icons can be scaled to different sizes as needed. We don't recommend going smaller than 20 x 20 or larger than 64 x 64 to retain legibility and visual balance.",
  },
  // More FAQs...
]
const license = {
  href: "#",
  summary:
    "For personal and professional use. You cannot resell or redistribute these icons in their original or modified state.",
  content: `
    <h4>Overview</h4>
    
    <p>For personal and professional use. You cannot resell or redistribute these icons in their original or modified state.</p>
    
    <ul role="list">
    <li>You\'re allowed to use the icons in unlimited projects.</li>
    <li>Attribution is not required to use the icons.</li>
    </ul>
    
    <h4>What you can do with it</h4>
    
    <ul role="list">
    <li>Use them freely in your personal and professional work.</li>
    <li>Make them your own. Change the colors to suit your project or brand.</li>
    </ul>
    
    <h4>What you can\'t do with it</h4>
    
    <ul role="list">
    <li>Don\'t be greedy. Selling or distributing these icons in their original or modified state is prohibited.</li>
    <li>Don\'t be evil. These icons cannot be used on websites or applications that promote illegal or immoral beliefs or activities.</li>
    </ul>
  `,
}

const reviews = {
  average: 4,
  featured: [
    {
      id: 1,
      rating: 5,
      content: `
        <p>This icon pack is just what I need for my latest project. There's an icon for just about anything I could ever need. Love the playful look!</p>
      `,
      date: "July 16, 2021",
      datetime: "2021-07-16",
      author: "Emily Selman",
      avatarSrc:
        "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
    },
    {
      id: 2,
      rating: 5,
      content: `
        <p>Blown away by how polished this icon pack is. Everything looks so consistent and each SVG is optimized out of the box so I can use it directly with confidence. It would take me several hours to create a single icon this good, so it's a steal at this price.</p>
      `,
      date: "July 12, 2021",
      datetime: "2021-07-12",
      author: "Hector Gibbons",
      avatarSrc:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
    },
    // More reviews...
  ],
}

interface RecipesTabsProps extends Recipe {}

const RecipesTabs: FC<RecipesTabsProps> = (props) => {
  return (
    <div className="mx-auto mt-16 w-full max-w-2xl lg:col-span-4 lg:mt-0 lg:max-w-none">
      <Tab.Group as="div">
        <div className="border-b border-gray-200">
          <Tab.List className="-mb-px flex space-x-8">
            <Tab
              className={({ selected }) =>
                classNames(
                  selected
                    ? "border-orangeColor text-orangeColor"
                    : "border-transparent text-gray-700 hover:border-gray-300 hover:text-gray-800",
                  "whitespace-nowrap border-b-2 py-6 text-sm font-medium"
                )
              }
            >
              Ingredients
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  selected
                    ? "border-orangeColor text-orangeColor"
                    : "border-transparent text-gray-700 hover:border-gray-300 hover:text-gray-800",
                  "whitespace-nowrap border-b-2 py-6 text-sm font-medium"
                )
              }
            >
              Instructions
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  selected
                    ? "border-orangeColor text-orangeColor"
                    : "border-transparent text-gray-700 hover:border-gray-300 hover:text-gray-800",
                  "whitespace-nowrap border-b-2 py-6 text-sm font-medium"
                )
              }
            >
              Customer Reviews
            </Tab>
          </Tab.List>
        </div>
        <Tab.Panels as={Fragment}>
          <Tab.Panel className="text-sm text-gray-500">
            <h3 className="sr-only">Frequently Asked Questions</h3>

            <dl className="mt-10">
              {props.ingredients.map((ingredient) => (
                <Fragment key={ingredient}>
                  <dd className="prose prose-sm mb-2 max-w-none text-gray-500">
                    <li>{ingredient}</li>
                  </dd>
                </Fragment>
              ))}
            </dl>
          </Tab.Panel>

          <Tab.Panel className="pt-10">
            <h3 className="sr-only">License</h3>

            <dl className="">
              {props.instructions.map((instruction) => (
                <Fragment key={instruction}>
                  <dd className="prose prose-sm mb-2 max-w-none text-gray-500">
                    <li>{instruction}</li>
                  </dd>
                </Fragment>
              ))}
            </dl>
          </Tab.Panel>

          <Tab.Panel className="-mb-10">
            <h3 className="sr-only">Customer Reviews</h3>

            {props.reviews.map((review, reviewIdx) => (
              <div
                key={review.id}
                className="flex space-x-4 text-sm text-gray-500"
              >
                <div className="flex-none py-10">
                  <div className="relative h-10 w-10">
                    <Image
                      src={review.author.avatar}
                      alt=""
                      fill
                      className="h-10 w-10 rounded-full bg-gray-100 object-cover"
                    />
                  </div>
                </div>
                <div
                  className={classNames(
                    reviewIdx === 0 ? "" : "border-t border-gray-200",
                    "flex-1 py-10"
                  )}
                >
                  <h3 className="font-medium text-gray-900">
                    {review.author.first_name} {review.author.last_name}
                  </h3>
                  <p>
                    <time dateTime={review.created_at}>
                      {format(new Date(review.created_at), "MMMM dd, yyyy")}
                    </time>
                  </p>

                  <div className="mt-4 flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={classNames(
                          Number(review.rating) > rating
                            ? "text-yellow-400"
                            : "text-gray-300",
                          "h-5 w-5 flex-shrink-0"
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="sr-only">{review.rating} out of 5 stars</p>

                  <div className="prose prose-sm mt-4 max-w-none text-gray-500">
                    {review.review}
                  </div>
                </div>
              </div>
            ))}
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}

export default RecipesTabs
