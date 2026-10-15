import type { Metadata } from 'next';
import { Nunito } from "next/font/google"

import "../globals.css"
import { cn } from "@/lib/utils"

const nunito = Nunito({
  subsets: ["cyrillic"],
  variable: "--font-nunito",
  weight: ["400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: "Next Pizza",
  description: "Next Pizza - это онлайн-магазин, где вы можете купить пиццу и другие блюда."
}

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="ru"
      suppressHydrationWarning
      className={cn("antialiased", nunito.className)}
    >
      <body>
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  )
}
