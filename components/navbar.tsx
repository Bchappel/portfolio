"use client"

import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { name: "Home", href: "/home" },
    { name: "Resume", href: "/resume" },
    { name: "Projects", href: "/projects" },
    { name: "Personal", href: "/personal" },
  ]

  return (
    <header className="border-b border-stone-200 bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/home" className="text-xl font-semibold tracking-tight text-stone-900">
          Braedan Chappel
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-stone-900",
                pathname === item.href ? "text-stone-900 font-semibold" : "text-stone-500",
              )}
            >
              {item.name}
            </Link>
          ))}
          <Button asChild size="sm" className="bg-stone-800 hover:bg-stone-900">
            <Link href="mailto:braedanchappel@gmail.com">Contact</Link>
          </Button>
        </nav>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon" className="h-9 w-9">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col gap-4 mt-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-lg font-medium transition-colors hover:text-stone-900",
                    pathname === item.href ? "text-stone-900 font-semibold" : "text-stone-500",
                  )}
                  onClick={() => setIsOpen(false)}>
                  {item.name}
                </Link>
              ))}
              <Button asChild className="mt-4 bg-stone-800 hover:bg-stone-900">
                <Link href="mailto:braedanchappel@gmail.com" onClick={() => setIsOpen(false)}>Contact</Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
