"use client"

import React from "react"
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
  PizzaType,
  pizzaTypes,
} from "@/shared/constants/pizza"
import { calculatePizzaPrice } from "@/shared/lib"
import { usePizzaOptions } from "@/shared/hooks"

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
  const { size, type, selectedIngredients, availableSizes, setSize, setType, addIngredient } = usePizzaOptions(items)

  const description = `${size} см, ${mapPizzaType[type]} тесто`
  const totalPrice = calculatePizzaPrice(
    type,
    size,
    items,
    ingredients,
    selectedIngredients
  )

  const handleClick = () => {
    onClickAddCart?.()
  }

  return (
    <div className="flex flex-1">
      <PizzaImage imageUrl={imageUrl} size={size} />

      <div className="w-[490px] bg-[#f7f6f5] p-7">
        <Title text={name} size="md" className="mb-1 font-extrabold" />

        <p className="text-gray-400">{description}</p>

        <div className="my-5 grid gap-4">
          <GroupVariants
            items={availableSizes}
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
