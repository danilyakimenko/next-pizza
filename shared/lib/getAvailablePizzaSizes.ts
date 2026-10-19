import { ProductItem } from "@prisma/client"
import { pizzaSizes, PizzaType } from "@/shared/constants/pizza"
import { Variant } from "@/shared/components/shared"

export const getAvailablePizzaSizes = (
  type: PizzaType,
  items: ProductItem[]
): Variant[] => {
  const filteredPizzasByType = items.filter((item) => item.pizzaType === type)

  return pizzaSizes.map(({ name, value }) => ({
    name,
    value,
    disabled: !filteredPizzasByType.some(
      (pizza) => Number(pizza.size) === Number(value)
    ),
  }))
}
