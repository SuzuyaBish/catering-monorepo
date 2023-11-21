import { ButtonHTMLAttributes, FC } from "react"

import { cn } from "@/lib/utils"

import { Icons } from "../icons"
import { Button } from "../ui/button"

interface OrangeButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
  size?: "sm" | "lg"
  loading?: boolean
}

const OrangeButton: FC<OrangeButtonProps> = ({
  text,
  size = "sm",
  type,
  loading = false,
  ...props
}) => {
  return (
    <Button
      {...props}
      type={type}
      className={cn(
        "bg-orangeColor hover:text-orangeColor inline-flex px-10 py-6 transition-colors duration-300 hover:bg-white",
        size === "lg" ? "w-full" : ""
      )}
    >
      {loading ? (
        <Icons.spinner className="h-4 w-4 animate-spin text-white" />
      ) : (
        <div>{text}</div>
      )}
    </Button>
  )
}

export default OrangeButton
