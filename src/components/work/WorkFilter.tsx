"use client"

import { useMemo, useState } from "react"
import { useSearchParams } from "next/navigation"
import { cn } from "@/lib/utils"
import { projects, projectCategories, type Project, type ProjectCategory } from "@/lib/projects"
import { ImagePlaceholder } from "@/components/shared/ImagePlaceholder"
import { ImageCarousel } from "@/components/shared/ImageCarousel"
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog"

type Filter = ProjectCategory | "all"

// Varied, exaggerated asymmetric corner radii give the cards a hand-drawn, squiggly
// outline instead of a plain rectangle, echoing the flower frame and wave dividers
// elsewhere. Cycling through several patterns (independent from the image-position
// cycle below) keeps a long grid of cards from feeling repetitive.
const CARD_SHAPES = [
  "rounded-[3rem_0.5rem_3rem_0.5rem/0.5rem_3rem_0.5rem_3rem]",
  "rounded-[0.5rem_3rem_0.5rem_3rem/3rem_0.5rem_3rem_0.5rem]",
  "rounded-[3rem_3rem_0.5rem_0.5rem/0.5rem_0.5rem_3rem_3rem]",
  "rounded-[0.5rem_0.5rem_3rem_3rem/3rem_3rem_0.5rem_0.5rem]",
]

function isProjectCategory(value: string | null): value is ProjectCategory {
  return projectCategories.some((c) => c.value === value)
}

export default function WorkFilter() {
  const searchParams = useSearchParams()
  const initialCategory = searchParams.get("category")
  const [filter, setFilter] = useState<Filter>(isProjectCategory(initialCategory) ? initialCategory : "all")

  const filteredProjects = useMemo(
    () => (filter === "all" ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  )

  return (
    <div className="container flex flex-col gap-10 py-8">
      <div className="flex flex-wrap justify-center gap-3">
        <FilterButton active={filter === "all"} onClick={() => setFilter("all")}>
          All
        </FilterButton>
        {projectCategories.map(({ value, label }) => (
          <FilterButton key={value} active={filter === value} onClick={() => setFilter(value)}>
            {label}
          </FilterButton>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
            shape={CARD_SHAPES[i % CARD_SHAPES.length]}
            imageFirst={i % 2 === 0}
          />
        ))}
        {filteredProjects.length === 0 && <p className="col-span-full text-center">No projects in this category yet.</p>}
      </div>
    </div>
  )
}

function ProjectCard({
  project,
  shape,
  imageFirst,
}: {
  project: Project
  shape: string
  imageFirst: boolean
}) {
  const categoryLabel = projectCategories.find((c) => c.value === project.category)?.label
  const categoryBadge = (
    <span className="inline-block w-fit rounded-full bg-orangeLight/20 px-3 py-1 text-xs font-bold uppercase tracking-wide text-orangeDark">
      {categoryLabel}
    </span>
  )
  const textBlock = (
    <>
      {categoryBadge}
      <h3 className="text-2xl">{project.title}</h3>
      <p>{project.description}</p>
    </>
  )

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          className={cn(
            "flex flex-col gap-3 border-2 border-greenDark/15 bg-creme p-6 text-left text-greenDark shadow-md transition-all hover:-translate-y-1 hover:border-orangeDark hover:shadow-lg",
            shape
          )}
        >
          {imageFirst ? (
            <>
              <ImagePlaceholder />
              {textBlock}
            </>
          ) : (
            <>
              {textBlock}
              <ImagePlaceholder />
            </>
          )}
        </button>
      </DialogTrigger>
      <DialogContent>
        <span className="text-sm font-bold uppercase tracking-wide text-orangeDark">{categoryLabel}</span>
        <DialogTitle>{project.title}</DialogTitle>
        <ImageCarousel slideCount={project.imageCount} />
        <DialogDescription>{project.fullDescription}</DialogDescription>
      </DialogContent>
    </Dialog>
  )
}

function FilterButton({
  active,
  onClick,
  children,
}: {
  active: boolean
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "rounded-md px-5 py-2 font-heading text-lg font-bold transition-colors",
        active ? "bg-creme text-orangeDark" : "bg-creme/50 text-greenDark hover:bg-creme/70"
      )}
    >
      {children}
    </button>
  )
}
