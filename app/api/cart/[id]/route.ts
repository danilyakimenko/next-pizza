import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/prisma/prisma-client"
import { updateCartTotalAmount } from "@/shared/lib"

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: idParam } = await params
    const id = Number(idParam)
    const data = (await request.json()) as { quantity: number }
    const token = request.cookies.get("cartToken")?.value

    if (!token) {
      return NextResponse.json({ error: "Cart token not found" })
    }

    const cartItem = await prisma.cartItem.findFirst({
      where: {
        id,
      },
    })

    if (!cartItem) {
      return NextResponse.json({ error: "Cart item not found" })
    }

    await prisma.cartItem.update({
      where: {
        id,
      },
      data: {
        quantity: data.quantity,
      },
    })

    const updatedUserCart = await updateCartTotalAmount(token)

    return NextResponse.json(updatedUserCart)
  } catch (error) {
    console.error("[CART_PATCH] Server error", error)
    return NextResponse.json(
      { message: "Не удалось обновить корзину" },
      { status: 500 }
    )
  }
}