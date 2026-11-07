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
    />
  )
}
