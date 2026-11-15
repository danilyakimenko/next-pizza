import { axiosInstance } from "@/shared/services/axiosInstance"
import { User } from "@prisma/client"

export const getMe = async () => {
  return (await axiosInstance.get<User>("/auth/me")).data
}
