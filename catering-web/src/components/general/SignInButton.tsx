import { ButtonHTMLAttributes, FC } from "react"

import { cn } from "@/lib/utils"

import { Button } from "../ui/button"

interface OrangeButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
  size?: "sm" | "lg"
}

const OrangeButton: FC<OrangeButtonProps> = ({
  text,
  size = "sm",
  type,
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
      {text}
    </Button>
  )
}

export default OrangeButton
