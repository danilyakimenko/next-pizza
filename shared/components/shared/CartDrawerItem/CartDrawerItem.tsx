import * as CartItem from "../CartItemDetails"
import React from "react"
import { CartItemProps } from "../CartItemDetails"
import { CountButton } from "@/shared/components/shared"
import { Trash2Icon } from "lucide-react"
import { cn } from "cn"

interface Props extends CartItemProps {
  onCountButtonClick?: (type: "plus" | "minus") => void
  onRemoveButtonClick?: () => void
}

export const CartDrawerItem: React.FC<Props> = ({
  imageUrl,
  name,
  price,
  quantity,
  details,
  disabled,
  onCountButtonClick,
  onRemoveButtonClick,
}) => {
  return (
    <div
      className={cn("flex gap-6 rounded-2xl bg-gray-200 p-5", {
        "pointer-events-none opacity-50": disabled,
      })}
    >
      <CartItem.Image src={imageUrl} />

      <div className="flex-1">
        <CartItem.Details name={name} details={details} />
        <hr className="my-3" />
        <div className="flex items-center justify-between">
          <CountButton onClick={onCountButtonClick} value={quantity} />
          <div className="flex items-center gap-3">
            <CartItem.Price value={price} />
            <Trash2Icon
              className="cursor-pointer text-gray-400 hover:text-gray-600"
              size={16}
              onClick={onRemoveButtonClick}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
