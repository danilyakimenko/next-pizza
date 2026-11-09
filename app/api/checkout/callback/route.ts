import { NextRequest, NextResponse } from "next/server"
import { PaymentCallbackData } from "@/@types/yookassa"
import { prisma } from "@/prisma/prisma-client"
import { OrderStatus } from "@prisma/client"
import { CartItemDTO } from "@/shared/services/dto/cart.dto"
import { sendEmail } from "@/shared/lib/sendEmail"
import { OrderSuccessTemplate } from "@/shared/components/shared"

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as PaymentCallbackData

    const order = await prisma.order.findFirst({
      where: {
        id: Number(body.object.metadata.order_id),
      },
    })

    if (!order) {
      return NextResponse.json({ error: 'Order not found'})
    }

    const isSucceeded = body.object.status === 'succeeded'

    await prisma.order.update({
      where: {
        id: order.id,
      },
      data: {
        status: isSucceeded ? OrderStatus.SUCCEEDED : OrderStatus.CANCELLED,
      },
    })
    const items = order?.items as unknown as CartItemDTO[]

    if (isSucceeded) {
      await sendEmail(
        order.email,
        "Next Pizza | Ваш заказ успешно оформлен 🎉",
        OrderSuccessTemplate({ orderId: order.id, items })
      )
    }
  } catch (error) {
    console.error('[Checkout Callback] Error', error)
    return NextResponse.json({ error: 'Server error'})
  }
}