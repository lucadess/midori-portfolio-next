import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetTrigger, SheetContent, SheetTitle, SheetClose } from "@/components/ui/sheet"
import { MenuIcon } from "@/components/icons/SocialIcons"
import { navLinks } from "@/lib/nav-links"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-creme">
      <div className="container mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:h-24 md:px-6">
        <Link href="/" className="font-heading text-3xl font-bold text-greenDark sm:text-4xl" prefetch={false}>
          Midori Fuchs
        </Link>
        <nav className="hidden items-center gap-8 font-heading text-2xl font-bold md:flex">
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href} className="text-greenDark hover:text-greenLight" prefetch={false}>
              {label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4 md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full text-greenDark">
                <MenuIcon className="h-7 w-7" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="top">
              <SheetTitle className="hidden">Menu</SheetTitle>
              <div className="grid gap-4 p-4">
                {navLinks.map(({ href, label }) => (
                  <SheetClose key={href} asChild>
                    <Link href={href} className="font-heading text-2xl font-bold text-greenDark hover:text-greenLight" prefetch={false}>
                      {label}
                    </Link>
                  </SheetClose>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
