import { cn } from "@/lib/utils"

interface WaveDividerProps {
  /** Fill color of the section this divider curves into (e.g. "var(--orange-light)"). */
  fill: string
  /** Optional accent stroke traced along the curve, matching the Squarespace reference design. */
  accent?: string
  /** Flip the curve vertically, used when a wave sits at the top of a section instead of the bottom. */
  flip?: boolean
  className?: string
}

const CURVE = "M0,64 C360,130 1080,-10 1440,64"

export function WaveDivider({ fill, accent, flip = false, className }: WaveDividerProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-x-0 bottom-0 h-10 w-full translate-y-px overflow-hidden sm:h-16 md:h-24",
        flip && "rotate-180",
        className
      )}
    >
      <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="h-full w-full">
        <path d={`${CURVE} L1440,120 L0,120 Z`} fill={fill} />
        {accent && (
          <path
            d={CURVE}
            fill="none"
            stroke={accent}
            strokeWidth={4}
            vectorEffect="non-scaling-stroke"
          />
        )}
      </svg>
    </div>
  )
}
