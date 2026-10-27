'use client'

import { useCartStore } from "@/shared/store"
import { useShallow } from "zustand/react/shallow"
import toast from "react-hot-toast"
import { ProductWithRelations } from "@/@types/prisma"
import React from "react"
import { ChoosePizzaForm, ChooseProductForm } from "@/shared/components/shared"

import { useRouter } from "next/navigation"

interface Props {
  product: ProductWithRelations
}

export const ProductForm: React.FC<Props> = ({ product }) => {
  const router = useRouter()
  const [addCartItem, loading] = useCartStore(
    useShallow((state) => [state.addCartItem, state.loading])
  )
  const firstItem = product.items[0]
  const isPizzaForm = Boolean(firstItem.pizzaType)

  const onSubmit = async (productItemId?: number, ingredients?: number[]) => {
    try {
      const itemId = productItemId ?? firstItem.id

      await addCartItem({
        productItemId: itemId,
        ingredients,
      })
      toast.success(`Товар добавлен в корзину`)
      router.back()
    } catch (error) {
      toast.error(`Не удалось добавить товар в корзину`)
      console.error(error)
    }
  }

  if (isPizzaForm) {
    return (
      <ChoosePizzaForm
        imageUrl={product.imageUrl}
        name={product.name}
        ingredients={product.ingredients}
        items={product.items}
        onSubmit={onSubmit}
        loading={loading}
      />
    )
  }

  return (
    <ChooseProductForm
      imageUrl={product.imageUrl}
      name={product.name}
      price={firstItem.price}
      onSubmit={onSubmit}
      loading={loading}
    />
  )
}
