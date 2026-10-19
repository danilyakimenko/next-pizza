import React from "react"

interface Props {
  src: string
}

export const CartItemDetailsImage: React.FC<Props> = ({ src }) => {
  return <img className="h-[60px] w-[60px]" src={src} />
}
