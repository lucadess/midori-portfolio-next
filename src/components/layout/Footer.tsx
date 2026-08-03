import Link from "next/link"
import { Button } from "@/components/ui/button"
import { InstagramIcon, EtsyIcon, LinkedInIcon } from "@/components/icons/SocialIcons"
import { footerLinks } from "@/lib/nav-links"

const MYSTERY_LINK = "https://rotatingsandwiches.com"

const socials = [
  { href: "https://www.instagram.com/midoris_scrapbook", label: "Instagram", Icon: InstagramIcon, bg: "bg-gradient-to-tr from-orangeLight to-blueDark" },
  { href: "https://www.etsy.com/shop/MidorisScrapbook", label: "Etsy", Icon: EtsyIcon, bg: "bg-orangeDark" },
  { href: "https://www.linkedin.com/in/midori-fuchs-3b1a4b21b", label: "LinkedIn", Icon: LinkedInIcon, bg: "bg-blueDark" },
]

export default function Footer() {
  return (
    <footer className="bg-creme pb-8 pt-12 sm:pt-16">
      <div className="container grid grid-cols-1 gap-12 md:grid-cols-[2fr_1fr_1fr] md:gap-8">
        <div className="flex flex-col items-start gap-4">
          <h2 className="text-4xl sm:text-5xl">Well, well, well&hellip;</h2>
          <p className="max-w-md text-left">
            Look who&apos;s still here. If you&apos;ve scrolled this far down you&apos;re either incredibly thorough or you haven&apos;t found what you were looking for. If it&apos;s not in those links over there &mdash;&gt; I&apos;ve got one last mysterious button for visitors like you. This should make your whole visit worthwhile. I promise.
          </p>
          <Button size="lg" className="px-8" asChild>
            <a href={MYSTERY_LINK} target="_blank" rel="noopener noreferrer">
              Last Mysterious Button
            </a>
          </Button>
        </div>

        <nav className="flex flex-col gap-3 font-heading text-lg font-medium">
          {footerLinks.map(({ href, label }) => (
            <Link key={href} href={href} className="text-orangeDark underline underline-offset-4 hover:text-orangeLight">
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col items-start gap-4 md:items-end md:text-right">
          <div className="flex flex-col gap-1">
            <a href="mailto:midori.fuchs@gmail.com" className="hover:text-greenLight">
              midori.fuchs@gmail.com
            </a>
            <p>📍 The Hague, The Netherlands</p>
          </div>
          <div className="flex gap-3">
            {socials.map(({ href, label, Icon, bg }) => (
              <a
                key={label}
                target="_blank"
                rel="noopener noreferrer"
                href={href}
                aria-label={label}
                className={`flex h-9 w-9 items-center justify-center rounded-full text-creme ${bg}`}
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <p className="container mt-12 text-center text-sm">© 2025 Midori Fuchs. All rights reserved.</p>
    </footer>
  )
}
