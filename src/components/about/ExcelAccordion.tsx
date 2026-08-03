"use client"

import Image from "next/image"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { WaveDivider } from "@/components/shared/WaveDivider"
import { midoriExcel } from "@/assets/images"

interface ExcelItem {
  title: string
  points: string[]
}

const items: ExcelItem[] = [
  {
    title: "Expert for Feedback-Culture",
    points: [
      "Listening, analysing, evaluating, giving feedback and constructive criticism. Feedback culture is my everyday tool to optimize work results and lead teamwork to success.",
      "Appreciative communication and empathy is how I achieve a feedback culture, without any catches. …and it's also key to comprehensively understanding customer perspectives.",
    ],
  },
  {
    title: "Organizational excellence",
    points: [
      "Personally, I value good and precise organization and always keep an overview of the entire workflow.",
      "Quick comprehension and analytical skills, as well as a high willingness to learn, help me to organize efficiently.",
    ],
  },
]

export default function ExcelAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="relative bg-orangeLight pb-24 pt-16 text-creme sm:pt-20">
      <div className="container flex flex-col items-center gap-12 lg:flex-row lg:items-start">
        <Image
          src={midoriExcel}
          alt="Midori Fuchs smiling while holding a ginger cat outdoors"
          className="w-full max-w-sm rounded-3xl object-cover lg:sticky lg:top-24 lg:w-2/5"
        />

        <div className="flex w-full flex-col">
          <h2 className="mb-4 text-4xl sm:text-5xl">
            What I excel
            <br />
            in
          </h2>
          {items.map((item, i) => {
            const open = openIndex === i
            return (
              <div key={item.title} className="border-t border-creme/30 py-5 last:border-b">
                <button
                  onClick={() => setOpenIndex(open ? null : i)}
                  className="flex w-full items-center justify-between gap-4 text-left"
                  aria-expanded={open}
                >
                  <span className="text-2xl font-bold">{item.title}</span>
                  <span className="text-2xl leading-none">{open ? "−" : "+"}</span>
                </button>
                {open && (
                  <ul className="mt-4 flex flex-col gap-3 pl-1">
                    {item.points.map((point, pi) => (
                      <li key={pi} className={cn("relative pl-5")}>
                        <span className="absolute left-0">&bull;</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )
          })}
        </div>
      </div>

      <WaveDivider fill="var(--creme)" accent="var(--blue-light)" />
    </section>
  )
}
