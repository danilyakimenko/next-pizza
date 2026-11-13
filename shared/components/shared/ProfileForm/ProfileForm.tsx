'use client'

import { FormProvider, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  formRegisterSchema,
  TFormRegisterValues,
} from "@/shared/components/shared/Modals/AuthModal/Forms/schemas"
import { User } from "@prisma/client"
import toast from "react-hot-toast"
import { signOut } from "next-auth/react"
import { Container, FormInput, Title } from "@/shared/components/shared"
import { Button } from "@/shared/components/ui"
import { updateUserInfo } from "@/app/actions"

interface Props {
  data: User
}

export const ProfileForm = ({ data }: Props) => {
  const form = useForm({
    resolver: zodResolver(formRegisterSchema),
    defaultValues: {
      fullName: data.fullName,
      email: data.email,
      password: "",
      confirmPassword: "",
    },
  })

  const onSubmit = async (data: TFormRegisterValues) => {
    try {
      await updateUserInfo({
        email: data.email,
        fullName: data.fullName,
        password: data.password,
      })

      toast.success("Данные обновлены 📑", {
        icon: "✅",
      })
    } catch (error) {
      console.error(error)
      return toast.error("Ошибка при обновлении данных", {
        icon: "❌",
      })
    }
  }

  const onSignOutClick = () => {
    signOut({
      callbackUrl: "/",
    })
  }

  return (
    <Container className="flex justify-centerwwww items-center gap-40 my-10">
      <div>
      <Title
        text={`Личные данные | #${data.id}`}
        size="md"
        className="font-bold"
      />

      <FormProvider {...form}>
        <form
          className="mt-10 flex w-96 flex-col gap-5"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormInput name="email" label="E-Mail" required />
          <FormInput name="fullName" label="Полное имя" required />

          <FormInput
            type="password"
            name="password"
            label="Новый пароль"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            label="Повторите пароль"
            required
          />

          <Button
            disabled={form.formState.isSubmitting}
            className="mt-10 text-base"
            type="submit"
          >
            Сохранить
          </Button>

          <Button
            onClick={onSignOutClick}
            variant="secondary"
            disabled={form.formState.isSubmitting}
            className="text-base"
            type="button"
          >
            Выйти
          </Button>
        </form>
      </FormProvider>
    </div>
      <img src="/assets/images/profile.webp" width={500} height={500} alt="" />
    </Container>
  )
}
