import type { Metadata } from "next"
import { Header } from "@/components/shared"

export const metadata: Metadata = {
  title: "Next Pizza | Home",
  description:
    "Next Pizza - это онлайн-магазин, где вы можете купить пиццу и другие блюда.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
    </>
  )
}
