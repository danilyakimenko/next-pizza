'use client'

import { ArrowRight, ShoppingCart } from "lucide-react"
import { Button } from "@/shared/components/ui"
import { CartDrawer } from "@/shared/components/shared"
import { useCartStore } from "@/shared/store"
import { useShallow } from "zustand/react/shallow"
import { cn } from "cn"

export const CartButton = () => {
  const [totalAmount, items, loading] = useCartStore(
    useShallow((state) => [state.totalAmount, state.items, state.loading])
  )
  return (
    <CartDrawer>
      <Button
        className={cn("group relative", { "w-[105px]": loading })}
        disabled={loading}
      >
        <b>{totalAmount} ₽</b>
        <span className="mx-3 h-full w-px bg-white/30" />
        <div className="flex items-center gap-1 transition duration-200 group-hover:opacity-0">
          <ShoppingCart className="relative" size={16} strokeWidth={2} />
          <b>{items.length}</b>
        </div>
        <ArrowRight
          className="absolute right-5 -translate-x-2 opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
          size={20}
        />
      </Button>
    </CartDrawer>
  )
}
