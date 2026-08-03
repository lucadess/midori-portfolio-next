import { Suspense } from "react"
import WorkFilter from "@/components/work/WorkFilter"
import { WaveDivider } from "@/components/shared/WaveDivider"

export default function Work() {
  return (
    <div>
      <section className="pb-2 pt-8">
        <div className="container">
          <h1 className="text-center text-5xl leading-[1.15] sm:text-6xl md:text-7xl">My Work</h1>
        </div>
      </section>

      <section
        className="relative pb-24 pt-4 text-creme"
        style={{ background: "linear-gradient(180deg, var(--creme) 0%, var(--blue-dark) 100%)" }}
      >
        <Suspense>
          <WorkFilter />
        </Suspense>
        <WaveDivider fill="var(--creme)" accent="var(--blue-light)" />
      </section>
    </div>
  )
}
