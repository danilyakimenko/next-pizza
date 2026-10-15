import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Next Pizza | Dashboard",
  description:
    "Next Pizza - это онлайн-магазин, где вы можете купить пиццу и другие блюда.",
}

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <main className="min-h-screen">{children}</main>
}
