import {
  AddressInput,
  FormInput,
  FormTextArea,
  CheckoutCard,
} from "@/shared/components/shared"

export const CheckoutAddressForm = () => {
  return (
    <CheckoutCard title="3. Адрес доставки">
      <div className="flex flex-col gap-5">
        <FormInput
          label="Адрес"
          name="address"
          placeholder="Введите адрес доставки"
        />
        <AddressInput />
        <label>
          Комментарий к заказу
          <FormTextArea
            className="text-base"
            name="comment"
            rows={5}
            placeholder="Позвоните перед доставкой, домофон не работает..."
          />
        </label>
      </div>
    </CheckoutCard>
  )
}
