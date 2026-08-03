import { cn } from "@/lib/utils"

export function ImagePlaceholder({ label, className }: { label?: string; className?: string }) {
  return (
    <div
      className={cn(
        "flex aspect-[4/3] w-full flex-col items-center justify-center gap-2 rounded-md border-2 border-dashed border-greenDark/25 bg-greenDark/5 text-greenDark/30",
        className
      )}
    >
      <svg viewBox="0 0 24 24" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="m21 15-5-5L5 21" />
      </svg>
      {label && <span className="text-xs font-bold uppercase tracking-wide">{label}</span>}
    </div>
  )
}
