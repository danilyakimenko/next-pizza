'use client'

import React from "react"
import { CartItemProps } from "../CartItemDetails"
import { Trash2Icon } from "lucide-react"
import * as CartItemDetails from "../CartItemDetails"
import { cn } from "cn"

interface Props extends CartItemProps {
  onClickCountButton?: (type: "plus" | "minus") => void
  onClickRemove?: () => void
}

export const CheckoutItem: React.FC<Props> = ({
  imageUrl,
  name,
  price,
  quantity,
  disabled,
  details,
  onClickCountButton,
  onClickRemove,
}) => {
  return (
    <div
      className={cn("flex items-center justify-between", {
        "pointer-events-none opacity-50": disabled}
      )}
    >
      <div className="flex items-center gap-5 flex-1">
        <CartItemDetails.Image src={imageUrl} />
        <CartItemDetails.Details name={name} details={details}/>
      </div>
      <CartItemDetails.Price value={price} />
      <div className="flex items-center gap-5 ml-20">
        <CartItemDetails.CountButton onClick={onClickCountButton} value={quantity} />
        <button onClick={onClickRemove}>
          <Trash2Icon className="text-gray-400 cursor-pointer hover:text-gray-600" size={20} />
        </button>
      </div>
    </div>
  )
}
