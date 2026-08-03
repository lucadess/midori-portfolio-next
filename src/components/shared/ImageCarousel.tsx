"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { ImagePlaceholder } from "./ImagePlaceholder"

export function ImageCarousel({ slideCount, className }: { slideCount: number; className?: string }) {
  const [index, setIndex] = useState(0)

  function next() {
    setIndex((i) => (i + 1) % slideCount)
  }

  function prev() {
    setIndex((i) => (i - 1 + slideCount) % slideCount)
  }

  return (
    <div className={cn("flex flex-col gap-3", className)}>
      <div className="relative">
        <ImagePlaceholder label={`Image ${index + 1} of ${slideCount}`} />
        {slideCount > 1 && (
          <>
            <button
              onClick={prev}
              aria-label="Previous image"
              className="absolute left-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-creme text-greenDark shadow hover:bg-orangeLight hover:text-creme"
            >
              ‹
            </button>
            <button
              onClick={next}
              aria-label="Next image"
              className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-creme text-greenDark shadow hover:bg-orangeLight hover:text-creme"
            >
              ›
            </button>
          </>
        )}
      </div>
      {slideCount > 1 && (
        <div className="flex justify-center gap-2">
          {Array.from({ length: slideCount }).map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to image ${i + 1}`}
              className={cn("h-2 w-2 rounded-full transition-colors", i === index ? "bg-orangeDark" : "bg-greenDark/25")}
            />
          ))}
        </div>
      )}
    </div>
  )
}
