import { PropsWithChildren } from "react"

export default function WorkCategoryCard({ children }: PropsWithChildren) {
  return (
    <div
      className="flex h-64 w-64 flex-col items-center justify-center gap-2 text-orangeDark transition-transform hover:scale-105 sm:h-72 sm:w-72"
      role="button"
    >
      {children}
    </div>
  )
}
