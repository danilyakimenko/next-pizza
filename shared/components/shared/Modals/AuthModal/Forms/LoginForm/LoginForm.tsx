'use client'

import { FormProvider, useForm } from "react-hook-form"
import { formLoginSchema, TFormLoginValues } from "../schemas"
import { zodResolver } from "@hookform/resolvers/zod"
import { FormInput, Title } from "@/shared/components/shared"
import { Button } from "@/shared/components/ui"
import toast from "react-hot-toast"
import { signIn } from "next-auth/react"

interface Props {
  onClose?: VoidFunction
}

export const LoginForm = ({ onClose }: Props) => {
  const form = useForm<TFormLoginValues>({
    resolver: zodResolver(formLoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const onSubmit = async (data: TFormLoginValues) => {
    try {
      const response = await signIn("credentials", {
        ...data,
        redirect: false,
      })

      if (!response?.ok) {
        throw Error()
      }

      toast.success('Вы успешно вошли в аккаунт', {
        icon: '✅'
      })
      onClose?.()
    } catch (error) {
      console.error("Error [LOGIN]", error)
      toast.error("Не удалость войти в аккаунт", {
        icon: "❌",
      })
    }
  }

  return (
    <FormProvider {...form}>
      <form
        className="flex flex-col gap-5"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="flex items-center justify-between">
          <div className="mr-2">
            <Title className="font-bold" text="Вход в аккаунт" size="md" />
            <p className="text-gray-400">
              Введите свою почту, чтобы войти в аккаунт
            </p>
          </div>
          <img
            src="/assets/images/phone-icon.png"
            alt="phone-icon"
            width={60}
            height={60}
          />
        </div>

        <FormInput name="email" label="E-Mail" type="email" required />
        <FormInput name="password" label="Пароль" type="password" required />

        <Button
          className="h-12 text-base"
          type="submit"
          loading={form.formState.isSubmitting}
        >
          Войти
        </Button>
      </form>
    </FormProvider>
  )
}
