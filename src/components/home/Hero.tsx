import Image from "next/image"
import { mainHero } from "@/assets/images"

export default function Hero() {
  return (
    <section className="flex min-h-[70vh] items-center py-12 sm:min-h-[80vh] sm:py-16">
      <div className="container flex flex-col items-center justify-center gap-8 sm:flex-row sm:gap-12 lg:gap-20">
        <Image
          className="w-64 shrink-0 sm:w-72 md:w-96 lg:w-[30rem]"
          src={mainHero}
          alt="Midori Fuchs drinking a cup of coffee."
          priority
        />
        <div className="flex flex-col items-center gap-2 text-center sm:items-start sm:text-left">
          <h2 className="text-xl font-bold sm:text-2xl md:text-3xl">Hi, I am Midori</h2>
          <h1 className="text-6xl leading-[0.95] sm:text-7xl md:text-8xl lg:text-9xl">
            I make
            <br />
            art and
            <br />
            stuff.
          </h1>
        </div>
      </div>
    </section>
  )
}
