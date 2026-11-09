'use client'

import { Toaster } from "react-hot-toast"
import React from "react"
import { SessionProvider } from "next-auth/react"
import NextTopLoader from "nextjs-toploader"

export const Providers = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <SessionProvider>{children}</SessionProvider>
      <Toaster />
      <NextTopLoader />
    </>
  )
}
