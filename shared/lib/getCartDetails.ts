import { Cart } from "@prisma/client"
import { ICartItem } from "@/shared/store/cart"

interface ReturnProps {
  items: ICartItem[]
  totalAmount: number
}

export const getCartDetails = (data: Cart) => {

}