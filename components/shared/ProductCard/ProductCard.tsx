import Link from "next/link"
import { Title } from "@/components/shared"
import { Button } from "@/components/ui"
import { Plus } from "lucide-react"

interface Props {
  id: number
  name: string
  price: number
  imageUrl: string
}

export const ProductCard: React.FC<Props> = ({ id, name, price, imageUrl }) => {
  return (
    <article>
      <Link href={`/product/${id}`}>
        <div className="flex h-[260px] items-center justify-center rounded-lg bg-secondary p-6">
          <img
            className="h-[215px] w-[215px] object-cover"
            src={imageUrl}
            alt={name}
          />
        </div>
        <Title className="mt-3 mb-1 font-bold" text={name} />
        <p className="text-sm text-gray-400">
          Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус
          альфредо, чеснок
        </p>
        <div className="mt-4 flex items-center justify-between gap-3">
          <span className="text-[20px]">
            от <b>{price} ₽</b>
          </span>
          <Button className="text-base font-bold" variant="secondary">
            <Plus className="mr-1" size={20} />
            Добавить
          </Button>
        </div>
      </Link>
    </article>
  )
}
