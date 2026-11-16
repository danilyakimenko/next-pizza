"use client"

import { useEffect, useState } from "react"
import { Api } from "@/shared/services/api-client"
import { IStory } from "@/shared/services/stories"
import { Container } from "@/shared/components/shared"
import { X } from "lucide-react"
import ReactInstaStories from "react-insta-stories"

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
      {open && (
        <div className="absolute top-0 left-0 z-30 flex h-full w-full items-center justify-center bg-black/80">
          <div className="relative w-[520px]">
            <button
              className="absolute -top-5 -right-10 z-30"
              onClick={() => setOpen(false)}
            >
              <X
                className="absolute top-0 right-0 text-white/50"
                size={32}
              />
            </button>

            <ReactInstaStories
              onAllStoriesEnd={() => setOpen(false)}
              stories={
                selectedStory?.items.map((item) => ({ url: item.sourceUrl })) ||
                []
              }
              defaultInterval={3000}
              width={520}
              height={800}
            />
          </div>
        </div>
      )}
    </Container>
  )
}
