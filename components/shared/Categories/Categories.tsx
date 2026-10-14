"use client"

import Link from "next/link"
import { cn } from "cn"
import { useCategoryStore } from "@/store/category"
import { Category } from "@prisma/client"

interface Props {
  items: Category[]
}

export const Categories: React.FC<Props> = ({items}) => {
  const categoryActiveId = useCategoryStore((state) => state.activeId)

  return (
    <ul className="inline-flex gap-1 rounded-2xl bg-gray-50 p-1">
      {items.map(({ id, name }, index) => (
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
