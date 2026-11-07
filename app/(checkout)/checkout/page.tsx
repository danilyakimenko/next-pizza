"use client"

import { FormProvider, useForm } from "react-hook-form"
import {
  CheckoutCart,
  type CheckoutFormValues,
  Container,
  Title,
  checkoutFormSchema,
  CheckoutAddressForm,
  CheckoutPersonalForm,
  CheckoutSidebar,
} from "@/shared/components/shared"
import { useCart } from "@/shared/hooks"
import { zodResolver } from "@hookform/resolvers/zod"

export default function CheckoutPage() {
  const { totalAmount, updateItemQuantity, items, removeCartItem, loading } = useCart()

  const form = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutFormSchema),
    defaultValues: {
      email: "",
      firstName: "",
      lastName: "",
      phone: "",
      address: "",
      comment: "",
    },
  })

  const onSubmit = (data: CheckoutFormValues) => {
    console.log(data)
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
    <Container className="mt-10">
      <Title
        className="mb-8 font-extrabold"
        size="xl"
        text="Оформление заказа"
      />

      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex gap-10">
            <div className="mb-20 flex flex-1 flex-col gap-10">
              <CheckoutCart
                onCountButtonClick={onCountButtonClick}
                items={items}
                removeCartItem={removeCartItem}
              />
              <CheckoutPersonalForm loading={loading} />
              <CheckoutAddressForm loading={loading} />
            </div>
            <div className="w-[450px]">
              <CheckoutSidebar totalAmount={totalAmount} items={items} loading={loading} />
            </div>
          </div>
        </form>
      </FormProvider>
    </Container>
  )
}
