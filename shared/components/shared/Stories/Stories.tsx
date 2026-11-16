"use client"

import { useEffect, useState } from "react"
import { Api } from "@/shared/services/api-client"
import { IStory } from "@/shared/services/stories"
import { Container } from "@/shared/components/shared"

interface Props {
  className?: string
}

export const Stories = ({ className }: Props) => {
  const [stories, setStories] = useState<IStory[]>([])
  const [open, setOpen] = useState(false)
  const [selectedStory, setSelectedStory] = useState<IStory>()

  useEffect(() => {
    async function fetchStories() {
      const data = await Api.stories.getAll()
      console.log("DATA", data)
      setStories(data)
    }

    fetchStories()
  }, [])

  const onStoryClick = (story: IStory) => {
    setSelectedStory(story)

    if (story.items.length > 0) {
      setOpen(true)
    }
  }

    return (
      <Container className="my-10 flex items-center justify-between gap-2">
        {stories.length === 0 &&
          [...Array(6)].map((_, index) => (
            <div
              className="h-[250px] w-[200px] animate-pulse rounded-md bg-gray-200"
              key={index}
            />
          ))}
        {stories.map((story) => (
          <img
            className="cursor-pointer rounded-md"
            src={story.previewImageUrl}
            width={200}
            height={250}
            alt=""
            key={story.id}
            onClick={() => onStoryClick(story)}
          />
        ))}
      </Container>
    )
}
