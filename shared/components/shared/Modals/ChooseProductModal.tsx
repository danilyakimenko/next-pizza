"use client"

import React from "react"
import { Dialog, DialogContent } from "@/shared/components/ui"
import { useRouter } from "next/navigation"
import { ChoosePizzaForm, ChooseProductForm } from "@/shared/components/shared"
import { ProductWithRelations } from "@/@types/prisma"
import { useCartStore } from "@/shared/store"
import toast from "react-hot-toast"
import { useShallow } from "zustand/react/shallow"

interface Props {
  product: ProductWithRelations
}

export const ChooseProductModal: React.FC<Props> = ({ product }) => {
  const { imageUrl, name, ingredients, items } = product
  const router = useRouter()
  const firstItem = product.items[0]
  const isPizzaForm = Boolean(firstItem.pizzaType)
  const [addCartItem, loading] = useCartStore(
    useShallow((state) => [state.addCartItem, state.loading])
  )

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

  return (
    <Dialog open={Boolean({ product })} onOpenChange={() => router.back()}>
      <DialogContent className="min-h-[500px] w-[1060px] max-w-[1060px] overflow-hidden bg-white p-0">
        {isPizzaForm ? (
          <ChoosePizzaForm
            imageUrl={imageUrl}
            name={name}
            ingredients={ingredients}
            items={items}
            onSubmit={onSubmit}
            loading={loading}
          />
        ) : (
          <ChooseProductForm
            imageUrl={imageUrl}
            name={name}
            price={firstItem.price}
            onSubmit={onSubmit}
            loading={loading}
          />
        )}
      </DialogContent>
    </Dialog>
  )
}
