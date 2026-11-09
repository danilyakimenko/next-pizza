import { signIn, useSession } from "next-auth/react"
import { Button } from "@/shared/components/ui"
import { CircleUser, User } from "lucide-react"
import Link from "next/link"

interface Props {
  onSignInClick?: () => void
}

export const ProfileButton = ({ onSignInClick }: Props) => {
  const { data: session } = useSession()

  return !session ? (
    <Button
      className="flex items-center gap-1"
      variant="outline"
      onClick={onSignInClick}
    >
      <User size={16} />
      Войти
    </Button>
  ) : (
    <Link href="/profile">
      <Button className="flex items-center gap-2" variant="secondary">
        <CircleUser size={18} />
        Профиль
      </Button>
    </Link>
  )
}
