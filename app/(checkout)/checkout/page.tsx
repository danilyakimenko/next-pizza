"use client"

import { useForm, type SubmitHandler } from "react-hook-form"
import { CheckoutCart, Container, Title } from "@/shared/components/shared"
import { useCart } from "@/shared/hooks"
import { CheckoutSidebar } from "@/shared/components/shared"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  CheckoutAddressForm,
  CheckoutPersonalForm,
} from "@/shared/components/shared"

export default function CheckoutPage() {
  const { totalAmount, updateItemQuantity, items, removeCartItem } = useCart()

  const form = useForm({
    resolver: zodResolver(),
    defaultValues: {
      email: "",
      firstName: "",
      lastName: "",
      phone: "",
      address: "",
      comment: "",
    },
  })

  const onCountButtonClick = (
    id: number,
    quantity: number,
    type: "plus" | "minus"
  ) => {
    const newQuantity = type === "plus" ? quantity + 1 : quantity - 1
    updateItemQuantity(id, newQuantity)
  }

  return (
    <Container className="mt-10">
      <Title
        className="mb-8 font-extrabold"
        size="xl"
        text="Оформление заказа"
      />

      <div className="flex gap-10">
        <div className="mb-20 flex flex-1 flex-col gap-10">
          <CheckoutCart
            onCountButtonClick={onCountButtonClick}
            items={items}
            removeCartItem={removeCartItem}
          />
          <CheckoutPersonalForm />
          <CheckoutAddressForm />
        </div>
        <div className="w-[450px]">
          <CheckoutSidebar totalAmount={totalAmount} items={items} />
        </div>
      </div>
    </Container>
  )
}
