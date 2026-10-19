"use client"

import React, { useEffect, useState } from "react"
import { Button } from "@/shared/components/ui"
import {
  GroupVariants,
  IngredientItem,
  PizzaImage,
  Title,
} from "@/shared/components/shared"
import { Ingredient, ProductItem } from "@prisma/client"
import {
  mapPizzaType,
  PizzaSize,
  pizzaSizes,
  PizzaType,
  pizzaTypes,
} from "@/shared/constants/pizza"
import { useSet } from "react-use"

interface Props {
  imageUrl: string
  name: string
  ingredients: Ingredient[]
  items: ProductItem[]
  loading?: boolean
  onSubmit: (itemId: number, ingredients: number[]) => void
}

export const ChoosePizzaForm: React.FC<Props> = ({
  name,
  items,
  imageUrl,
  ingredients,
  loading,
  onSubmit,
}) => {
  const [size, setSize] = useState<PizzaSize>(20)
  const [type, setType] = useState<PizzaType>(1)
  const [selectedIngredients, { toggle: addIngredient }] = useSet(new Set<number>([]))

  const description = `${size} см, ${mapPizzaType[type]} тесто`
  const pizzaPrice = items.find((item) => item.pizzaType === type && item.size === size)?.price || 0
  const totalIngredientsPrice = ingredients
    .filter((ingredient) => selectedIngredients.has(ingredient.id))
    .reduce((acc, ingredient) => acc + ingredient.price, 0)
  const totalPrice = pizzaPrice + totalIngredientsPrice

  const handleClick = () => {
    onClickAddCart?.()
  }

  const availablePizzas = items.filter((item) => item.pizzaType === type)
  const availablePizzaSizes = pizzaSizes.map(({ name, value }) => ({
    name,
    value,
    disabled: !availablePizzas.some((pizza) => Number(pizza.size) === Number(value)),
  }))

  useEffect(() => {
    const isAvailableSize = availablePizzaSizes?.find((item) => Number(item.value) === size && !item.disabled)
    const availableSize = availablePizzaSizes?.find((item) => !item.disabled)

    if (!isAvailableSize && availableSize) {
      setSize(Number(availableSize.value) as PizzaSize)
    }
  }, [type])

  return (
    <div className="flex flex-1">
      <PizzaImage imageUrl={imageUrl} size={size} />

      <div className="w-[490px] bg-[#f7f6f5] p-7">
        <Title text={name} size="md" className="mb-1 font-extrabold" />

        <p className="text-gray-400">{description}</p>

        <div className="my-5 grid gap-4">
          <GroupVariants
            items={availablePizzaSizes}
            selectedValue={String(size)}
            onClick={(value) => setSize(Number(value) as PizzaSize)}
          />
          <GroupVariants
            items={pizzaTypes}
            selectedValue={String(type)}
            onClick={(value) => setType(Number(value) as PizzaType)}
          />
        </div>

        <div className="scrollbar h-[420px] overflow-auto rounded-md bg-gray-200 p-5">
          <div className="grid grid-cols-3 gap-3">
            {ingredients.map((ingredient) => (
              <IngredientItem
                {...ingredient}
                onClick={() => addIngredient(ingredient.id)}
                active={selectedIngredients.has(ingredient.id)}
                key={ingredient.id}
              />
            ))}
          </div>
        </div>

        <Button
          loading={loading}
          onClick={() => handleClick?.()}
          className="mt-10 h-[55px] w-full rounded-[18px] px-10 text-base"
        >
          Добавить в корзину за {totalPrice} ₽
        </Button>
      </div>
    </div>
  )
}
