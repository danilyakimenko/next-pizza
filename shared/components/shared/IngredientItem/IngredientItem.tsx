import React from "react"
import { cn } from "cn"
import { CircleCheck } from "lucide-react"

interface Props {
  imageUrl: string
  name: string
  price: number
  active?: boolean
  onClick?: () => void
}

export const IngredientItem: React.FC<Props> = ({
  imageUrl,
  name,
  price,
  active,
  onClick,
}) => {
  return (
    <div
      className={cn(
        "relative flex w-32 cursor-pointer flex-col items-center rounded-md border bg-white p-1 text-center shadow-md border-transparent",
        { "border-primary": active }
      )}
      onClick={onClick}
    >
      {active && (
        <CircleCheck className="absolute top-2 right-2 text-primary" />
      )}
      <img width={110} height={110} src={imageUrl} alt={name} />
      <span className="mb-1 text-xs">{name}</span>
      <span className="font-bold">{price} ₽</span>
    </div>
  )
}
