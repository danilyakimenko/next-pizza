import * as CartItem from "../CartItemDetails"
import React from "react"
import { CartItemProps } from "../CartItemDetails"
import { CountButton } from "@/shared/components/shared"
import { Trash2Icon } from "lucide-react"

export const CartDrawerItem: React.FC<CartItemProps> = ({
  id,
  imageUrl,
  name,
  price,
  quantity,
  details,
}) => {
  return (
    <div className="flex gap-6 bg-gray-200 rounded-2xl p-5">
      <CartItem.Image src={imageUrl} />

      <div className="flex-1">
        <CartItem.Details name={name} details={details} />
        <hr className="my-3" />
        <div className="flex items-center justify-between">
          <CountButton onClick={(type) => console.log(type)} value={quantity} />
          <div className="flex items-center gap-3">
            <CartItem.Price value={price} />
            <Trash2Icon className="text-gray-400 cursor-pointer hover:text-gray-600" size={16} />
          </div>
        </div>
      </div>
    </div>
  )
}
