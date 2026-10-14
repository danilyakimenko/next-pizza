'use client'

import {
  CheckboxFiltersGroup,
  FilterCheckbox,
  RangeSlider,
  Title,
} from "@/components/shared"
import { Input } from "@/components/ui"
import { useFilterIngredients } from "@/hooks/useFilterIngredients"

export const Filters = () => {
  const { ingredients } = useFilterIngredients()
  const items = ingredients.map((ingredient) => ({
    text: ingredient.name,
    value: String(ingredient.id),
  }))

  return (
    <aside>
      <Title className="mb-5 font-bold" size="sm" text="Фильтрация" />
      <div className="flex flex-col gap-4">
        <FilterCheckbox text="Можно собирать" value="1" />
        <FilterCheckbox text="Новинки" value="2" />
      </div>
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="mb-3 font-bold">Цены от и до:</p>
        <div className="mb-5 flex gap-3">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={1000}
            defaultValue={0}
          />
          <Input type="number" placeholder="1000" min={100} max={1000} />
        </div>
        <RangeSlider min={0} max={1000} step={10} value={[0, 1000]} />
      </div>
      <CheckboxFiltersGroup
        className="mt-5"
        title="Ингредиенты"
        limit={6}
        defaultItems={items.slice(0, 6)}
        items={items}
      />
    </aside>
  )
}
