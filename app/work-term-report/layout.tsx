import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Work Term Report",
  robots: { index: false, follow: false, nocache: true },
}

export default function WorkTermReportLayout({ children }: { children: ReactNode }) {
  return children
}
