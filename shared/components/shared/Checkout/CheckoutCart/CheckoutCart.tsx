import { CheckoutCard, CheckoutItem } from "@/shared/components/shared"
import { CartStateItem, getCartItemDetails } from "@/shared/lib"
import { PizzaSize, PizzaType } from "@/shared/constants/pizza"
import React from "react"

interface Props {
  onCountButtonClick: (
    id: number,
    quantity: number,
    type: "plus" | "minus"
  ) => void
  items: CartStateItem[]
  removeCartItem: (id: number) => void
}

export const CheckoutCart: React.FC<Props> = ({ items, onCountButtonClick, removeCartItem }) => {
  return (
    <CheckoutCard title="1. Корзина">
      <div className="flex flex-col gap-5">
        {items.map((item) => {
          const {
            id,
            imageUrl,
            ingredients,
            pizzaType,
            pizzaSize,
            name,
            price,
            quantity,
            disabled,
          } = item

          return (
            <CheckoutItem
              id={id}
              imageUrl={imageUrl}
              details={getCartItemDetails(
                ingredients,
                pizzaType as PizzaType,
                pizzaSize as PizzaSize
              )}
              name={name}
              price={price}
              quantity={quantity}
              disabled={disabled}
              onClickCountButton={(type) =>
                onCountButtonClick(id, quantity, type)
              }
              onClickRemove={() => removeCartItem(id)}
              key={id}
            />
          )
        })}
      </div>
    </CheckoutCard>
  )
}
