import React from "react"

interface Props {
  src: string
}

export const CartItemDetailsImage: React.FC<Props> = ({ src }) => {
  return <img className="h-[100px] w-[100px]" src={src} />
}
