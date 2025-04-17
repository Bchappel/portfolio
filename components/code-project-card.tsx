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
        if (
          language === "javascript" || language === "jsx" ||
          language === "typescript" || language === "tsx"
        ) {
          processJavaScriptLine(line, lineDiv)
        } else if (language === "python") {
          processPythonLine(line, lineDiv)
        } else if (language === "cpp" || language === "c") {
          processCppLine(line, lineDiv)
        } else if (language === "java") {
          processJavaLine(line, lineDiv)
        } else if (language === "csharp" || language === "c#") {
          processCSharpLine(line, lineDiv)
        } else {
          // Default - just add the text with proper color
          const textSpan = document.createElement("span")
          textSpan.className = "text-gray-100"
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
    span.className = `${colorClass} font-jetbrains`
    span.textContent = text
    return span
  }

  // Process JavaScript line
  const jsKeywords = new Set([
    "const", "let", "var", "function", "return", "if", "else", "for", "while", "do",
    "switch", "case", "break", "continue", "class", "extends", "super",
    "import", "export", "from", "as", "new", "this", "typeof", "instanceof",
    "async", "await", "try", "catch", "finally", "throw", "yield"
  ])
  
  const processJavaScriptLine = (line: string, container: HTMLElement) => {
    if (line.trim().startsWith("//")) {
      container.appendChild(createColoredSpan(line, "text-gray-500"))
      return
    }
  
    const regex = /(\s+|".*?"|'.*?'|`.*?`|\w+\(|\w+|===|!==|==|=>|\.|[^\s\w])/g
    const tokens = line.match(regex) || []
  
    tokens.forEach((token) => {
      if (/^\s+$/.test(token)) {
        container.appendChild(document.createTextNode(token))
      } else if (jsKeywords.has(token)) {
        container.appendChild(createColoredSpan(token, "text-purple-400"))
      } else if (/^\w+\($/.test(token)) {
        container.appendChild(createColoredSpan(token.slice(0, -1), "text-purple-300")) // function call
        container.appendChild(createColoredSpan("(", "text-gray-100"))
      } else if (
        /^".*?"$/.test(token) ||
        /^'.*?'$/.test(token) ||
        /^`.*?`$/.test(token)
      ) {
        container.appendChild(createColoredSpan(token, "text-amber-300"))
      } else if (/^\d+(\.\d+)?$/.test(token)) {
        container.appendChild(createColoredSpan(token, "text-orange-300"))
      } else if (["===", "!==", "==", "=", "=>", ".", "+", "-", "*", "/", ":", "<", ">"].includes(token)) {
        container.appendChild(createColoredSpan(token, "text-sky-400"))
      } else {
        container.appendChild(createColoredSpan(token, "text-gray-100"))
      }
    })
  }
  
  // Process Python line
  const pythonKeywords = new Set([
    "def", "class", "import", "from", "as", "return", "if", "elif", "else",
    "for", "while", "try", "except", "with", "async", "await", "lambda", "pass", "raise", "del", "not", "in", "is"
  ])
  
  const processPythonLine = (line: string, container: HTMLElement) => {
    // Handle comments
    if (line.trim().startsWith("#")) {
      container.appendChild(createColoredSpan(line, "text-gray-500"))
      return
    }
  
    // Tokenize while preserving spaces
    const regex = /(\s+|".*?"|'.*?'|\w+\(|\w+|==|!=|<=|>=|\.|[^\s\w])/g
    const tokens = line.match(regex) || []
  
    tokens.forEach((token) => {
      if (/^\s+$/.test(token)) {
        container.appendChild(document.createTextNode(token))
      } else if (pythonKeywords.has(token)) {
        container.appendChild(createColoredSpan(token, "text-purple-400"))
      } else if (/^\w+\($/.test(token)) {
        container.appendChild(createColoredSpan(token.slice(0, -1), "text-purple-300")) // function call
        container.appendChild(createColoredSpan("(", "text-gray-100"))
      } else if (/^".*?"$/.test(token) || /^'.*?'$/.test(token)) {
        container.appendChild(createColoredSpan(token, "text-sky-400"))
      } else if (/^\d+(\.\d+)?$/.test(token)) {
        container.appendChild(createColoredSpan(token, "text-orange-300"))
      } else if (["==", "!=", "<=", ">=", "=", ".", "+", "-", "*", "/", ":", "<", ">"].includes(token)) {
        container.appendChild(createColoredSpan(token, "text-sky-400"))
      } else {
        container.appendChild(createColoredSpan(token, "text-gray-100"))
      }
    })
  }
  
  // Process C# line
  const csharpKeywords = new Set([
    "using", "namespace", "class", "struct", "interface", "enum", "public", "private", "protected", "internal",
    "static", "readonly", "const", "new", "override", "virtual", "abstract", "sealed", "partial", "void",
    "int", "float", "double", "decimal", "bool", "string", "char", "object", "var", "dynamic",
    "return", "if", "else", "for", "while", "do", "switch", "case", "default", "break", "continue",
    "try", "catch", "finally", "throw", "null", "true", "false", "get", "set", "this", "base"
  ])
  
  const csharpTypes = new Set([
    "Task", "List", "Dictionary", "IEnumerable", "IDisposable", "Action", "Func", "EventHandler"
  ])
  
  const processCSharpLine = (line: string, container: HTMLElement) => {
    if (line.trim().startsWith("//")) {
      container.appendChild(createColoredSpan(line, "text-gray-500"))
      return
    }
  
    const regex = /(\s+|".*?"|\w+\(|\w+|==|=>|\.|::|[^\s\w])/g
    const tokens = line.match(regex) || []
  
    tokens.forEach(token => {
      if (/^\s+$/.test(token)) {
        container.appendChild(document.createTextNode(token))
      } else if (csharpKeywords.has(token)) {
        container.appendChild(createColoredSpan(token, "text-rose-400"))
      } else if (csharpTypes.has(token)) {
        container.appendChild(createColoredSpan(token, "text-sky-400"))
      } else if (/^\w+\($/.test(token)) {
        container.appendChild(createColoredSpan(token.slice(0, -1), "text-purple-300")) // method
        container.appendChild(createColoredSpan("(", "text-gray-100"))
      } else if (/^".*"$/.test(token)) {
        container.appendChild(createColoredSpan(token, "text-yellow-400"))
      } else if (/^\d+(\.\d+)?$/.test(token)) {
        container.appendChild(createColoredSpan(token, "text-orange-300"))
      } else if (["==", "=", ".", "=>", "+", "-", "*", ":", "<", ">", "!"].includes(token)) {
        container.appendChild(createColoredSpan(token, "text-sky-400"))
      } else if (token.startsWith("@")) {
        container.appendChild(createColoredSpan(token, "text-green-300")) // annotations or verbatim identifiers
      } else {
        container.appendChild(createColoredSpan(token, "text-gray-100"))
      }
    })
  }
  
  // Process C++ line
  const cppKeywords = new Set([
    "if", "else", "return", "sizeof", "new", "delete", "while", "for", "switch", "case", "break", "continue",
    "const", "static", "void", "int", "char", "float", "double", "unsigned", "signed", "struct", "class", "enum",
    "NULL", "nullptr"
  ])
  
  const processCppLine = (line: string, container: HTMLElement) => {
    // Comments
    if (line.trim().startsWith("//")) {
      container.appendChild(createColoredSpan(line, "text-gray-500"))
      return
    }
  
    // Preprocessor
    if (line.trim().startsWith("#")) {
      const parts = line.trim().split(/\s+/)
      container.appendChild(createColoredSpan(parts[0], "text-red-400"))
  
      const rest = line.substring(parts[0].length)
      container.appendChild(createColoredSpan(rest, "text-sky-400"))
      return
    }
  
    // Tokenize with whitespace preservation
    const regex = /(\s+|".*?"|\w+\(|\w+|==|->|\.|[^\s\w])/g
    const tokens = line.match(regex) || []
  
    tokens.forEach((token) => {
      if (/^\s+$/.test(token)) {
        container.appendChild(document.createTextNode(token))
      } else if (token === "NULL") {
        container.appendChild(createColoredSpan(token, "text-blue-400")) // special color for NULL
      } else if (cppKeywords.has(token)) {
        container.appendChild(createColoredSpan(token, "text-purple-300"))
      } else if (/^\w+\($/.test(token)) {
        container.appendChild(createColoredSpan(token.slice(0, -1), "text-red-400")) // function name
        container.appendChild(createColoredSpan("(", "text-gray-100"))
      } else if (/^".*"$/.test(token)) {
        container.appendChild(createColoredSpan(token, "text-yellow-400"))
      } else if (token === "==") {
        container.appendChild(createColoredSpan("=", "text-blue-300"))
        container.appendChild(createColoredSpan("=", "text-blue-300"))
      } else if (token === "->") {
        container.appendChild(createColoredSpan("-", "text-blue-300"))
        container.appendChild(createColoredSpan(">", "text-blue-300"))
      } else if (/^\d+$/.test(token)) {
        container.appendChild(createColoredSpan(token, "text-orange-300"))
      } else if (token === "." || token === "=") {
        container.appendChild(createColoredSpan(token, "text-blue-300"))
      } else if (token === "*") {
        container.appendChild(createColoredSpan(token, "text-sky-400"))
      } else {
        container.appendChild(createColoredSpan(token, "text-gray-100"))
      }
    })    
  }
  
  // Process Java line
  const javaKeywords = new Set([
    "public", "private", "protected", "class", "interface", "extends", "implements",
    "void", "int", "float", "double", "char", "boolean", "byte", "short", "long",
    "return", "new", "this", "static", "final", "null", "true", "false", "if", "else",
    "for", "while", "switch", "case", "break", "continue", "import", "package",
    "try", "catch", "finally", "throw", "throws"
  ])
    
  const javaTypes = new Set([
    "String", "Integer", "Double", "Float", "Boolean", "Character", "Object"
  ])
  
  const processJavaLine = (line: string, container: HTMLElement) => {
    if (line.trim().startsWith("//")) {
      container.appendChild(createColoredSpan(line, "text-gray-500"))
      return
    }
  
    // Handle import/package separately
    if (line.trim().startsWith("package") || line.trim().startsWith("import")) {
      const parts = line.trim().split(/\s+/)
      container.appendChild(createColoredSpan(parts[0], "text-rose-400")) // highlight keyword
      container.appendChild(createColoredSpan(line.substring(parts[0].length), "text-gray-100"))
      return
    }
  
    const regex = /(\s+|".*?"|\w+\(|\w+|==|\.|[^\s\w])/g
    const tokens = line.match(regex) || []
  
    tokens.forEach(token => {
      if (/^\s+$/.test(token)) {
        container.appendChild(document.createTextNode(token))
      } else if (javaKeywords.has(token)) {
        container.appendChild(createColoredSpan(token, "text-rose-400"))
      } else if (javaTypes.has(token)) {
        container.appendChild(createColoredSpan(token, "text-sky-400"))
      } else if (/^\w+\($/.test(token)) {
        container.appendChild(createColoredSpan(token.slice(0, -1), "text-purple-300")) // function name
        container.appendChild(createColoredSpan("(", "text-gray-100"))
      } else if (/^".*"$/.test(token)) {
        container.appendChild(createColoredSpan(token, "text-sky-400"))
      } else if (/^\d+(\.\d+)?$/.test(token)) {
        container.appendChild(createColoredSpan(token, "text-orange-300"))
      } else if (token === "==" || token === "=" || token === "." || token === "+") {
        container.appendChild(createColoredSpan(token, "text-blue-300"))
      }else if (token.startsWith("@")) {
        container.appendChild(createColoredSpan(token, "text-green-300")) // or any color you like
      }else {
        container.appendChild(createColoredSpan(token, "text-gray-100"))
      }
    })
  }

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div className="h-[220px] overflow-hidden bg-[#0d1117] p-4 text-gray-100 text-sm">
        <pre ref={codeRef} className="h-full w-full font-jetbrains" style={{fontFeatureSettings: '"liga" 0',fontVariantLigatures: 'none',}}></pre>
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
