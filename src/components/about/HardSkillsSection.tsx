"use client"

import Image, { type StaticImageData } from "next/image"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { WaveDivider } from "@/components/shared/WaveDivider"
import {
  photoshopIcon,
  premiereProIcon,
  illustratorIcon,
  indesignIcon,
  frescoIcon,
  davinciResolveIcon,
  capcutIcon,
  canvaIcon,
  amplienceIcon,
} from "@/assets/images"

// 9 points spaced at equal ARC LENGTH (not equal angle) around an ellipse sized
// to each breakpoint's actual container aspect ratio, so the badges look evenly
// spaced in real pixels instead of bunching up where the ellipse is flattest.
// Computed numerically per breakpoint (3:4 mobile, 16:10 desktop) and clamped
// so badge edges clear both the container bounds and the centered heading.
// Tailwind needs these as literal class strings (not built from data) to
// generate the CSS — don't refactor into a data-driven template.
const posClasses = [
  "top-[9.5%] left-[50%] sm:top-[13.5%] sm:left-[50%]",
  "top-[20.9%] left-[78.2%] sm:top-[19.4%] sm:left-[72.3%]",
  "top-[43.8%] left-[90%] sm:top-[41.2%] sm:left-[89.8%]",
  "top-[68.3%] left-[86.1%] sm:top-[72.4%] sm:left-[82.4%]",
  "top-[87.3%] left-[65.8%] sm:top-[85.1%] sm:left-[61.3%]",
  "top-[87.3%] left-[34.2%] sm:top-[85.1%] sm:left-[38.6%]",
  "top-[68.2%] left-[13.8%] sm:top-[72.3%] sm:left-[17.6%]",
  "top-[43.7%] left-[10%] sm:top-[41.2%] sm:left-[10.2%]",
  "top-[20.9%] left-[21.9%] sm:top-[19.4%] sm:left-[27.7%]",
]

const delays = ["0s", "0.4s", "0.8s", "1.2s", "1.6s", "2s", "2.4s", "2.8s", "3.2s"]

interface Tool {
  src: StaticImageData
  alt: string
  /** Icons that ship as a bare mark (transparent background) need a tile behind them. */
  tile?: boolean
}

const tools: Tool[] = [
  { src: photoshopIcon, alt: "Adobe Photoshop" },
  { src: premiereProIcon, alt: "Adobe Premiere Pro" },
  { src: illustratorIcon, alt: "Adobe Illustrator" },
  { src: indesignIcon, alt: "Adobe InDesign" },
  { src: frescoIcon, alt: "Adobe Fresco" },
  { src: davinciResolveIcon, alt: "DaVinci Resolve" },
  { src: capcutIcon, alt: "CapCut", tile: true },
  { src: canvaIcon, alt: "Canva" },
  { src: amplienceIcon, alt: "Amplience", tile: true },
]

// 10% smaller than a round h-16/h-28/h-32 scale: 64→57.6px, 112→100.8px, 128→115.2px
const badgeBase =
  "absolute -translate-x-1/2 -translate-y-1/2 h-[3.6rem] w-[3.6rem] rounded-2xl shadow-lg animate-float overflow-hidden sm:h-[6.3rem] sm:w-[6.3rem] sm:rounded-3xl lg:h-[7.2rem] lg:w-[7.2rem]"

export default function HardSkillsSection() {
  const [playing, setPlaying] = useState(true)

  const anim = (i: number) => ({
    animationDelay: delays[i],
    animationPlayState: playing ? ("running" as const) : ("paused" as const),
  })

  return (
    <section className="relative bg-creme py-24 sm:py-28">
      <div className="container relative mx-auto aspect-[3/4] max-w-xl sm:aspect-[16/10] sm:max-w-3xl">
        {tools.map(({ src, alt, tile }, i) => (
          <div
            key={alt}
            className={cn(badgeBase, posClasses[i], tile && "flex items-center justify-center bg-creme p-3")}
            style={anim(i)}
          >
            <Image src={src} alt={alt} fill={!tile} sizes="120px" className={tile ? "h-full w-full object-contain" : "object-cover"} />
          </div>
        ))}

        <h2 className="absolute left-1/2 top-1/2 w-full max-w-[7.5rem] -translate-x-1/2 -translate-y-1/2 text-center text-lg uppercase text-orangeDark sm:max-w-sm sm:text-4xl lg:text-5xl">
          My Favorite
          <br />
          Hard Skills:
        </h2>
      </div>

      <button
        onClick={() => setPlaying((p) => !p)}
        aria-label={playing ? "Pause icon animation" : "Play icon animation"}
        className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-greenDark/80 text-creme hover:bg-greenDark"
      >
        {playing ? (
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
            <rect x="6" y="5" width="4" height="14" rx="1" />
            <rect x="14" y="5" width="4" height="14" rx="1" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
      </button>
      <WaveDivider fill="var(--orange-light)" />
    </section>
  )
}
