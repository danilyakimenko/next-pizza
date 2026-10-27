import { prisma } from "@/prisma/prisma-client"
import { notFound } from "next/navigation"
import {
  ChoosePizzaForm,
  ChooseProductForm,
  Container,
} from "@/shared/components/shared"
import React from "react"
import toast from "react-hot-toast"
import { useCartStore } from "@/shared/store"
import { useShallow } from "zustand/react/shallow"

export default async function ProductPage({
  params,
}: {
  params: { id: string }
}) {
  const { id } = await params
  const product = await prisma.product.findFirst({
    where: { id: Number(id) },
    include: {
      ingredients: true,
      category: {
        include: {
          products: {
            include: {
              items: true,
            },
          },
        },
      },
      items: true,
    },
  })

  const [addCartItem, loading] = useCartStore(
    useShallow((state) => [state.addCartItem, state.loading])
  )

  if (!product) {
    return notFound()
  }

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
    } catch (error) {
      toast.error(`Не удалось добавить товар в корзину`)
      console.error(error)
    }
  }

  return (
    <Container className="my-10 flex flex-col">
      {isPizzaForm ? (
        <ChoosePizzaForm
          imageUrl={product.imageUrl}
          name={product.name}
          ingredients={product.ingredients}
          items={product.items}
          onSubmit={onSubmit}
          loading={loading}
        />
      ) : (
        <ChooseProductForm
          imageUrl={product.imageUrl}
          name={product.name}
          price={firstItem.price}
          onSubmit={onSubmit}
          loading={loading}
        />
      )}
    </Container>
  )
}
