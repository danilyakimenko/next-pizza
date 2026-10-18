import React from "react"
import { Button } from "@/components/ui"
import { PizzaImage, Title } from "@/components/shared"
import { Ingredient, ProductItem } from "@prisma/client"

interface Props {
  imageUrl: string
  name: string
  ingredients: Ingredient[]
  items: ProductItem[]
  loading?: boolean
  onSubmit: (itemId: number, ingredients: number[]) => void
  className?: string
}

export const ChoosePizzaForm: React.FC<Props> = ({
  name,
  items,
  imageUrl,
  ingredients,
  loading,
  onSubmit,
  className,
}) => {
  const description = "30 см, традиционное тесто 30"
  const totalPrice = 350
  const size = 30

  return (
    <div className="flex flex-1">
      <PizzaImage imageUrl={imageUrl} size={size} />

      <div className="w-[490px] bg-[#f7f6f5] p-7">
        <Title text={name} size="md" className="mb-1 font-extrabold" />

        <p className="text-gray-400">{description}</p>

        <Button
          loading={loading}
          onClick={() => onSubmit?.()}
          className="mt-10 h-[55px] w-full rounded-[18px] px-10 text-base"
        >
          Добавить в корзину за {totalPrice} ₽
        </Button>
      </div>
    </div>
  )
}
