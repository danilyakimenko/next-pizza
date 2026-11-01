import {
  CheckoutCard, CheckoutItem,
  CheckoutItemDetails,
  Container,
  Title,
} from "@/shared/components/shared"
import { Button, Input, TextArea } from "@/shared/components/ui"
import { ArrowRight, Package, Percent, Truck } from "lucide-react"

export default function CheckoutPage() {
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
              <CheckoutItem
                id={1}
                imageUrl="https://media.dodostatic.net/image/r:584x584/11EE7D61706D472F9A5D71EB94149304.webp"
                details="Пицца"
                name="Чоризо Фреш"
                price={200}
                quantity={1}
              />
              <CheckoutItem
                id={1}
                imageUrl="https://media.dodostatic.net/image/r:584x584/11EE7D61706D472F9A5D71EB94149304.webp"
                details="Пицца"
                name="Чоризо Фреш"
                price={200}
                quantity={1}
              />
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
              <span className="text-4xl font-extrabold">3506 ₽</span>
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
