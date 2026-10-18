"use client"

import { Product } from "@prisma/client"
import React from "react"
import { Dialog, DialogContent } from "@/components/ui"
import { useRouter } from "next/navigation"
import { ChooseProductForm } from "@/components/shared"

interface Props {
  product: Product
}

export const ChooseProductModal: React.FC<Props> = ({ product }) => {
  const router = useRouter()

  return (
    <Dialog open={Boolean({ product })} onOpenChange={() => router.back()}>
      <DialogContent className="max-w-[1060px]p-0 min-h-[500px] w-[1060px] overflow-hidden bg-white">
        <ChooseProductForm
          imageUrl={product.imageUrl}
          name={product.name}
          ingredients={[]}
        />
      </DialogContent>
    </Dialog>
  )
}
