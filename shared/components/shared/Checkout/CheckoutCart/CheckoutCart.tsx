import {
  CheckoutCard,
  CheckoutItem,
  CheckoutItemSkeleton,
} from "@/shared/components/shared"
import { CartStateItem, getCartItemDetails } from "@/shared/lib"
import { PizzaSize, PizzaType } from "@/shared/constants/pizza"

interface Props {
  onCountButtonClick: (
    id: number,
    quantity: number,
    type: "plus" | "minus"
  ) => void
  items: CartStateItem[]
  removeCartItem: (id: number) => void
  loading?: boolean
}

export const CheckoutCart = ({
  items,
  onCountButtonClick,
  removeCartItem,
  loading,
}: Props) => {
  if (loading) {
    return [...Array(3)].map((_, index) => <CheckoutItemSkeleton key={index} />)
  }

  return (
    <CheckoutCard title="1. Корзина">
      <div className="flex flex-col gap-5">
        {!loading &&
          items.length > 0 &&
          items.map((item) => {
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
