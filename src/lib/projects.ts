export type ProjectCategory = "academic" | "personal" | "professional"

export interface ProjectCategoryInfo {
  value: ProjectCategory
  label: string
}

export const projectCategories: ProjectCategoryInfo[] = [
  { value: "academic", label: "Academic" },
  { value: "personal", label: "Personal" },
  { value: "professional", label: "Professional" },
]

export interface Project {
  id: string
  title: string
  description: string
  fullDescription: string
  category: ProjectCategory
  imageCount: number
}

// Placeholder entries — swap these out for real project content.
export const projects: Project[] = [
  {
    id: "academic-1",
    title: "Placeholder academic project",
    description: "Replace with a real academic project title, brief, and outcome.",
    fullDescription:
      "Replace this with the full story of the project: the brief, your process, the tools you used, and what you learned or shipped.",
    category: "academic",
    imageCount: 3,
  },
  {
    id: "academic-2",
    title: "Placeholder academic project",
    description: "Replace with a real academic project title, brief, and outcome.",
    fullDescription:
      "Replace this with the full story of the project: the brief, your process, the tools you used, and what you learned or shipped.",
    category: "academic",
    imageCount: 2,
  },
  {
    id: "personal-1",
    title: "Placeholder personal project",
    description: "Replace with a real personal project title, brief, and outcome.",
    fullDescription:
      "Replace this with the full story of the project: the brief, your process, the tools you used, and what you learned or shipped.",
    category: "personal",
    imageCount: 4,
  },
  {
    id: "personal-2",
    title: "Placeholder personal project",
    description: "Replace with a real personal project title, brief, and outcome.",
    fullDescription:
      "Replace this with the full story of the project: the brief, your process, the tools you used, and what you learned or shipped.",
    category: "personal",
    imageCount: 1,
  },
  {
    id: "professional-1",
    title: "Placeholder professional project",
    description: "Replace with a real professional project title, brief, and outcome.",
    fullDescription:
      "Replace this with the full story of the project: the brief, your process, the tools you used, and what you learned or shipped.",
    category: "professional",
    imageCount: 3,
  },
  {
    id: "professional-2",
    title: "Placeholder professional project",
    description: "Replace with a real professional project title, brief, and outcome.",
    fullDescription:
      "Replace this with the full story of the project: the brief, your process, the tools you used, and what you learned or shipped.",
    category: "professional",
    imageCount: 2,
  },
]
