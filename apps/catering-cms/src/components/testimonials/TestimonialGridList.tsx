import { FC } from "react"
import Image from "next/image"
import { format } from "date-fns"

interface TestimonialGridListProps {
  testimonials: Testimonial[]
}

const TestimonialGridList: FC<TestimonialGridListProps> = (props) => {
  return (
    <ul
      role="list"
      className="grid grid-cols-2 gap-x-4 gap-y-8 py-10 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
    >
      {props.testimonials.map((blog) => (
        <div key={blog.id}>
          <figure className="bg-muted ring-muted-foreground/5 rounded-2xl p-6 shadow-lg ring-1">
            <blockquote className="text-foreground">
              <p>{`“${blog.testimonial}”`}</p>
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-x-4">
              <div className="relative h-10 w-10">
                <Image
                  className="bg-muted rounded-full object-cover"
                  src={blog.user.avatar}
                  fill
                  alt=""
                />
              </div>
              <div className="flex flex-col">
                <span className="flex font-semibold">
                  {blog.user.first_name} {blog.user.last_name}
                </span>
                <div className="text-muted-foreground text-xs">
                  {format(new Date(blog.created_at), "PP")}
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
      ))}
    </ul>
  )
}

export default TestimonialGridList
