import { getLanguageColorClass } from "@/lib/language-tag-styles"

interface LanguageTagProps {
  language: string
}

export function LanguageTag({ language }: LanguageTagProps) {
  return (
    <span className={`px-2 py-1 rounded-md text-xs border ${getLanguageColorClass(language)}`}>
      {language}
    </span>
  )
}
