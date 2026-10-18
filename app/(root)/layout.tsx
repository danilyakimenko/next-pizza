import type { Metadata } from "next"
import { Header } from "@/shared/components/shared"
import React from "react"

export const metadata: Metadata = {
  title: "Next Pizza | Home",
  description:
    "Next Pizza - это онлайн-магазин, где вы можете купить пиццу и другие блюда.",
}

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode
  modal: React.ReactNode
}>) {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {children}
        {modal}
      </main>
    </>
  )
}
