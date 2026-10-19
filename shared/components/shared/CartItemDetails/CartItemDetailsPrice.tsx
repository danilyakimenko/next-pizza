import React from "react"

interface Props {
  value: number
}

export const CartItemDetailsPrice: React.FC<Props> = ({ value }) => {
  return <h2 className="font-bold">{value} ₽</h2>
}
