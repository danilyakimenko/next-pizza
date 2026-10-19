"use client"

import React, { useState } from "react"
import { Button } from "@/shared/components/ui"
import {
  GroupVariants,
  IngredientItem,
  PizzaImage,
  Title,
} from "@/shared/components/shared"
import { Ingredient, ProductItem } from "@prisma/client"
import {
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

  const description = "30 см, традиционное тесто 30"
  const pizzaPrice = items.find((item) => item.pizzaType === type && item.size === size)?.price
  const totalPrice = pizzaPrice
  console.log(items)
  return (
    <div className="flex flex-1">
      <PizzaImage imageUrl={imageUrl} size={size} />

      <div className="w-[490px] bg-[#f7f6f5] p-7">
        <Title text={name} size="md" className="mb-1 font-extrabold" />

        <p className="text-gray-400">{description}</p>

        <div className="my-5 grid gap-4">
          <GroupVariants
            items={pizzaSizes}
            selectedValue={String(size)}
            onClick={(value) => setSize(Number(value) as PizzaSize)}
          />
          <GroupVariants
            items={pizzaTypes}
            selectedValue={String(type)}
            onClick={(value) => setType(Number(value) as PizzaType)}
          />
        </div>

        <div className="bg-gray-200 p-5 rounded-md h-[420px] overflow-auto scrollbar">
          <div className="grid grid-cols-3 gap-3">
            {ingredients.map((ingredient) => (
              <IngredientItem
                {...ingredient}
                onClick={() => addIngredient(ingredient.id)}
                active={selectedIngredients.has(ingredient.id)}
                key={ingredient.id} />
            ))}
          </div>
        </div>

        <Button
          loading={loading}
          onClick={() => onSubmit?.()}
          className="mt-10 h-[55px] w-full rounded-[18px] px-10 text-base"
        >
          Добавить в корзину за {totalPrice} ₽
        </Button>
      </div>
    </div>
  )
}
