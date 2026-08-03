import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Marquee } from "@/components/shared/Marquee"
import { FlowerFrame } from "@/components/shared/FlowerFrame"
import { WaveDivider } from "@/components/shared/WaveDivider"
import MisoFeeder from "./MisoFeeder"
import { midoriAvatar } from "@/assets/images"

export default function AboutSection() {
  return (
    <section
      className="relative pb-24 pt-2 text-creme sm:pt-4"
      style={{ background: "linear-gradient(180deg, var(--orange-light) 0%, var(--orange-dark) 40%, var(--blue-dark) 100%)" }}
    >
      <Marquee text="About Me" className="mb-4" />

      <div className="container mt-8 flex flex-col items-center gap-10 sm:mt-12 lg:flex-row lg:items-start lg:gap-16">
        <FlowerFrame className="w-64 shrink-0 sm:w-80">
          <Image
            src={midoriAvatar}
            alt="A picture of Midori Fuchs smiling in the camera"
            fill
            sizes="(min-width: 640px) 20rem, 16rem"
            className="object-cover"
          />
        </FlowerFrame>

        <div className="flex max-w-2xl flex-col gap-6">
          <p>
            Born in the heart of Berlin, I was lucky enough to be raised by two creative powerhouses who taught me
            the value of hard work and imagination. Growing up bilingual, I developed a knack for seeing the world
            from different angles &mdash; a skill that comes in handy whether I&apos;m making art or just trying to
            navigate through life.
          </p>
          <p>
            Most of the time I am{" "}
            <span className="box-decoration-clone rounded bg-blueDark px-1.5 font-bold text-creme">
              trying to get rid of that itch in my brain
            </span>{" "}
            for which the only cure seems to be making and creating art. Preferably in all shapes and forms.
            Whether it&apos;s painting, digital design, or any other creative outlet.{" "}
            <strong>Creativity isn&apos;t just a hobby;</strong> it&apos;s how I stay sane in a world that never
            stops moving. Which actually also makes me a firm believer in never standing still. I strive to expand
            my skill set constantly &mdash; whether it&apos;s to stave off boredom or to push my own limits.
          </p>
          <p>
            After a busy stretch of creativity, I recharge by curling up with a good book, sipping on a cup of my
            latest home brew, and enjoying the company of my cat, Miso, cozied up on my lap.
          </p>

          <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
            <p className="sm:max-w-xs">
              Phew. Well, I think that was enough about me. How about I finally show you some of the stuff I do?
            </p>
            <Button size="lg" className="w-full shrink-0 sm:w-auto" asChild>
              <Link href="/work">Sure, Let&apos;s go!</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="container mt-16 sm:mt-20">
        <MisoFeeder />
      </div>

      <WaveDivider fill="var(--creme)" accent="var(--orange-light)" />
    </section>
  )
}
