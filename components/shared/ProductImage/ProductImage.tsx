import { cn } from "cn"

interface Props {
  imageUrl: string
  size: number
}

export const ProductImage: React.FC<Props> = ({ imageUrl, size }) => {
  return (
    <div className="flex items-center justify-center flex-1 relative w-full">
      <img
        className={cn(
          "relative top-2 left-2 z-10 transition-all duration-200",
          {
            "h-[300px] w-[300px]": size === 20,
            "h-[400px] w-[400px]": size === 30,
            "h-[500px] w-[500px]": size === 40,
          }
        )}
        src={imageUrl}
        alt="Logo"
      />
      <div className="absolute top-1/2 left-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-dashed border-gray-300" />
      <div className="absolute top-1/2 left-1/2 h-[370px] w-[370px] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-dotted border-gray-300" />
    </div>
  )
}
