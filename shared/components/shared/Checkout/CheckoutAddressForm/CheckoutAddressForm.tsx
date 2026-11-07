import { CheckoutCard } from "../../CheckoutCard"
import { Input, TextArea } from "@/shared/components/ui"

export const CheckoutAddressForm = () => {
  return (
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
  )
}
