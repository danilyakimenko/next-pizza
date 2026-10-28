"use client"

import React from "react"
import { Dialog, DialogContent } from "@/shared/components/ui"
import { useRouter } from "next/navigation"
import { ProductForm } from "@/shared/components/shared"
import { ProductWithRelations } from "@/@types/prisma"

interface Props {
  product: ProductWithRelations
}

export const ChooseProductModal: React.FC<Props> = ({ product }) => {
  const router = useRouter()

  return (
    <Dialog open={Boolean({ product })} onOpenChange={() => router.back()}>
      <DialogContent className="min-h-[500px] w-[1060px] max-w-[1060px] overflow-hidden bg-white p-0">
        <ProductForm product={product} onSubmit={() => router.back()} />
      </DialogContent>
    </Dialog>
  )
}
