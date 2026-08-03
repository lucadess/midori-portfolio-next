import { cn } from "@/lib/utils"

interface MarqueeProps {
  text: string
  rotate?: number
  reverse?: boolean
  className?: string
}

function SquiggleIcon() {
  return (
    <svg viewBox="0 0 32 16" className="h-3 w-6 shrink-0 sm:h-4 sm:w-8" aria-hidden>
      <path
        d="M1 8c3-6 6-6 8-2s5 4 7 0 6-6 8-2 5 4 7 0"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

/** Infinitely-scrolling text ribbon used for decorative section headers ("About Me ~ About Me ~ ..."). */
export function Marquee({ text, rotate = 0, reverse = false, className }: MarqueeProps) {
  const repeats = Array.from({ length: 8 })

  return (
    <div
      className={cn("relative w-full overflow-hidden py-1", className)}
      style={rotate ? { transform: `rotate(${rotate}deg)` } : undefined}
    >
      <div
        className={cn(
          "flex w-max animate-marquee items-center gap-6 whitespace-nowrap motion-reduce:animate-none",
          reverse && "[animation-direction:reverse]"
        )}
      >
        {[...repeats, ...repeats].map((_, i) => (
          <span key={i} className="flex items-center gap-6 font-heading text-2xl font-bold uppercase tracking-wide sm:text-3xl md:text-4xl">
            {text}
            <SquiggleIcon />
          </span>
        ))}
      </div>
    </div>
  )
}
