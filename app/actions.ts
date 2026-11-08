"use server"

import { CheckoutFormValues } from "@/shared/components/shared"
import { prisma } from "@/prisma/prisma-client"
import { OrderStatus } from "@prisma/client"
import { cookies } from "next/headers"

export async function createOrder(data: CheckoutFormValues) {
  try {
    const cookieStore = cookies()
    const cartToken = cookieStore.get('cartToken')?.value

    if (!cartToken) {
      throw new Error('Cart token not found')
    }
  } catch (error) {
    console.error(error)
  }
}
