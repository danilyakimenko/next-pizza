import { cn } from "cn"
import React from "react"
import { Trash2Icon } from "lucide-react"
import { CartItemProps } from "../CartItemDetails"
import { CountButton } from "@/shared/components/shared"

interface Props extends CartItemProps {
  onClickCountButton?: (type: "plus" | "minus") => void
  onClickRemove?: () => void
}

export const CartItem: React.FC<Props> = ({
  imageUrl,
  name,
  price,
  quantity,
  details,
  onClickCountButton,
  onClickRemove,
}) => {
  return (
    <div
      className="flex items-center justify-between"
    >
      <div className="flex items-center gap-5 flex-1"></div>
    </div>
  )
}
