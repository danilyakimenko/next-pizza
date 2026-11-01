import type { Metadata } from "next"
import React from "react"
import { Container, Header } from "@/shared/components/shared"

export const metadata: Metadata = {
  title: "Next Pizza | Корзина",
}

export default function CheckoutLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Container>
        <Header className="border-b-gray-200" hasSearch={false} hasCart={false} />
        <main className="min-h-screen bg-[F4F1EE]">{children}</main>
      </Container>
    </>
  )
}
