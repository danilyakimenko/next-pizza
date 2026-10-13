import Link from "next/link"
import { cn } from "cn"

const categories = [
  "Пиццы",
  "Комбо",
  "Закуски",
  "Коктели",
  "Кофе",
  "Напитки",
  "Десерты",
]

export const Categories = () => {
  return (
    <ul className="inline-flex gap-1 rounded-2xl bg-gray-50 p-1">
      {categories.map((category, index) => (
        <li key={index}>
          <Link
            className={cn(
              "flex h-11 items-center rounded-2xl px-5 font-bold",
              index === 0 && "bg-white text-primary shadow-md shadow-gray-300"
            )}
            href="#"
          >
            {category}
          </Link>
        </li>
      ))}
    </ul>
  )
}
