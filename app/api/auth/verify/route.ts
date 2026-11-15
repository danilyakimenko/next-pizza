import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/prisma/prisma-client"

export async function GET(request: NextRequest) {
  try {
    const code = request.nextUrl.searchParams.get("code")
    const errorResponse = NextResponse.json(
      { error: "Неверный код" },
      { status: 400 }
    )

    if (!code) {
      return errorResponse
    }

    const verificationCode = await prisma.verificationCode.findFirst({
      where: {
        code,
      },
    })

    if (!verificationCode) {
      return errorResponse
    }

    await prisma.user.update({
      where: {
        id: verificationCode.userId,
      },
      data: {
        verified: new Date(),
      },
    })

    await prisma.verificationCode.delete({
      where: {
        id: verificationCode.id,
      },
    })

    return NextResponse.redirect(new URL('/?verified', request.url))
  } catch (error) {
    console.error("[VERIFY GET] Server error", error)
  }
}
