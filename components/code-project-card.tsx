"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useEffect, useRef } from "react"
import { LanguageTag } from "@/components/language-tag"

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

  // Syntax highlighting with DOM manipulation
  useEffect(() => {
    if (!codeRef.current) return

    // Clear existing content
    while (codeRef.current.firstChild) {
      codeRef.current.removeChild(codeRef.current.firstChild)
    }

    // Split code into lines
    const lines = codeSnippet.split("\n")

    // Process each line
    lines.forEach((line, lineIndex) => {
      // Create line container
      const lineDiv = document.createElement("div")
      lineDiv.className = "code-line font-jetbrains" // Add font-jetbrains class here

      // Add line number
      const lineNumber = document.createElement("span")
      lineNumber.className = "line-number text-gray-500 select-none mr-4 inline-block w-5 text-right font-jetbrains"
      lineNumber.textContent = (lineIndex + 1).toString()
      lineDiv.appendChild(lineNumber)

      // Process the line content based on language
      if (line.trim() === "") {
        // Empty line
        const emptySpace = document.createElement("span")
        emptySpace.className = "text-gray-100 font-jetbrains"
        emptySpace.textContent = " "
        lineDiv.appendChild(emptySpace)
      } else {
        // Simple highlighting based on language
        if (language === "javascript" || language === "jsx" || language === "typescript" || language === "tsx") {
          processJavaScriptLine(line, lineDiv)
        } else if (language === "python") {
          processPythonLine(line, lineDiv)
        } else if (language === "cpp" || language === "c") {
          processCppLine(line, lineDiv)
        } else if (language === "java") {
          processJavaLine(line, lineDiv)
        } else {
          // Default - just add the text with proper color
          const textSpan = document.createElement("span")
          textSpan.className = "text-gray-100 font-jetbrains"
          textSpan.textContent = line
          lineDiv.appendChild(textSpan)
        }
      }

      // Add the line to the code block
      codeRef.current?.appendChild(lineDiv)
    })
  }, [codeSnippet, language])

  // Helper function to create a colored span
  const createColoredSpan = (text: string, colorClass: string) => {
    const span = document.createElement("span")
    span.className = `${colorClass} font-jetbrains` // Add font-jetbrains class here
    span.textContent = text
    return span
  }

  // Process JavaScript/JSX line
  const processJavaScriptLine = (line: string, container: HTMLElement) => {
    // Check for comments first
    if (line.trim().startsWith("//")) {
      container.appendChild(createColoredSpan(line, "text-gray-500"))
      return
    }

    // Simple tokenization for JS
    let currentIndex = 0
    const tokens = []

    // Keywords to highlight
    const keywords = [
      "const",
      "let",
      "var",
      "function",
      "return",
      "if",
      "else",
      "for",
      "while",
      "class",
      "import",
      "export",
      "from",
      "async",
      "await",
      "try",
      "catch",
      "new",
      "this",
    ]

    // Tokenize the line
    while (currentIndex < line.length) {
      // Check for strings
      if (line[currentIndex] === '"' || line[currentIndex] === "'" || line[currentIndex] === "`") {
        const quote = line[currentIndex]
        let endIndex = line.indexOf(quote, currentIndex + 1)
        if (endIndex === -1) endIndex = line.length

        tokens.push({
          type: "string",
          text: line.substring(currentIndex, endIndex + 1),
        })
        currentIndex = endIndex + 1
        continue
      }

      // Check for keywords
      let foundKeyword = false
      for (const keyword of keywords) {
        const pattern = new RegExp(`\\b${keyword}\\b`)
        const match = pattern.exec(line.substring(currentIndex))
        if (match && match.index === 0) {
          tokens.push({
            type: "keyword",
            text: keyword,
          })
          currentIndex += keyword.length
          foundKeyword = true
          break
        }
      }
      if (foundKeyword) continue

      // Default - just add the character
      tokens.push({
        type: "text",
        text: line[currentIndex],
      })
      currentIndex++
    }

    // Render tokens
    tokens.forEach((token) => {
      if (token.type === "keyword") {
        container.appendChild(createColoredSpan(token.text, "text-purple-400"))
      } else if (token.type === "string") {
        container.appendChild(createColoredSpan(token.text, "text-amber-300"))
      } else {
        container.appendChild(createColoredSpan(token.text, "text-gray-100"))
      }
    })
  }

  // Process Python line
  const processPythonLine = (line: string, container: HTMLElement) => {
    // Check for comments first
    if (line.trim().startsWith("#")) {
      container.appendChild(createColoredSpan(line, "text-gray-500"))
      return
    }

    // Simple tokenization for Python
    let currentIndex = 0
    const tokens = []

    // Keywords to highlight
    const keywords = [
      "def",
      "class",
      "import",
      "from",
      "as",
      "return",
      "if",
      "elif",
      "else",
      "for",
      "while",
      "try",
      "except",
      "with",
      "async",
      "await",
      "lambda",
    ]

    // Tokenize the line
    while (currentIndex < line.length) {
      // Check for strings
      if (line[currentIndex] === '"' || line[currentIndex] === "'") {
        const quote = line[currentIndex]
        let endIndex = line.indexOf(quote, currentIndex + 1)
        if (endIndex === -1) endIndex = line.length

        tokens.push({
          type: "string",
          text: line.substring(currentIndex, endIndex + 1),
        })
        currentIndex = endIndex + 1
        continue
      }

      // Check for keywords
      let foundKeyword = false
      for (const keyword of keywords) {
        const pattern = new RegExp(`\\b${keyword}\\b`)
        const match = pattern.exec(line.substring(currentIndex))
        if (match && match.index === 0) {
          tokens.push({
            type: "keyword",
            text: keyword,
          })
          currentIndex += keyword.length
          foundKeyword = true
          break
        }
      }
      if (foundKeyword) continue

      // Default - just add the character
      tokens.push({
        type: "text",
        text: line[currentIndex],
      })
      currentIndex++
    }

    // Render tokens
    tokens.forEach((token) => {
      if (token.type === "keyword") {
        container.appendChild(createColoredSpan(token.text, "text-purple-400"))
      } else if (token.type === "string") {
        container.appendChild(createColoredSpan(token.text, "text-amber-300"))
      } else {
        container.appendChild(createColoredSpan(token.text, "text-gray-100"))
      }
    })
  }

  // Process C++ line
  const processCppLine = (line: string, container: HTMLElement) => {
    // Check for comments first
    if (line.trim().startsWith("//")) {
      container.appendChild(createColoredSpan(line, "text-gray-500"))
      return
    }

    // Check for preprocessor directives
    if (line.trim().startsWith("#")) {
      const parts = line.split(" ")
      if (parts.length > 0) {
        container.appendChild(createColoredSpan(parts[0], "text-blue-400"))
        container.appendChild(createColoredSpan(line.substring(parts[0].length), "text-gray-100"))
      } else {
        container.appendChild(createColoredSpan(line, "text-gray-100"))
      }
      return
    }

    // Simple fallback - just add the text with proper color
    container.appendChild(createColoredSpan(line, "text-gray-100"))
  }

  // Process Java line
  const processJavaLine = (line: string, container: HTMLElement) => {
    // Check for comments first
    if (line.trim().startsWith("//")) {
      container.appendChild(createColoredSpan(line, "text-gray-500"))
      return
    }

    // Check for package/import statements
    if (line.trim().startsWith("package") || line.trim().startsWith("import")) {
      const parts = line.split(" ")
      if (parts.length > 0) {
        container.appendChild(createColoredSpan(parts[0], "text-purple-400"))
        container.appendChild(createColoredSpan(line.substring(parts[0].length), "text-gray-100"))
      } else {
        container.appendChild(createColoredSpan(line, "text-gray-100"))
      }
      return
    }

    // Simple fallback - just add the text with proper color
    container.appendChild(createColoredSpan(line, "text-gray-100"))
  }

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div className="h-[220px] overflow-hidden bg-[#0d1117] p-4 text-gray-100 text-sm">
        <pre ref={codeRef} className="h-full w-full font-jetbrains"></pre>
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
