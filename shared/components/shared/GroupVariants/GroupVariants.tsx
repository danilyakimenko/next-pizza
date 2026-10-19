"use client"

import { cn } from "cn"

export type Variant = {
  name: string
  value: string
  disabled?: boolean
}

interface Props {
  items: readonly Variant[]
  onClick?: (value: Variant["value"]) => void
  selectedValue?: Variant["value"]
}

export const GroupVariants: React.FC<Props> = ({
  items,
  onClick,
  selectedValue,
}) => {
  return (
    <div className="flex justify-between rounded-3xl bg-gray-200 p-1 select-none">
      {items.map(({ name, value, disabled }) => (
        <button
          className={cn(
            "flex h-[30px] flex-1 items-center justify-center rounded-3xl px-5 text-sm transition-all duration-200",
            {
              "bg-white shadow": value === selectedValue,
              "cursor-not-allowed text-gray-500 opacity-50":
                disabled,
            }
          )}
          onClick={() => onClick?.(value)}
          key={name}
          disabled={disabled}
        >
          {name}
        </button>
      ))}
    </div>
  )
}
