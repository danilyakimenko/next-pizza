import { ProductCard, Title } from "@/components/shared"

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
  return (
    <div>
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
