import { Input } from "@/shared/components/ui"
import { CheckoutCard, FormInput } from "@/shared/components/shared"

export const CheckoutPersonalForm = () => {
  return (
    <CheckoutCard title="2. Персональные данные">
      <div className="grid grid-cols-2 gap-5">
        <label className="grid gap-1">
          Имя
          <Input className="text-base" name="firstName" placeholder="Иван" />
        </label>
        <label className="grid gap-1">
          Фамилия
          <Input className="text-base" name="lastName" placeholder="Иванов" />
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
  )
}
