"use client"

import {
  FilterCheckbox,
  FilterCheckboxProps,
} from "@/components/shared/FilterCheckbox"
import { Input, Skeleton } from "@/components/ui"
import { useState } from "react"
import { cn } from "cn"

type Item = FilterCheckboxProps

interface Props {
  className?: string
  title: string
  items: Item[]
  defaultItems?: Item[]
  limit?: number
  loading?: boolean
  searchInputPlaceholder?: string
  onCheckboxClick?: (id: string) => void
  selected?: Set<string>
  defaultValue?: Item[]
  name?: string
}

export const CheckboxFiltersGroup: React.FC<Props> = ({
  className,
  title,
  items,
  defaultItems,
  limit = 6,
  loading,
  searchInputPlaceholder = "Поиск...",
  onCheckboxClick,
  selected,
  name,
}) => {
  const [showAll, setShowAll] = useState(false)
  const [searchValue, setSearchValue] = useState("")
  const onChangeSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value)
  }

  if (loading) {
    return (
      <div className={className}>
        <p className="mb-3 font-bold">{title}</p>
        {...Array(limit)
          .fill(0)
          .map((_, index) => (
            <Skeleton className="mb-5 h-3 bg-muted-foreground" key={index} />
          ))}
        <Skeleton className="h-3 w-28 bg-muted-foreground" />
      </div>
    )
  }

  const list = showAll
    ? items.filter((item) =>
        item.text.toLowerCase().includes(searchValue.toLocaleLowerCase())
      )
    : (defaultItems || items).slice(0, limit)

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
      <div
        className={cn(
          "scrollbar flex max-h-96 flex-col gap-3 overscroll-contain pr-2",
          showAll && "overflow-y-auto"
        )}
      >
        {list.map(({ text, value, endAdornment }, index) => (
          <FilterCheckbox
            text={text}
            value={value}
            endAdornment={endAdornment}
            checked={selected?.has(value)}
            onCheckedChange={() => onCheckboxClick?.(value)}
            key={index}
            name={name}
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
