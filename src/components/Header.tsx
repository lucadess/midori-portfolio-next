import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetTrigger, SheetContent, SheetTitle } from "@/components/ui/sheet"

export default function Component() {
  return (
    <header className="sticky top-0 z-50 w-full bg-creme">
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
        <Link href="#" className="flex items-center gap-2 text-3xl font-bold" prefetch={false}>
            MF
          <span className="sr-only">Midori Fuchs</span>
        </Link>
        <nav className="hidden items-center gap-6 text-2xl font-medium md:flex">
          <Link
            href="#"
            className="text-greenDark hover:text-greenLight"
            prefetch={false}
          >
            home
          </Link>
          <Link
            href="#"
            className="text-greenDark hover:text-greenLight"
            prefetch={false}
          >
            about me
          </Link>
          <Link
            href="#"
            className="text-greenDark hover:text-greenLight"
            prefetch={false}
          >
            my work
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full md:hidden">
                <MenuIcon className="text-#355B28" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="md:hidden">
              <SheetTitle className="hidden">
                  Menu
              </SheetTitle>
              <div className="grid gap-4 p-4">
                <Link
                  href="#"
                  className="text-2xl font-medium text-greenDark hover:text-greenLight"
                  prefetch={false}
                >
                  home
                </Link>
                <Link
                  href="#"
                  className="text-2xl font-medium text-greenDark hover:text-greenLight"
                  prefetch={false}
                >
                  about me
                </Link>
                <Link
                  href="#"
                  className="text-2xl font-medium text-greenDark hover:text-greenLight"
                  prefetch={false}
                >
                  my work
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="nav-icon"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}