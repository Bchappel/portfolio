"use client"

import { useEffect, useRef } from "react"
import { appendSimpleBlockHighlight } from "@/lib/dom-syntax-highlight"

interface SimpleCodeBlockProps {
  code: string
  language: string
}

export function SimpleCodeBlock({ code, language }: SimpleCodeBlockProps) {
  const codeRef = useRef<HTMLPreElement>(null)

  useEffect(() => {
    if (!codeRef.current) return
    appendSimpleBlockHighlight(codeRef.current, code, language)
  }, [code, language])

  return (
    <pre
      ref={codeRef}
      className="m-0 h-full min-h-0 w-full max-w-full overflow-hidden whitespace-pre font-jetbrains text-sm leading-relaxed text-gray-100"
      style={{ fontFeatureSettings: '"liga" 0', fontVariantLigatures: "none" }}
    />
  )
}
