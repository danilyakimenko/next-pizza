import { calculatePizzaPrice } from "@/shared/lib/calculatePizzaPrice"
import { mapPizzaType, PizzaSize, PizzaType } from "@/shared/constants/pizza"
import { Ingredient, ProductItem } from "@prisma/client"

export const getPizzaDetails = (
  type: PizzaType,
  size: PizzaSize,
  items: ProductItem[],
  ingredients: Ingredient[],
  selectedIngredients: Set<number>
) => {
  const textDetails = `${size} см, ${mapPizzaType[type]} тесто`
  const totalPrice = calculatePizzaPrice(
    type,
    size,
    items,
    ingredients,
    selectedIngredients
  )

  return { totalPrice, textDetails}
}