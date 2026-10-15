'use client'

import { Dialog } from "@/components/ui"
import { DialogContent, DialogTitle } from "@/components/ui/Dialog/Dialog"
import { Product } from "@prisma/client"
import React from "react"

interface Props {
  product: Product
}

export const ChooseProductModal: React.FC<Props> = ({product}) => {
  return (
    <Dialog>
      <DialogContent className="p-0 w-[1060px] max-w[1060px] min-h-[500px] bg-white overflow-hidden">
        <DialogTitle>{product.name}</DialogTitle>
      </DialogContent>
    </Dialog>
  )
}
