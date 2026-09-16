import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Home",
  description:
    "Hello, I'm Braedan Chappel — a software engineer focused on clean, reliable software. View featured projects, resume, and work from the University of Guelph and industry co-ops.",
  alternates: { canonical: "/home" },
}

export default function HomeLayout({ children }: { children: ReactNode }) {
  return children
}
