import Image from "next/image"
import { PeanutFrame } from "@/components/shared/PeanutFrame"
import { WaveDivider } from "@/components/shared/WaveDivider"
import { midoriAvatar } from "@/assets/images"

export default function AboutHero() {
  return (
    <section className="relative bg-blueLight py-16 text-creme sm:py-20">
      <div className="container flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-16">
        <h1 className="text-center text-5xl leading-tight sm:text-6xl md:text-7xl lg:text-left">
          I am a big list person. So here are a couple of{" "}
          <span className="underline decoration-orangeLight decoration-[6px] underline-offset-8">about me.</span>{" "}
          Enjoy.
        </h1>
        <PeanutFrame className="w-64 shrink-0 sm:w-80 lg:w-96">
          <Image
            src={midoriAvatar}
            alt="A candid picture of Midori Fuchs"
            fill
            sizes="(min-width: 1024px) 24rem, (min-width: 640px) 20rem, 16rem"
            className="object-cover"
          />
        </PeanutFrame>
      </div>
      <WaveDivider fill="var(--orange-light)" />
    </section>
  )
}
