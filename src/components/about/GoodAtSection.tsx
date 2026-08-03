import { cn } from "@/lib/utils"
import { WaveDivider } from "@/components/shared/WaveDivider"

interface Strength {
  title: string
  description: string
  Icon: (props: { className?: string }) => React.ReactElement
}

function SparkleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 3v5M12 16v5M3 12h5M16 12h5M5.6 5.6l3.2 3.2M15.2 15.2l3.2 3.2M18.4 5.6l-3.2 3.2M8.8 15.2l-3.2 3.2" />
    </svg>
  )
}

function TargetIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="0.8" fill="currentColor" />
    </svg>
  )
}

function HeartIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 20.2s-7.5-4.5-9.8-8.9C.6 7.8 2.3 3.9 6 3.4c2.1-.3 3.9.9 6 3.1 2.1-2.2 3.9-3.4 6-3.1 3.7.5 5.4 4.4 3.8 7.9-2.3 4.4-9.8 8.9-9.8 8.9z" />
    </svg>
  )
}

const strengths: Strength[] = [
  {
    title: "Compact Creativity",
    description:
      "As a member of Gen Z, I bring a modern perspective to creativity, passionately embodying it in both my professional and personal life. I am creative in content creation, marketing and communication concepts, innovative solutions for advertising tasks, texts, design and illustrations.",
    Icon: SparkleIcon,
  },
  {
    title: "Creating impact",
    description:
      "My heart beats for projects that stand out and have a measurable impact. Working on assignments and projects with visionary goals are both a challenge and a passion for me.",
    Icon: TargetIcon,
  },
  {
    title: "Empathy",
    description:
      "Appreciative communication and empathy are things that come naturally and easily to me. International team experiences during my studies globalized my ability to empathize and expanded my intercultural competence.",
    Icon: HeartIcon,
  },
]

export default function GoodAtSection() {
  return (
    <section className="relative bg-orangeLight pb-24 pt-16 text-creme sm:pt-20">
      <div className="container flex flex-col gap-14 sm:gap-20">
        <h2 className="text-center text-4xl sm:text-5xl">What I Am Good At</h2>
        <div className="flex flex-col gap-12 sm:gap-16">
          {strengths.map(({ title, description, Icon }, i) => (
            <div
              key={title}
              className={cn(
                "flex flex-col gap-4 border-t border-creme/30 pt-8 sm:flex-row sm:items-center sm:gap-10",
                i % 2 === 1 && "sm:flex-row-reverse sm:text-right"
              )}
            >
              <span aria-hidden className="shrink-0 font-heading text-6xl font-bold text-creme/30 sm:text-8xl">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex flex-col gap-3 sm:w-auto sm:max-w-xl">
                <h3 className="text-3xl font-bold sm:text-4xl">{title}</h3>
                <p>{description}</p>
              </div>
              <div className="hidden items-center justify-center sm:flex sm:flex-1">
                <Icon className="h-20 w-20 shrink-0 text-creme/50 lg:h-28 lg:w-28" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <WaveDivider fill="var(--creme)" />
    </section>
  )
}
