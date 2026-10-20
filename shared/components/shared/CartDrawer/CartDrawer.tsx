'use client'

import {
  Button,
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
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

export const CartDrawer: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="flex w-[500px] flex-col justify-between bg-gray-100 pb-0">
        <SheetHeader>
          <SheetTitle>
            В корзине <span className="font-bold">3 товара</span>
          </SheetTitle>
        </SheetHeader>

        <div className="flex flex-col mt-5 overflow-auto scrollbar flex-1 gap-4 p-3">
          <CartDrawerItem
            id={1}
            imageUrl={
              "https://media.dodostatic.net/image/r:233x233/11EE7D61304FAF5A98A6958F2BB2D260.webp"
            }
            details={getCartItemDetails(2, 30, [
              { name: "Цыпленок" },
              { name: "Сыр" },
            ])}
            name={"Чоризо фреш"}
            price={400}
            quantity={1}
          />
          <CartDrawerItem
            id={1}
            imageUrl={
              "https://media.dodostatic.net/image/r:233x233/11EE7D61304FAF5A98A6958F2BB2D260.webp"
            }
            details={getCartItemDetails(2, 30, [
              { name: "Цыпленок" },
              { name: "Сыр" },
            ])}
            name={"Чоризо фреш"}
            price={400}
            quantity={1}
          />
          <CartDrawerItem
            id={1}
            imageUrl={
              "https://media.dodostatic.net/image/r:233x233/11EE7D61304FAF5A98A6958F2BB2D260.webp"
            }
            details={getCartItemDetails(2, 30, [
              { name: "Цыпленок" },
              { name: "Сыр" },
            ])}
            name={"Чоризо фреш"}
            price={400}
            quantity={1}
          />
          <CartDrawerItem
            id={1}
            imageUrl={
              "https://media.dodostatic.net/image/r:233x233/11EE7D61304FAF5A98A6958F2BB2D260.webp"
            }
            details={getCartItemDetails(2, 30, [
              { name: "Цыпленок" },
              { name: "Сыр" },
            ])}
            name={"Чоризо фреш"}
            price={400}
            quantity={1}
          />
        </div>

        <SheetFooter className="p-8">
          <div className="w-full">
            <div className="mb-4 flex">
              <span className="flex flex-1 text-lg text-neutral-500">
                Итого
                <div className="relative -top-1 mx-2 flex-1 border-b border-dashed border-b-neutral-200" />
              </span>
              <span className="text-lg font-bold">500 ₽</span>
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
