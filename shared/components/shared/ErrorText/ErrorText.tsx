import React from "react"
import { cn } from "cn"

interface Props {
  text: string
  className?: string
}

export const ErrorText: React.FC<Props> = ({ text, className }) => {
  return <span className={cn("text-sm text-red-500", className)}>{text}</span>
}
