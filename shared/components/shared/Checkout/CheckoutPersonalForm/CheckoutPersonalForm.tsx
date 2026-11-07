import { Input } from "@/shared/components/ui"
import { CheckoutCard, FormInput } from "@/shared/components/shared"

export const CheckoutPersonalForm = () => {
  return (
    <CheckoutCard title="2. Персональные данные">
      <div className="grid grid-cols-2 gap-5">
        <FormInput label="Имя" name="firstName" placeholder="Иван" />
        <FormInput label="Фамилия" name="lastName" placeholder="Иванов" />
        <FormInput
          label="E-mail"
          name="email"
          placeholder="example@example.com"
        />
        <FormInput
          label="Телефон"
          name="phone"
          placeholder="+7(999)-999-99-99"
        />
      </div>
    </CheckoutCard>
  )
}
