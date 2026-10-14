import { Container, Filters, Title, TopBar } from "@/components/shared"
import { ProductCard } from "@/components/shared/ProductCard"

export default function Page() {
  return (
    <>
      <Container className="mt-10">
        <Title className="font-extrabold" size="lg" text="Все пиццы" />
      </Container>
      <TopBar />
      <Container className="mt-10 pb-14">
        <div className="flex gap-[60px]">
          <div className="w-[250px]">
            <Filters />
          </div>
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductCard
                id={0}
                name="Сырный цыпленок"
                price={395}
                imageUrl="https://media.dodostatic.net/image/r:584x584/0198bf3b88d5772695c7f9e557b5b196.webp"
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
