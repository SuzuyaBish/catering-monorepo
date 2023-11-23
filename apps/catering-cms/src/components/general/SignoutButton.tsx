import { Button } from "../ui/button"
import {LogOutIcon} from 'lucide-react'

export default function SignoutButton() {
  return (
    <form action="/auth/signout" method="post">
      <Button type="submit" variant="ghost">
        <LogOutIcon className="h-[1.2rem] w-[1.2rem]" />
      </Button>
    </form>
  )
}
