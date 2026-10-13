"use client"

import {
  FilterCheckbox,
  FilterCheckboxProps,
} from "@/components/shared/FilterCheckbox"
import { Input } from "@/components/ui"
import { useState } from "react"

type Item = FilterCheckboxProps

interface Props {
  className?: string
  title: string
  items: Item[]
  defaultItems: Item[]
  limit?: number
  searchInputPlaceholder?: string
  onChange?: (values: string[]) => void
  defaultValue?: Item[]
}

export const CheckboxFiltersGroup: React.FC<Props> = ({
  className,
  title,
  items,
  defaultItems,
  limit = 6,
  searchInputPlaceholder = "Поиск...",
  onChange,
  defaultValue,
}) => {
  const [showAll, setShowAll] = useState(false)
  const [searchValue, setSearchValue] = useState("")
  const onChangeSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value)
  }
  const list = showAll
    ? items.filter((item) => item.text.toLowerCase().includes(searchValue.toLocaleLowerCase()))
    : defaultItems.slice(0, limit)

  return (
    <div className={className}>
      <p className="mb-3 font-bold">{title}</p>

      {showAll && (
        <div className="mb-5">
          <Input
            className="border-none bg-gray-50"
            placeholder={searchInputPlaceholder}
            onChange={onChangeSearchInput}
          />
        </div>
      )}
      <div className="scrollbar flex max-h-96 flex-col gap-3 overflow-y-auto pr-2">
        {list.map(({ text, value, endAdornment }, index) => (
          <FilterCheckbox
            text={text}
            value={value}
            endAdornment={endAdornment}
            checked={false}
            onCheckedChange={(ids) => console.log(ids)}
            key={index}
          />
        ))}
      </div>
      {items.length > limit && (
        <div className={showAll ? "mt-4 border-t border-t-neutral-100" : ""}>
          <button
            className="mt-3 text-primary"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Скрыть" : "+ Показать все"}
          </button>
        </div>
      )}
    </div>
  )
}
