import { WaveDivider } from "@/components/shared/WaveDivider"
import { InstagramIcon, EtsyIcon, LinkedInIcon } from "@/components/icons/SocialIcons"
import ContactForm from "@/components/contact/ContactForm"

const CONTACT_EMAIL = "midori.fuchs@gmail.com"

const socials = [
  { href: "https://www.instagram.com/midoris_scrapbook", label: "Instagram", Icon: InstagramIcon, bg: "bg-gradient-to-tr from-orangeLight to-blueDark" },
  { href: "https://www.etsy.com/shop/MidorisScrapbook", label: "Etsy", Icon: EtsyIcon, bg: "bg-orangeDark" },
  { href: "https://www.linkedin.com/in/midori-fuchs-3b1a4b21b", label: "LinkedIn", Icon: LinkedInIcon, bg: "bg-blueDark" },
]

export default function Contact() {
  return (
    <div>
      <section className="pb-2 pt-8">
        <div className="container">
          <h1 className="text-center text-5xl leading-[1.15] sm:text-6xl md:text-7xl">Let&apos;s Talk</h1>
        </div>
      </section>

      <section
        className="relative pb-24 pt-16 text-greenDark sm:pt-20"
        style={{ background: "linear-gradient(180deg, var(--creme) 0%, var(--blue-dark) 100%)" }}
      >
        <div className="container grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.1fr] lg:grid-rows-[auto_auto] lg:gap-x-16 lg:gap-y-8">
          <p className="max-w-md text-lg lg:col-start-1 lg:row-start-1 lg:pt-6">
            Got a project brewing, a wild idea, or a job offer? Or maybe you just want to tell me my cat has better
            fashion sense than most humans. Either way, I&apos;m all ears — the form should reach me fastest, faster
            than Sambal begs for treats.
          </p>

          <div className="w-full rounded-3xl bg-creme p-8 text-greenDark shadow-xl sm:p-10 lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:-rotate-1">
            <ContactForm />
          </div>

          <div className="flex flex-col gap-3 self-start rounded-3xl bg-creme p-6 text-greenDark shadow-xl sm:p-8 lg:col-start-1 lg:row-start-2 lg:rotate-1">
            <p className="text-sm uppercase tracking-wide text-greenDark/70">Or skip the form</p>
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-2xl font-bold hover:text-greenLight">
              {CONTACT_EMAIL}
            </a>
            <p>📍 The Hague, The Netherlands</p>
            <div className="mt-2 flex gap-3">
              {socials.map(({ href, label, Icon, bg }) => (
                <a
                  key={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={href}
                  aria-label={label}
                  className={`flex h-10 w-10 items-center justify-center rounded-full text-creme ${bg}`}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <WaveDivider fill="var(--creme)" accent="var(--blue-light)" />
      </section>
    </div>
  )
}
