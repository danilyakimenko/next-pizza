import {
  Container,
  Filters,
  ProductsGroupList,
  Title,
  TopBar,
} from "@/shared/components/shared"
import { prisma } from "@/prisma/prisma-client"

export default async function Page() {
  const categories = await prisma.category.findMany({
    include: {
      products: {
        include: {
          ingredients: true,
          items: true,
        }
      }
    }
  })

  return (
    <>
      <Container className="mt-10">
        <Title className="font-extrabold" size="lg" text="Все пиццы" />
      </Container>
      <TopBar categories={categories.filter((category) => category.products.length > 0)} />
      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">
          <div className="w-[250px]">
            <Filters />
          </div>
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              {categories.map((category) => category.products.length > 0 && (
                <ProductsGroupList title={category.name} items={category.products} categoryId={category.id} key={category.id} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
