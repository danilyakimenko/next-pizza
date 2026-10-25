import React from "react"
import { Button } from "@/shared/components/ui"
import { Title } from "@/shared/components/shared"

interface Props {
  imageUrl: string
  name: string
  price: number
  loading?: boolean
  onSubmit?: VoidFunction
}

export const ChooseProductForm: React.FC<Props> = ({
  name,
  imageUrl,
  price,
  onSubmit,
  loading,
}) => {
  return (
    <div className="flex flex-1">
      <div className="relative flex w-full flex-1 items-center justify-center">
        <img
          src={imageUrl}
          alt={name}
          className="relative top-2 left-2 z-10 h-[350px] w-[350px] transition-all duration-300"
        />
      </div>

      <div className="w-[490px] bg-[#f7f6f5] p-7">
        <Title text={name} size="md" className="mb-1 font-extrabold" />

        <Button
          loading={loading}
          onClick={() => onSubmit?.()}
          className="mt-10 h-[55px] w-full rounded-[18px] px-10 text-base"
        >
          Добавить в корзину за {price} ₽
        </Button>
      </div>
    </div>
  )
}
