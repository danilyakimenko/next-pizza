'use client'

import {
  AddressInput,
  FormTextArea,
  CheckoutCard, ErrorText,
} from "@/shared/components/shared"
import { Controller, useFormContext } from "react-hook-form"
import { Skeleton } from "@/shared/components/ui"

interface Props {
  loading?: boolean
}

export const CheckoutAddressForm = ({ loading }: Props ) => {
  const { control } = useFormContext()

  if (loading) {
    return <Skeleton className="w-full h-[302px] bg-gray-200 rounded-3xl" />
  }

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
