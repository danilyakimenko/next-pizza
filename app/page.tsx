import { Container, Filters, ProductsGroupList, Title, TopBar } from "@/components/shared"

export default function Page() {
  return (
    <>
      <Container className="mt-10">
        <Title className="font-extrabold" size="lg" text="Все пиццы" />
      </Container>
      <TopBar />
      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">
          <div className="w-[250px]">
            <Filters />
          </div>
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                title="Пиццы"
                items={[
                  {
                    id: 1,
                    name: "Мясная",
                    price: 500,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/0198bf3b88d5772695c7f9e557b5b196.webp",
                    items: [{
                       price: 500
                    }]
                  },
                  {
                    id: 2,
                    name: "Мясная",
                    price: 500,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/0198bf3b88d5772695c7f9e557b5b196.webp",
                    items: [{
                       price: 500
                    }]
                  },
                  {
                    id: 3,
                    name: "Мясная",
                    price: 500,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/0198bf3b88d5772695c7f9e557b5b196.webp",
                    items: [{
                       price: 500
                    }]
                  },
                  {
                    id: 4,
                    name: "Мясная",
                    price: 500,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/0198bf3b88d5772695c7f9e557b5b196.webp",
                    items: [{
                       price: 500
                    }]
                  },
                  {
                    id: 5,
                    name: "Мясная",
                    price: 500,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/0198bf3b88d5772695c7f9e557b5b196.webp",
                    items: [{
                       price: 500
                    }]
                  },
                  {
                    id: 6,
                    name: "Мясная",
                    price: 500,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/0198bf3b88d5772695c7f9e557b5b196.webp",
                    items: [{
                       price: 500
                    }]
                  },
                  {
                    id: 7,
                    name: "Мясная",
                    price: 500,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/0198bf3b88d5772695c7f9e557b5b196.webp",
                    items: [{
                       price: 500
                    }]
                  },
                  {
                    id: 8,
                    name: "Мясная",
                    price: 500,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/0198bf3b88d5772695c7f9e557b5b196.webp",
                    items: [{
                       price: 500
                    }]
                  },
                ]}
                categoryId={1}
              />
              <ProductsGroupList
                title="Комбо"
                items={[
                  {
                    id: 11,
                    name: "Яйцевой",
                    price: 200,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/0198bf3b88d5772695c7f9e557b5b196.webp",
                    items: [{
                       price: 200
                    }]
                  },
                  {
                    id: 22,
                    name: "Котлеты",
                    price: 300,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/0198bf3b88d5772695c7f9e557b5b196.webp",
                    items: [{
                       price: 300
                    }]
                  },
                  {
                    id: 33,
                    name: "Омлетта",
                    price: 250,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/0198bf3b88d5772695c7f9e557b5b196.webp",
                    items: [{
                       price: 250
                    }]
                  },
                  {
                    id: 44,
                    name: "Суп с грибами",
                    price: 150,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/0198bf3b88d5772695c7f9e557b5b196.webp",
                    items: [{
                       price: 150
                    }]
                  },
                  {
                    id: 55,
                    name: "Сэндвич",
                    price: 100,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/0198bf3b88d5772695c7f9e557b5b196.webp",
                    items: [{
                       price: 100
                    }]
                  },
                  {
                    id: 66,
                    name: "Гуляш",
                    price: 180,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/0198bf3b88d5772695c7f9e557b5b196.webp",
                    items: [{
                       price: 180
                    }]
                  },
                  {
                    id: 77,
                    name: "Классический",
                    price: 200,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/0198bf3b88d5772695c7f9e557b5b196.webp",
                    items: [{
                       price: 200
                    }]
                  },
                  {
                    id: 88,
                    name: "Пикант",
                    price: 250,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/0198bf3b88d5772695c7f9e557b5b196.webp",
                    items: [{
                       price: 250
                    }]
                  },
                ]}
                categoryId={2}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
