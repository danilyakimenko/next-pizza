import type { Metadata } from "next"
import React from "react"

export const metadata: Metadata = {
  title: "Next Pizza | Корзина",
  description:
    "Next Pizza - это онлайн-магазин, где вы можете купить пиццу и другие блюда.",
}

export default function CheckoutLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <main className="min-h-screen bg-[F4F1EE]">{children}</main>
}
