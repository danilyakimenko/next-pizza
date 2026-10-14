"use client"

import { CheckboxFiltersGroup, RangeSlider, Title } from "@/components/shared"
import { Input } from "@/components/ui"
import { useFilters, useIngredients, useQueryFilters } from "@/hooks"

export const Filters = () => {
  const { ingredients, loading } = useIngredients()
  const filters = useFilters()

  useQueryFilters(filters)

  const items = ingredients.map((ingredient) => ({
    text: ingredient.name,
    value: String(ingredient.id),
  }))
  const updatePrices = (prices: number[]) => {
    filters.setPrices("priceFrom", prices[0])
    filters.setPrices("priceTo", prices[1])
  }

  return (
    <aside className="sticky top-30">
      <Title className="mb-5 font-bold" size="sm" text="Фильтрация" />
      <CheckboxFiltersGroup
        className="mb-5"
        title="Тип теста"
        name="pizzaTypes"
        limit={6}
        onCheckboxClick={filters.setPizzaTypes}
        selected={filters.pizzaTypes}
        items={[
          { text: "Тонкое", value: "1" },
          { text: "Традиционное", value: "2" },
        ]}
      />
      <CheckboxFiltersGroup
        className="mb-5"
        title="Размеры"
        name="sizes"
        limit={6}
        onCheckboxClick={filters.setSizes}
        selected={filters.sizes}
        items={[
          { text: "20 см", value: "20" },
          { text: "30 см", value: "30" },
          { text: "40 см", value: "40" },
        ]}
      />
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="mb-3 font-bold">Цены от и до:</p>
        <div className="mb-5 flex gap-3">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={1000}
            value={String(filters.prices.priceFrom)}
            onChange={(event) =>
              filters.setPrices("priceFrom", Number(event.target.value))
            }
          />
          <Input
            type="number"
            placeholder="1000"
            min={100}
            max={1000}
            value={String(filters.prices.priceTo)}
            onChange={(event) =>
              filters.setPrices("priceTo", Number(event.target.value))
            }
          />
        </div>
        <RangeSlider
          min={0}
          max={1000}
          step={10}
          value={[
            filters.prices.priceFrom || 0,
            filters.prices.priceTo || 1000,
          ]}
          onValueChange={updatePrices}
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
        onCheckboxClick={filters.setSelectedIngredients}
        selected={filters.selectedIngredients}
      />
    </aside>
  )
}
