import * as CartItem from "../CartItemDetails"
import React from "react"
import { CartItemProps } from "../CartItemDetails"

export const CartDrawerItem: React.FC<CartItemProps> = () => {
  return (
    <div className="flex gap-6 bg-white p-5">
      <CartItem.Image src={} />
    </div>
  )
}
