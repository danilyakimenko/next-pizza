import 'server-only'

import { getServerSession } from "next-auth"
import { authOptions } from "@/shared/constants/server"

export const getUserSession = async () => {
  const session = await getServerSession(authOptions)

  return session?.user ?? null
}