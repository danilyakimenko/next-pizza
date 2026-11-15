import { useEffect, useState } from "react"
import { Api } from "@/shared/services/api-client"

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
      setStories(data)
    }

    fetchStories()
  }, [])

  return <div className={className}></div>
}
