import React from "react"
import { Nunito } from "next/font/google"
import "./globals.css"
import { Toaster } from "react-hot-toast"
import type { Metadata } from "next"
import { Providers } from "@/shared/components/shared/Providers"

const nunito = Nunito({
  subsets: ["cyrillic"],
  variable: "--font-nunito",
  weight: ["400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  description:
    "Next Pizza - это онлайн-магазин, где вы можете купить пиццу и другие блюда.",
}

export default function GlobalLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" suppressHydrationWarning className={nunito.className}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
