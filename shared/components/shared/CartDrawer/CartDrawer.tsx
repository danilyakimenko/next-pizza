"use client"

import {
  Button,
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/shared/components/ui"
import React from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { CartDrawerItem } from "@/shared/components/shared"
import { getCartItemDetails } from "@/shared/lib"
import { useCartStore } from "@/shared/store"
import { PizzaSize, PizzaType } from "@/shared/constants/pizza"
import { useShallow } from "zustand/react/shallow"

export const CartDrawer: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [totalAmount, fetchCartItems, updateItemQuantity, items] = useCartStore(
    useShallow((state) => [
      state.totalAmount,
      state.fetchCartItems,
      state.updateItemQuantity,
      state.items,
    ])
  )

  React.useEffect(() => {
    fetchCartItems()
  }, [])

  const itemsCounter = items.length
  const getItemsWord = (count: number) => {
    if (count % 10 === 1 && count % 100 !== 11) return "товар"
    if (
      count % 10 >= 2 &&
      count % 10 <= 4 &&
      (count % 100 < 12 || count % 100 > 14)
    )
      return "товара"

    return "товаров"
  }

  const onCountButtonClick = (id: number, quantity: number, type: 'plus' | 'minus') => {
    const newQuantity = type === 'plus' ? quantity + 1 : quantity - 1
    updateItemQuantity(id, newQuantity)
  }

  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="flex w-[500px] flex-col justify-between bg-gray-100 pb-0">
        <SheetHeader>
          <SheetTitle>
            В корзине
            <span className="font-bold text-primary">
              &nbsp;{itemsCounter}&nbsp;{getItemsWord(itemsCounter)}
            </span>
          </SheetTitle>
        </SheetHeader>

        <div className="scrollbar mt-5 flex flex-1 flex-col gap-4 overflow-auto p-3">
          {items.map(
            ({
              id,
              imageUrl,
              ingredients,
              pizzaSize,
              pizzaType,
              name,
              price,
              quantity,
            }) => (
              <CartDrawerItem
                id={id}
                imageUrl={imageUrl}
                details={
                  pizzaSize && pizzaType
                    ? getCartItemDetails(
                        ingredients,
                        pizzaType as PizzaType,
                        pizzaSize as PizzaSize
                      )
                    : ""
                }
                name={name}
                price={price}
                quantity={quantity}
                onCountButtonClick={(type) => onCountButtonClick(id, quantity, type)}
                key={id}
              />
            )
          )}
        </div>

        <SheetFooter className="p-8">
          <div className="w-full">
            <div className="mb-4 flex">
              <span className="flex flex-1 text-lg text-neutral-500">
                Итого
                <div className="relative -top-1 mx-2 flex-1 border-b border-dashed border-b-neutral-200" />
              </span>
              <span className="text-lg font-bold">{totalAmount} ₽</span>
            </div>
            <Link href="/cart">
              <Button className="h-12 w-full text-base" type="submit">
                Оформить заказ
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
