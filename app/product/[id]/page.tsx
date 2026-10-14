import { prisma } from "@/prisma/prisma-client"
import { notFound } from "next/navigation"
import { Container, ProductImage, Title } from "@/components/shared"

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = await params
  const product = await prisma.product.findFirst({ where: { id: Number(id) } })

  if (!product) {
    return notFound()
  }

  return (
    <Container className="my-10 flex flex-col">
      <div className="flex flex-1">
        <ProductImage imageUrl={product.imageUrl} size={40} />
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
        </div>
      </div>
    </Container>
  )
}
