import { create } from "zustand"
import { Api } from "@/shared/services/api-client"
import { getCartDetails, CartStateItem } from "@/shared/lib"

export interface CartState {
  loading: boolean
  error: boolean
  totalAmount: number
  items: CartStateItem[]

  fetchCartItems: () => Promise<void>
  updateItemQuantity: (id: number, quantity: number) => Promise<void>
  addCartItem: (values: any) => Promise<void>
  removeCartItems: (id: number) => Promise<void>
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  error: false,
  loading: true,
  totalAmount: 0,
  fetchCartItems: async () => {
    try {
      set({ loading: true, error: false })
      const data = await Api.cart.getCart()
      set(getCartDetails(data))
    } catch (error) {
      console.error("error", error)
      set({ error: true })
    } finally {
      set({ loading: false })
    }
  },
  updateItemQuantity: async (id: number, quantity: number) => {
    try {
      set({ loading: true, error: false })
      const data = await Api.cart.updateItemQuantity(id, quantity)
      set(getCartDetails(data))
    } catch (error) {
      console.error(error)
      set({ error: true })
    } finally {
      set({ loading: false })
    }
  },
  removeCartItems: async (id: number) => {},
  addCartItem: async (values: any) => {},
}))
