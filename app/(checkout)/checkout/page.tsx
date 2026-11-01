"use client"

import {
  CheckoutCard,
  CheckoutItem,
  CheckoutItemDetails,
  Container,
  Title,
} from "@/shared/components/shared"
import { Button, Input, TextArea } from "@/shared/components/ui"
import { ArrowRight, Package, Percent, Truck } from "lucide-react"
import { useCart } from "@/shared/hooks"
import { getCartItemDetails } from "@/shared/lib"
import { PizzaSize, PizzaType } from "@/shared/constants/pizza"

export default function CheckoutPage() {
  const { totalAmount, updateItemQuantity, items, removeCartItem } = useCart()

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
          <CheckoutCard title="1. Корзина">
            <div className="flex flex-col gap-5">
              {items.map((item) => {
                const {
                  id,
                  imageUrl,
                  ingredients,
                  pizzaType,
                  pizzaSize,
                  name,
                  price,
                  quantity,
                  disabled,
                } = item

                return (
                  <CheckoutItem
                    id={id}
                    imageUrl={imageUrl}
                    details={getCartItemDetails(
                      ingredients,
                      pizzaType as PizzaType,
                      pizzaSize as PizzaSize
                    )}
                    name={name}
                    price={price}
                    quantity={quantity}
                    disabled={disabled}
                    onClickCountButton={(type) =>
                      onCountButtonClick(id, quantity, type)
                    }
                    onClickRemove={() => removeCartItem(id)}
                    key={id}
                  />
                )
              })}
            </div>
          </CheckoutCard>

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
              <label className="grid gap-1">
                Телефон
                <Input
                  className="text-base"
                  name="phone"
                  placeholder="+7(999)-999-99-99"
                />
              </label>
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
          <CheckoutCard className="sticky top-4 p-6">
            <div className="flex flex-col gap-1">
              <span className="text-xl">Итого:</span>
              <span className="text-4xl font-extrabold">{totalAmount}</span>
            </div>
            <CheckoutItemDetails
              title={
                <div className="flex items-center">
                  <Package className="mr-2 text-gray-400" size={24} />
                  Стоимость товара:
                </div>
              }
              value="3000 ₽"
            />
            <CheckoutItemDetails
              title={
                <div className="flex items-center">
                  <Percent className="mr-2 text-gray-400" size={24} />
                  Налоги:
                </div>
              }
              value="3000 ₽"
            />
            <CheckoutItemDetails
              title={
                <div className="flex items-center">
                  <Truck className="mr-2 text-gray-400" size={24} />
                  Доставка:
                </div>
              }
              value="3000 ₽"
            />
            <Button
              className="mt-6 h-14 w-full rounded-2xl text-base font-bold"
              type="submit"
            >
              Перейти к оплате
              <ArrowRight className="ml-2" size="20" />
            </Button>
          </CheckoutCard>
        </div>
      </div>
    </Container>
  )
}
