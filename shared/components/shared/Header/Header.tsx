"use client"

import { Container, SearchInput } from "@/shared/components/shared"
import Image from "next/image"
import { Button } from "@/shared/components/ui"
import { User } from "lucide-react"
import Link from "next/link"
import { CartButton } from "@/shared/components/shared"
import { cn } from "cn"
import React, { useEffect } from "react"
import { useSearchParams } from "next/navigation"
import toast from "react-hot-toast"
import { signIn, useSession } from "next-auth/react"

interface Props {
  className?: string
  hasSearch?: boolean
  hasCart?: boolean
}

export const Header: React.FC<Props> = ({
  className,
  hasSearch = true,
  hasCart = true,
}) => {
  const { data: session } = useSession()
  const searchParams = useSearchParams()

  console.log(session)
  useEffect(() => {
    if (searchParams.has('paid')) {
      setTimeout(() => {
        toast.success("Заказ успешно оплачен! Информация отправлена на почту.")
      }, 300)
    }
  }, [])

  return (
    <header className={cn("border-b", className)}>
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

        {hasSearch && (
          <div className="mx-10 flex-1">
            <SearchInput />
          </div>
        )}

        <div className="flex items-center gap-3">
          <Button className="flex items-center gap-1" variant="outline" onClick={() => signIn('github', {
            callbackUrl: '/',
            redirect: true,
          })}>
            <User size={16} />
            Войти
          </Button>

          {hasCart && <CartButton />}
        </div>
      </Container>
    </header>
  )
}
