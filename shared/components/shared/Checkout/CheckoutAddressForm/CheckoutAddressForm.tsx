'use client'

import {
  AddressInput,
  FormTextArea,
  CheckoutCard, ErrorText,
} from "@/shared/components/shared"
import { Controller, useFormContext } from "react-hook-form"

export const CheckoutAddressForm = () => {
  const { control } = useFormContext()

  return (
    <CheckoutCard title="3. Адрес доставки">
      <div className="flex flex-col gap-5">
        <Controller
          render={({ field, fieldState }) => (
            <label className="grid gap-2">
              Адрес
              <AddressInput onChange={field.onChange} />
              {fieldState.error?.message && <ErrorText text={fieldState.error.message} />}
            </label>
          )}
          name="address"
          control={control}
        />
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
