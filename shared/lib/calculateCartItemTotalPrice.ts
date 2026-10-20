import { CartItemDTO } from "@/shared/services/dto/cart.dto"

export const calculateCartItemTotalPrice = (item: CartItemDTO): number => {
  const ingredientsPrice = item.ingredients.reduce((acc, ingredient) => acc + ingredient.price, 0)
  return (item.productItem.price + ingredientsPrice) * item.quantity
}