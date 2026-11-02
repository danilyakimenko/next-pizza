import React from "react"

interface Props {
  text: string
}

export const ErrorText: React.FC<Props> = ({ text }) => {
  return <span className="mt-2 text-sm text-red-500">{text}</span>
}
