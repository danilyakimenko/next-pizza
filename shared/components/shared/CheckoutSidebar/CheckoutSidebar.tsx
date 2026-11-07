import { CheckoutCard, CheckoutItemDetails } from "@/shared/components/shared"
import { ArrowRight, Package, Percent, Truck } from "lucide-react"
import { Button, Skeleton } from "@/shared/components/ui"
import React from "react"
import { CartStateItem } from "@/shared/lib"

const VAT = 15

interface Props {
  totalAmount: number
  loading?: boolean
  items: CartStateItem[]
}

export const CheckoutSidebar: React.FC<Props> = ({
  totalAmount,
  loading,
  items,
}) => {
  const vatPrice = (totalAmount * VAT) / 100
  const deliveryCost = items.length > 0 ? 250 : 0
  const totalPrice = totalAmount + vatPrice + deliveryCost

  return (
    <CheckoutCard className="sticky top-4 p-6">
      <div className="flex flex-col gap-1">
        <span className="text-xl">Итого:</span>
        {loading ? (
          <Skeleton className="h-11 w-48 bg-gray-200" />
        ) : (
          <span className="h-11 text-4xl font-extrabold">{totalPrice}</span>
        )}
      </div>
      <CheckoutItemDetails
        title={
          <div className="flex items-center">
            <Package className="mr-2 text-gray-400" size={24} />
            Стоимость корзины:
          </div>
        }
        value={
          loading ? (
            <Skeleton className="h-6 w-15 bg-gray-200" />
          ) : (
            `${totalAmount} ₽`
          )
        }
      />
      <CheckoutItemDetails
        title={
          <div className="flex items-center">
            <Percent className="mr-2 text-gray-400" size={24} />
            Налог:
          </div>
        }
        value={
          loading ? (
            <Skeleton className="h-6 w-15 bg-gray-200" />
          ) : (
            `${vatPrice} ₽`
          )
        }
      />
      <CheckoutItemDetails
        title={
          <div className="flex items-center">
            <Truck className="mr-2 text-gray-400" size={24} />
            Доставка:
          </div>
        }
        value={
          loading ? (
            <Skeleton className="h-6 w-15 bg-gray-200" />
          ) : items.length > 0 ? (
            `${deliveryCost} ₽`
          ) : (
            `0 ₽`
          )
        }
      />
      <Button
        className="mt-6 h-14 w-full rounded-2xl text-base font-bold"
        type="submit"
      >
        Перейти к оплате
        <ArrowRight className="ml-2" size="20" />
      </Button>
    </CheckoutCard>
  )
}
