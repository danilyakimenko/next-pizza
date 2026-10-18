import React from "react"
import { Checkbox } from "@/shared/components/ui"

export interface FilterCheckboxProps {
  text: string
  value: string
  endAdornment?: React.ReactNode
  onCheckedChange?: (checked: boolean) => void
  checked?: boolean
  name?: string
}

export const FilterCheckbox: React.FC<FilterCheckboxProps> = ({
  text,
  value,
  endAdornment,
  onCheckedChange,
  checked,
  name,
}) => {
  const id = `checkbox-${String(name)}-${String(value)}`

  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        onCheckedChange={onCheckedChange}
        checked={checked}
        value={value}
        className="h-6 w-6 rounded-[8px]"
        id={id}
      />
      <label
        htmlFor={id}
        className="flex-1 cursor-pointer leading-none"
      >
        {text}
      </label>
      {endAdornment}
    </div>
  )
}
