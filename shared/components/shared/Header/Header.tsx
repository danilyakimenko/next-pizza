import { Container, SearchInput } from "@/shared/components/shared"
import Image from "next/image"
import { Button } from "@/shared/components/ui"
import { User } from "lucide-react"
import Link from "next/link"
import { CartButton } from "@/shared/components/shared"

export const Header = () => {
  return (
    <header className="border border-b">
      <Container className="flex items-center justify-between py-8">
        <Link className="flex items-center gap-4" href="/">
          <Image src="/logo.png" alt="Logo" width={35} height={35} />
          <div>
            <h1 className="text-2xl font-black uppercase">Next Pizza</h1>
            <p className="text-sm leading-3 text-gray-400">
              вкусней уже некуда
            </p>
          </div>
        </Link>

        <div className="mx-10 flex-1">
          <SearchInput />
        </div>

        <div className="flex items-center gap-3">
          <Button className="flex items-center gap-1" variant="outline">
            <User size={16} />
            Войти
          </Button>

          <CartButton />
        </div>
      </Container>
    </header>
  )
}
