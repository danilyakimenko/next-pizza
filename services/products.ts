import { axiosInstance } from "@/services/axiosInstance"
import { Product } from "@prisma/client"
import { ApiRoutes } from "@/services/constants"

export const search = async (query: string) => {
  const { data } = await axiosInstance.get<Product>(ApiRoutes.SEARCH_PRODUCTS, {
    params: { query },
  })
  return data
}
