import {
  Container,
  Filters,
  ProductsGroupList,
  Title,
  TopBar,
} from "@/shared/components/shared"
import { Suspense } from "react"
import { findPizzas, GetSearchParams } from "@/shared/lib"

export default async function Page({ searchParams }: { searchParams: GetSearchParams }) {
  const params = await searchParams
  const categories = await findPizzas(params)

  return (
    <>
      <Container className="mt-10">
        <Title className="font-extrabold" size="lg" text="Все пиццы" />
      </Container>
      <TopBar
        categories={categories.filter(
          (category) => category.products.length > 0
        )}
      />
      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">
          <div className="w-[250px]">
            <Suspense fallback={null}>
              <Filters />
            </Suspense>
          </div>
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              {categories.map(
                (category) =>
                  category.products.length > 0 && (
                    <ProductsGroupList
                      title={category.name}
                      items={category.products}
                      categoryId={category.id}
                      key={category.id}
                    />
                  )
              )}
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
