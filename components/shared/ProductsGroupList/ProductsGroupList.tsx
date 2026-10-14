'use client'

import { ProductCard, Title } from "@/components/shared"
import { useIntersection} from "react-use"
import { useEffect, useRef } from "react"
import { useCategoryStore } from "@/store/category"

interface Props {
  title: string
  items: any[]
  categoryId: number
}

export const ProductsGroupList: React.FC<Props> = ({
  title,
  items,
  categoryId,
}) => {
  const setActiveCategoryId = useCategoryStore((state) => state.setActiveId)
  const intersectionRef = useRef(null)
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.4,
  })

  useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveCategoryId(categoryId)
    }
  }, [categoryId, intersection?.isIntersecting, title])

  return (
    <div className="scroll-mt-26" id={title} ref={intersectionRef}>
      <Title className="mb-5 font-extrabold" size="lg" text={title} />

      <div className="grid grid-cols-3 gap-[50px]">
        {items.map((product) => (
          <ProductCard
            id={product.id}
            name={product.name}
            price={product.items[0].price}
            imageUrl={product.imageUrl}
            key={product.id}
          />
        ))}
      </div>
    </div>
  )
}
