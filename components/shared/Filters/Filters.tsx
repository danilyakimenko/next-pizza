"use client"

import {
  CheckboxFiltersGroup,
  FilterCheckbox,
  RangeSlider,
  Title,
} from "@/components/shared"
import { Input } from "@/components/ui"
import { useFilterIngredients } from "@/hooks/useFilterIngredients"
import { useState } from "react"

interface PricesProps {
  priceFrom: number
  priceTo: number
}

export const Filters = () => {
  const { ingredients, loading, onAddId, selectedIds } = useFilterIngredients()
  const [prices, setPrices] = useState<PricesProps>({
    priceFrom: 0,
    priceTo: 1000,
  })
  const items = ingredients.map((ingredient) => ({
    text: ingredient.name,
    value: String(ingredient.id),
  }))

  const updatePrice = (name: keyof PricesProps, value: number) => {
    setPrices({
      ...prices,
      [name]: value,
    })
  }

  return (
    <aside>
      <Title className="mb-5 font-bold" size="sm" text="Фильтрация" />
      <div className="flex flex-col gap-4">
        <FilterCheckbox name="can_be_built" text="Можно собирать" value="1" />
        <FilterCheckbox name="is_new" text="Новинки" value="2" />
      </div>
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="mb-3 font-bold">Цены от и до:</p>
        <div className="mb-5 flex gap-3">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={1000}
            value={String(prices.priceFrom)}
            onChange={(event) =>
              updatePrice("priceFrom", Number(event.target.value))
            }
          />
          <Input
            type="number"
            placeholder="1000"
            min={100}
            max={1000}
            value={String(prices.priceTo)}
            onChange={(event) =>
              updatePrice("priceTo", Number(event.target.value))
            }
          />
        </div>
        <RangeSlider
          min={0}
          max={1000}
          step={10}
          value={[prices.priceFrom, prices.priceTo]}
          onValueChange={([priceFrom, priceTo]) =>
            setPrices({ priceFrom, priceTo })
          }
        />
      </div>
      <CheckboxFiltersGroup
        className="mt-5"
        title="Ингредиенты"
        name="ingredients"
        limit={6}
        defaultItems={items.slice(0, 6)}
        items={items}
        loading={loading}
        onCheckboxClick={onAddId}
        selectedIds={selectedIds}
      />
    </aside>
  )
}
