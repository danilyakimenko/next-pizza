"use server"

import {
  CheckoutFormValues,
  PayOrderTemplate,
} from "@/shared/components/shared"
import { prisma } from "@/prisma/prisma-client"
import { OrderStatus, Prisma } from "@prisma/client"
import { cookies } from "next/headers"
import { getUserSession, sendEmail } from "@/shared/lib/server"
import { createPayment } from "@/shared/lib"
import { hashSync } from "bcrypt"

export async function createOrder(data: CheckoutFormValues) {
  try {
    const { firstName, lastName, email, phone, address, comment } = data
    const cookieStore = await cookies()
    const cartToken = cookieStore.get("cartToken")?.value

    if (!cartToken) {
      throw new Error("Cart token not found")
    }

    const userCart = await prisma.cart.findFirst({
      include: {
        user: true,
        items: {
          include: {
            ingredients: true,
            productItem: {
              include: {
                product: true,
              },
            },
          },
        },
      },
      where: {
        token: cartToken,
      },
    })

    if (!userCart) {
      throw new Error("Cart not found")
    }

    if (userCart?.totalAmount === 0) {
      throw new Error("Cart is empty")
    }

    const order = await prisma.order.create({
      data: {
        token: cartToken,
        fullName: `${firstName} ${lastName}`,
        email,
        phone,
        address,
        comment,
        totalAmount: userCart.totalAmount,
        status: OrderStatus.PENDING,
        items: JSON.stringify(userCart.items),
      },
    })

    const { id, totalAmount } = order

    await prisma.cart.update({
      where: {
        id: userCart.id,
      },
      data: {
        totalAmount: 0,
      },
    })

    await prisma.cartItem.deleteMany({
      where: {
        cartId: userCart.id,
      },
    })

    const paymentData = await createPayment({
      amount: totalAmount,
      orderId: id,
      description: `Оплата заказа №${id}`,
    })

    if (!paymentData) {
      throw new Error("Payment data not found")
    }

    await prisma.order.update({
      where: {
        id,
      },
      data: {
        paymentId: paymentData.id,
      },
    })

    const paymentUrl = paymentData.confirmation.confirmation_url

    await sendEmail(
      email,
      `Next Pizza | Оплатите заказ №${id}`,
      PayOrderTemplate({
        orderId: id,
        totalAmount,
        paymentUrl,
      })
    )

    return paymentUrl
  } catch (error) {
    console.error("[CreateOrder] Server error:", error)
    throw error
  }
}

export async function updateUserInfo(body: Prisma.UserUpdateInput) {
  try {
    const currentUser = await getUserSession()

    if (!currentUser) {
      throw new Error('Пользователь не найден')
    }

    const findUser = await prisma.user.findFirst({
      where: {
        id: Number(currentUser.id)
      }
    })

    await prisma.user.update({
      where: {
        id: Number(currentUser.id),
      },
      data: {
        fullName: body.fullName,
        email: body.email,
        password: body.password ? hashSync(body.password as string, 10) : findUser?.password
      }
    })
  } catch (error) {
    console.error('Error [UPDATE_USER]', error)
    throw error
  }
}
