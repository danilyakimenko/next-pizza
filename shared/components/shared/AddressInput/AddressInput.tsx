"use client"

import React from "react"
import { AddressSuggestions } from "react-dadata"
import "react-dadata/dist/react-dadata.css"

interface Props {
  onChange?: (value?: string) => void
}

export const AddressInput: React.FC<Props> = ({ onChange }) => {
  return (
    <AddressSuggestions
      token="427f537eed8e8bd021a5a0a204bb57c51eea1946"
      onChange={(data) => onChange?.(data?.value)}
      inputProps={{
        placeholder: "г. Москва, ул. Пречистенка, д. 4, кв. 16",
        className:
          "h-12 w-full min-w-0 rounded-lg border border-input bg-transparent px-2.5 py-1 text-base transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
      }}
    />
  )
}
