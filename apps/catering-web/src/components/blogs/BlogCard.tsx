import { FC } from "react"
import Image from "next/image"
import Link from "next/link"
import { format } from "date-fns"

interface BlogCardProps extends Blog {}

const BlogCard: FC<BlogCardProps> = (props) => {
  return (
    <article
      key={props.id}
      className="flex flex-col items-start justify-between"
    >
      <div className="relative aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]">
        <Image
          src={props.image}
          fill
          alt=""
          className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
        />
        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
      </div>
      <div className="max-w-xl">
        <div className="mt-8 flex items-center gap-x-4 text-xs">
          <time dateTime={props.created_at} className="text-gray-500">
            {format(new Date(props.created_at), "MMMM dd, yyyy")}
          </time>
          <Link
            href={`/blogs/${props.id}`}
            className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
          >
            {/* {props.category} */}
          </Link>
        </div>
        <div className="group relative">
          <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            <Link href={`/blogs/${props.id}`}>
              <span className="absolute inset-0" />
              {props.title}
            </Link>
          </h3>
          <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
            {props.subtitle.substring(0, 200)}
          </p>
        </div>
        <div className="relative mt-8 flex items-center gap-x-4">
          <div className="relative h-10 w-10">
            <Image
              src={props.author?.avatar}
              alt=""
              fill
              className="h-10 w-10 rounded-full bg-gray-100 object-cover"
            />
          </div>
          <div className="text-sm leading-6">
            <p className="font-semibold text-gray-900">
              <Link href={`/blogs/${props.id}`}>
                <span className="absolute inset-0" />
                {props.author?.first_name} {props.author?.last_name}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </article>
  )
}

export default BlogCard
