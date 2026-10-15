"use client"

import { Product } from "@prisma/client"
import React from "react"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui"

interface Props {
  product: Product
}

export const ChooseProductModal: React.FC<Props> = ({ product }) => {
  return (
    <Dialog open={Boolean(product)}>
      <DialogContent className="max-w[1060px] min-h-[500px] w-[1060px] overflow-hidden bg-white p-0">
        <DialogTitle>{product.name}</DialogTitle>
      </DialogContent>
    </Dialog>
  )
}
