import { prisma } from "@/prisma/prisma-client"
import { notFound } from "next/navigation"
import {
  Container,
  GroupVariants,
  PizzaImage,
  Title,
} from "@/shared/components/shared"

export default async function ProductPage({
  params,
}: {
  params: { id: string }
}) {
  const { id } = await params
  const product = await prisma.product.findFirst({
    where: { id: Number(id) },
    include: {
      ingredients: true,
      category: {
        include: {
          products: {
            include: {
              items: true,
            },
          },
        },
      },
    },
  })

  if (!product) {
    return notFound()
  }

  return (
    <Container className="my-10 flex flex-col">
      <div className="flex flex-1">
        <PizzaImage imageUrl={product.imageUrl} size={40} />
        <div className="w-[490px] bg-gray-200 p-7">
          <Title
            className="mb-1 font-extrabold"
            size="md"
            text={product.name}
          />
          <p className="text-gray-400">
            lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quod.
          </p>
          <GroupVariants
            selectedValue="2"
            items={[
              {
                name: "Маленькая",
                value: "1",
              },
              {
                name: "Средняя",
                value: "2",
              },
              {
                name: "Большая",
                value: "3",
                disabled: true,
              },
            ]}
          />
        </div>
      </div>
    </Container>
  )
}
