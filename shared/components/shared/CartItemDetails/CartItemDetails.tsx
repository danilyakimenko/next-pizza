import React from "react"

interface Props {
  name: string
  details: string
}

export const CartItemDetails: React.FC<Props> = ({ name, details }) => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="flex-1 text-lg leading-6 font-bold">{name}</h2>
      </div>
      {details && <p className="text-xs text-gray-400">details</p>}
    </div>
  )
}
