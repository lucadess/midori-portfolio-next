import Link from "next/link"
import Image from "next/image"
import WorkCategoryCard from "./WorkCategoryCard"
import { WaveDivider } from "@/components/shared/WaveDivider"
import { academicIcon, personalIcon, workIcon } from "@/assets/images"

const categories = [
  { href: "/work?category=academic", label: "Academic Projects", icon: academicIcon, alt: "A black cat wearing a cravat around his neck" },
  { href: "/work?category=personal", label: "Personal Projects", icon: personalIcon, alt: "A black cat wearing a pink bowtie around his neck" },
  { href: "/work?category=professional", label: "Professional Projects", icon: workIcon, alt: "A black cat wearing swimming goggles and inflatable armbands with rubber ducks on it" },
]

export default function WorkSection() {
  return (
    <section className="relative pb-24 pt-8 sm:pb-32 sm:pt-12">
      <div className="container flex flex-col items-center justify-center gap-10 sm:flex-row sm:flex-wrap sm:gap-6">
        {categories.map(({ href, label, icon, alt }) => (
          <Link key={href} href={href}>
            <WorkCategoryCard>
              <Image className="w-4/5" src={icon} alt={alt} />
              <h3 className="text-center text-2xl">{label}</h3>
            </WorkCategoryCard>
          </Link>
        ))}
      </div>
      <WaveDivider fill="var(--orange-light)" />
    </section>
  )
}
