import { Container } from "@/components/shared"
import Image from "next/image"
import { Button } from "@/components/ui"
import { ShoppingCart, User } from "lucide-react"

export const Header = () => {
  return (
    <header className="border border-b">
      <Container className="flex items-center justify-between py-8">
        <div className="flex items-center gap-4">
          <Image src="/logo.png" alt="Logo" width={35} height={35} />
          <div>
            <h1 className="text-2xl font-black uppercase">Next Pizza</h1>
            <p className="text-sm leading-3 text-gray-400">
              вкусней уже некуда
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Button className="flex items-center gap-1" variant="outline">
            <User size={16} />
            Войти
          </Button>
          <div>
            <Button className="group relative">
              <b>520 ₽</b>
              <span className="h-full w-px bg-white/30 mx-3" />
              <div className="flex items-center gap-1 transition duration-200 group-hover:opacity-0">
                <ShoppingCart className="relative" size={16} strokeWidth={2} />
                <b>3</b>
              </div>
            </Button>
          </div>
        </div>
      </Container>
    </header>
  )
}
