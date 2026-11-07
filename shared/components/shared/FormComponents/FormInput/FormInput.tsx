'use client'

import { Input } from "@/shared/components/ui"
import React from "react"
import { ClearButton, ErrorSymbol, ErrorText } from "@/shared/components/shared"
import { useFormContext } from "react-hook-form"

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string
  label?: string
  required?: boolean
  className?: string
}

export const FormInput: React.FC<Props> = ({
  className,
  name,
  label,
  required,
  ...props
}) => {
  const {
    register,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext()

  const value = watch(name)
  const error = errors[name]?.message as string

  const onClearButtonClick = () => {
    setValue(name, '', { shouldValidate: true})
  }

  return (
    <div className={className}>
      {label && (
        <p className="mb-2 font-medium">
          {label} {required && <ErrorSymbol />}
        </p>
      )}
      <div className="relative">
        <Input className="text-md h-12" {...register(name)} {...props} />

        {value && <ClearButton onClick={onClearButtonClick} />}
      </div>

      {error && <ErrorText className="mt-2" text={error} />}
    </div>
  )
}
