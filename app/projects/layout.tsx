import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Projects by Braedan Chappel, including work in C, Python, Java, Swift, Next.js, Unity, and more.",
  alternates: { canonical: "/projects" },
}

export default function ProjectsLayout({ children }: { children: ReactNode }) {
  return children
}
