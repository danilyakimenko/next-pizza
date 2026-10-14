"use client"

import Link from "next/link"
import { cn } from "cn"
import { useCategoryStore } from "@/store/category"

const categories = [
  { id: 1, name: "Пиццы" },
  { id: 2, name: "Комбо" },
  { id: 3, name: "Закуски" },
  { id: 4, name: "Коктели" },
  { id: 5, name: "Кофе" },
  { id: 6, name: "Напитки" },
  { id: 7, name: "Десерты" },
]

export const Categories = () => {
  const categoryActiveId = useCategoryStore((state) => state.activeId)

  return (
    <ul className="inline-flex gap-1 rounded-2xl bg-gray-50 p-1">
      {categories.map(({ id, name }, index) => (
        <li key={index}>
          <Link
            className={cn(
              "flex h-11 items-center rounded-2xl px-5 font-bold",
              categoryActiveId === id &&
                "bg-white text-primary shadow-md shadow-gray-300"
            )}
            href={`#${name}`}
          >
            {name}
          </Link>
        </li>
      ))}
    </ul>
  )
}
