"use client"

import React from "react"
import { Dialog, DialogContent } from "@/shared/components/ui"
import { useRouter } from "next/navigation"
import { ChoosePizzaForm, ChooseProductForm } from "@/shared/components/shared"
import { ProductWithRelations } from "@/@types/prisma"

interface Props {
  product: ProductWithRelations
}

export const ChooseProductModal: React.FC<Props> = ({ product }) => {
  const router = useRouter()
  const { imageUrl, name, ingredients, items } = product
  const isPizzaForm = Boolean(items[0].pizzaType)

  return (
    <Dialog open={Boolean({ product })} onOpenChange={() => router.back()}>
      <DialogContent className="min-h-[500px] w-[1060px] max-w-[1060px] overflow-hidden bg-white p-0">
        {isPizzaForm ? (
          <ChoosePizzaForm
            imageUrl={imageUrl}
            name={name}
            ingredients={ingredients}
            items={items}
          />
        ) : (
          <ChooseProductForm imageUrl={imageUrl} name={name} />
        )}
      </DialogContent>
    </Dialog>
  )
}
