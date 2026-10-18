import { axiosInstance } from "@/shared/services/axiosInstance"
import { ApiRoutes } from "@/shared/services/constants"
import { Ingredient } from "@prisma/client"

export const getAll = async (): Promise<Ingredient[]> => {
  const { data } = await axiosInstance.get<Ingredient[]>(ApiRoutes.INGREDIENTS)
  return data
}
