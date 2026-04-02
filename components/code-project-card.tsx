"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useEffect, useRef } from "react"
import { LanguageTag } from "@/components/language-tag"
import { appendProjectCardHighlight } from "@/lib/dom-syntax-highlight"

interface CodeProjectCardProps {
  title: string
  description: string
  tags: string[]
  codeSnippet: string
  language: string
  link: string
}

export function CodeProjectCard({ title, description, tags, codeSnippet, language, link }: CodeProjectCardProps) {
  const codeRef = useRef<HTMLPreElement>(null)

  useEffect(() => {
    if (!codeRef.current) return
    appendProjectCardHighlight(codeRef.current, codeSnippet, language)
  }, [codeSnippet, language])

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div className="h-[220px] overflow-hidden bg-[#0d1117] p-4 text-gray-100 text-sm">
        <pre
          ref={codeRef}
          className="m-0 h-full min-h-0 w-full max-w-full overflow-hidden whitespace-pre font-jetbrains text-sm leading-relaxed text-gray-100"
          style={{ fontFeatureSettings: '"liga" 0', fontVariantLigatures: "none" }}
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2 flex items-center justify-between">
          {title}
          <Link href={link} className="text-stone-500 hover:text-stone-900">
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
