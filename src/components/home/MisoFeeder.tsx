"use client"

import Image from "next/image"
import { useState } from "react"
import { misoBefore, misoAfter, bowlBefore, bowlAfter } from "@/assets/images"

export default function MisoFeeder() {
  const [isFed, setIsFed] = useState(false)

  function feedMiso() {
    if (!isFed) {
      setIsFed(true)
    }
  }

  return (
    <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-center sm:gap-10">
      <div className="flex items-end gap-3">
        <Image
          className="w-32 sm:w-40 md:w-48"
          src={isFed ? misoAfter : misoBefore}
          alt="A picture of a black cat called Miso, wearing bright pink and orange cowboy boots"
        />
        <Image
          className="w-24 cursor-pointer sm:w-28"
          src={isFed ? bowlAfter : bowlBefore}
          alt="An empty food bowl with the name Miso on it"
          onClick={feedMiso}
          role="button"
          tabIndex={0}
        />
      </div>
      <p className="max-w-xs text-center sm:text-left">
        While I have you here, would you mind feeding Miso for me? Just click his food bowl!
      </p>
    </div>
  )
}
