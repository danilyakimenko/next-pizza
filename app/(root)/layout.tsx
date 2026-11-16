import type { Metadata } from "next"
import { Header } from "@/shared/components/shared"
import React, { Suspense } from "react"

export const metadata: Metadata = {
  title: "Next Pizza | Главная",
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
      <Suspense>
        <Header />
      </Suspense>
      <main className="min-h-screen">
        {children}
        {modal}
      </main>
    </>
  )
}
