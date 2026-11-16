import { Story, StoryItem } from "@prisma/client"
import { axiosInstance } from "./axiosInstance"

export type IStory = Story & {
  items: StoryItem[]
}

export const getAll = async () => {
  return (await axiosInstance.get<IStory[]>("/stories")).data
}
