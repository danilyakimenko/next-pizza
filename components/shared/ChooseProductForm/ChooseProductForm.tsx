import { ProductImage, Title } from "@/components/shared"
import React from "react"
import { Button } from "@/components/ui"

interface Props {
  imageUrl: string
  name: string
  ingredients: any[]
  items?: any[]
  onClickAdd?: VoidFunction
}

export const ChooseProductForm: React.FC<Props> = ({
  imageUrl,
  name,
  ingredients,
  onClickAdd,
  items,
}) => {
  const textDetails = "30 см, традиционное тесто 30"
  const totalPrice = 350

  return (
    <div className="flex min-h-[500px] w-full">
      <div className="relative flex min-w-0 flex-1 items-center justify-center">
        <
      </div>

      <div className="w-[490px] shrink-0 bg-[#f7f6f5] p-7">
        <Title className="mb-1 font-extrabold" text={name} size="md" />
        <p className="text-gray-400">{textDetails}</p>
        <Button className="h-[55px] w-full rounded-[18px] px-10 text-base">
          Добавить в корзину за {totalPrice} ₽
        </Button>
      </div>
    </div>
  )
}
