"use client"

import { useForm, type SubmitHandler } from "react-hook-form"
import {
  CheckoutCard,
  CheckoutCart,
  Container,
  Title,
} from "@/shared/components/shared"
import { Input, TextArea } from "@/shared/components/ui"

import { useCart } from "@/shared/hooks"

import { CheckoutSidebar } from "@/shared/components/shared"
import { FormInput } from "@/shared/components/shared"
import { zodResolver } from "@hookform/resolvers/zod"

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

          <CheckoutCard title="2. Персональные данные">
            <div className="grid grid-cols-2 gap-5">
              <label className="grid gap-1">
                Имя
                <Input
                  className="text-base"
                  name="firstName"
                  placeholder="Иван"
                />
              </label>
              <label className="grid gap-1">
                Фамилия
                <Input
                  className="text-base"
                  name="lastName"
                  placeholder="Иванов"
                />
              </label>
              <label className="grid gap-1">
                E-mail
                <Input
                  className="text-base"
                  name="email"
                  placeholder="example@example.com"
                />
              </label>
              <FormInput
                label="Телефон"
                name="phone"
                placeholder="+7(999)-999-99-99"
              />
            </div>
          </CheckoutCard>
          <CheckoutCard title="3. Адрес доставки">
            <div className="flex flex-col gap-5">
              <label className="grid gap-1">
                Адрес
                <Input
                  className="text-base"
                  name="address"
                  placeholder="Введите адрес доставки"
                />
              </label>
              <label>
                Комментарий к заказу
                <TextArea
                  className="text-base"
                  rows={5}
                  placeholder="Позвоните перед доставкой, домофон не работает..."
                />
              </label>
            </div>
          </CheckoutCard>
        </div>
        <div className="w-[450px]">
          <CheckoutSidebar totalAmount={totalAmount} items={items} />
        </div>
      </div>
    </Container>
  )
}
