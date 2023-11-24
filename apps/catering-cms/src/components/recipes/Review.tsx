import { FC } from "react"
import { StarIcon } from "lucide-react"

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ")
}

interface ReviewProps {
  review: Review
  index: number
}

const Review: FC<ReviewProps> = (props) => {
  return (
    <div key={props.review.id} className="flex space-x-4 text-sm text-gray-500">
      <div className="flex-none py-10">
        <img
          src={props.review.author.avatar}
          alt=""
          className="h-10 w-10 rounded-full bg-gray-100"
        />
      </div>
      <div
        className={classNames(
          props.index === 0 ? "" : "border-t border-gray-200",
          "py-10"
        )}
      >
        <h3 className="font-medium text-gray-900">
          {props.review.author.first_name + " " + props.review.author.last_name}
        </h3>
        <p>
          <time>{props.review.created_at}</time>
        </p>

        <div className="mt-4 flex items-center">
          {[0, 1, 2, 3, 4].map((rating) => (
            <StarIcon
              key={rating}
              className={classNames(
                Number(props.review.rating) > rating
                  ? "text-yellow-400"
                  : "text-gray-300",
                "h-5 w-5 flex-shrink-0"
              )}
              aria-hidden="true"
            />
          ))}
        </div>
        <p className="sr-only">{props.review.rating} out of 5 stars</p>

        <div className="prose prose-sm mt-4 max-w-none text-gray-500">
          {props.review.review}
        </div>
      </div>
    </div>
  )
}

export default Review
