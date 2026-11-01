"use client"

import {
  Button,
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/shared/components/ui"
import React from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { CartDrawerItem, Title } from "@/shared/components/shared"
import { getCartItemDetails } from "@/shared/lib"
import { PizzaSize, PizzaType } from "@/shared/constants/pizza"
import Image from "next/image"
import { cn } from "cn"
import { useCart } from "@/shared/hooks"

export const CartDrawer: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { totalAmount, updateItemQuantity, items, removeCartItem } = useCart()

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

  const onCountButtonClick = (
    id: number,
    quantity: number,
    type: "plus" | "minus"
  ) => {
    const newQuantity = type === "plus" ? quantity + 1 : quantity - 1
    updateItemQuantity(id, newQuantity)
  }

  return (
    <Sheet>
      <SheetTrigger render={children as React.ReactElement} />
      <SheetContent className="flex w-[500px] flex-col justify-between bg-gray-100 pb-0">
        <div
          className={cn(
            "flex h-full flex-col",
            !totalAmount && "justify-center"
          )}
        >
          {totalAmount > 0 && (
            <SheetHeader>
              <SheetTitle>
                В корзине
                <span className="font-bold text-primary">
                  &nbsp;{itemsCounter}&nbsp;{getItemsWord(itemsCounter)}
                </span>
              </SheetTitle>
            </SheetHeader>
          )}

          {!totalAmount && (
            <div className="mx-auto flex w-72 flex-col items-center justify-center">
              <Image
                src="/assets/images/empty-box.png"
                alt="Empty cart"
                width={120}
                height={120}
              />
              <Title
                className="my-2 text-center font-bold"
                size="sm"
                text="Корзина пустая"
              />
              <p className="mb-5 text-center text-neutral-500">
                Добавьте хотя бы один продукт в корзину, чтобы совершить заказ
              </p>
              <SheetClose>
                <Button className="h-12 w-56 text-base" size="lg">
                  <ArrowLeft className="mr-2" size={20} />
                  Вернуться назад
                </Button>
              </SheetClose>
            </div>
          )}

          {totalAmount > 0 && (
            <>
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
                    disabled,
                    quantity,
                  }) => (
                    <CartDrawerItem
                      id={id}
                      imageUrl={imageUrl}
                      details={getCartItemDetails(
                        ingredients,
                        pizzaType as PizzaType,
                        pizzaSize as PizzaSize
                      )}
                      disabled={disabled}
                      name={name}
                      price={price}
                      quantity={quantity}
                      onCountButtonClick={(type) =>
                        onCountButtonClick(id, quantity, type)
                      }
                      onRemoveButtonClick={() => removeCartItem(id)}
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
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  )
}
