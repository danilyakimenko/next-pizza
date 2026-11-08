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
import { createOrder } from "@/app/actions"
import toast from "react-hot-toast"
import { useState } from "react"

export default function CheckoutPage() {
  const [submitting, setSubmitting] = useState(false)
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

  const onSubmit = async (data: CheckoutFormValues) => {
    try {
      setSubmitting(true)
      const url = await createOrder(data)
      toast.success('Заказ успешно оформлен! Отправили детали заказа вам на почту📨', {
        icon: '✅'
      })
      toast.success('Переход на страницу оплаты...', {
        icon: '✅'
      })
      if (url) {
        window.location.assign(url)
      }
    } catch (error) {
      console.error(error)
      setSubmitting(false)
      toast.error('Не удалось создать заказ!', {
        icon: '❌'
      })
    }
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
                loading={loading}
              />
              <CheckoutPersonalForm loading={loading} />
              <CheckoutAddressForm loading={loading} />
            </div>
            <div className="w-[450px]">
              <CheckoutSidebar totalAmount={totalAmount} items={items} loading={loading || submitting} />
            </div>
          </div>
        </form>
      </FormProvider>
    </Container>
  )
}
