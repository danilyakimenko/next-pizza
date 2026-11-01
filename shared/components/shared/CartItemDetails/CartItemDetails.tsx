import React from "react"
import { cn } from "cn"

interface Props {
  name: string
  details: string
  className?: string
}

export const CartItemDetails: React.FC<Props> = ({ name, details, className }) => {
  return (
    <div>
      <div className={cn("flex items-center justify-between", className)}>
        <h2 className="flex-1 text-lg leading-6 font-bold">{name}</h2>
      </div>
      {details && <p className="text-xs text-gray-400 w-[90%]">{details}</p>}
    </div>
  )
}
