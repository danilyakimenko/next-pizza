"use client"

import { CheckboxFiltersGroup, RangeSlider, Title } from "@/components/shared"
import { Input } from "@/components/ui"
import { useEffect } from "react"
import qs from "qs"
import { useIngredients } from "@/hooks/useIngredients"
import { useFilters } from "@/hooks/useFilters"

export const Filters = () => {
  const { ingredients, loading } = useIngredients()
  const filters = useFilters()
  const items = ingredients.map((ingredient) => ({
    text: ingredient.name,
    value: String(ingredient.id),
  }))

  useEffect(() => {
    const filters = {
      ...prices,
      pizzaTypes: Array.from(pizzaTypes),
      sizes: Array.from(sizes),
      ingredients: Array.from(selectedIngredients),
    }
    const query = qs.stringify(filters, {
      arrayFormat: "comma",
    })

    router.push(`?${query}`, {
      scroll: false,
    })
  }, [prices, pizzaTypes, sizes, selectedIngredients, router])

  return (
    <aside>
      <Title className="mb-5 font-bold" size="sm" text="Фильтрация" />
      <CheckboxFiltersGroup
        className="mb-5"
        title="Тип теста"
        name="pizzaTypes"
        limit={6}
        onCheckboxClick={togglePizzaTypes}
        selected={pizzaTypes}
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
        onCheckboxClick={toggleSizes}
        selected={sizes}
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
          value={[prices.priceFrom || 0, prices.priceTo || 1000]}
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
        selected={selectedIngredients}
      />
    </aside>
  )
}
