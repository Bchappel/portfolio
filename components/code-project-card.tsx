"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useEffect, useRef } from "react"
import { LanguageTag } from "@/components/language-tag"
import { appendProjectCardHighlight } from "@/lib/dom-syntax-highlight"
import type { CodePanelTone } from "@/data/projects-data"

const CODE_PANEL_BY_TONE: Record<CodePanelTone, string> = {
  github:
    "h-[220px] overflow-hidden bg-[#0d1117] p-4 text-sm border-b border-stone-800/90",
  sapphire:
    "h-[220px] overflow-hidden bg-[#0a1520] p-4 text-sm border-b border-cyan-500/35 shadow-[inset_0_1px_0_0_rgba(34,211,238,0.14)]",
  plum:
    "h-[220px] overflow-hidden bg-[#140a18] p-4 text-sm border-b border-fuchsia-500/30 shadow-[inset_0_1px_0_0_rgba(192,132,252,0.12)]",
  forest:
    "h-[220px] overflow-hidden bg-[#071910] p-4 text-sm border-b border-emerald-600/35 shadow-[inset_0_1px_0_0_rgba(52,211,153,0.14)]",
  amber:
    "h-[220px] overflow-hidden bg-[#1a1208] p-4 text-sm border-b border-amber-600/35 shadow-[inset_0_1px_0_0_rgba(251,191,36,0.12)]",
  slate:
    "h-[220px] overflow-hidden bg-[#0c1118] p-4 text-sm border-b border-slate-500/35 shadow-[inset_0_1px_0_0_rgba(148,163,184,0.12)]",
}

interface CodeProjectCardProps {
  title: string
  description: string
  tags: string[]
  codeSnippet: string
  language: string
  link: string
  codeTone?: CodePanelTone
}

export function CodeProjectCard({
  title,
  description,
  tags,
  codeSnippet,
  language,
  link,
  codeTone = "github",
}: CodeProjectCardProps) {
  const codeRef = useRef<HTMLPreElement>(null)
  const isExternal = /^https?:\/\//i.test(link)

  useEffect(() => {
    if (!codeRef.current) return
    appendProjectCardHighlight(codeRef.current, codeSnippet, language)
  }, [codeSnippet, language])

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div className={CODE_PANEL_BY_TONE[codeTone]}>
        <pre
          ref={codeRef}
          className="m-0 h-full min-h-0 w-full max-w-full overflow-hidden whitespace-pre font-jetbrains text-sm leading-relaxed text-gray-100"
          style={{ fontFeatureSettings: '"liga" 0', fontVariantLigatures: "none" }}
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2 flex items-center justify-between">
          {title}
          <Link
            href={link}
            className="text-stone-500 hover:text-stone-900"
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
          >
            <ArrowUpRight className="h-4 w-4" />
            <span className="sr-only">View project</span>
          </Link>
        </h3>
        <p className="text-stone-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <LanguageTag key={tag} language={tag} />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
