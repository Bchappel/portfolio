"use client"

import { useEffect, useRef } from "react"

interface SimpleCodeBlockProps {
  code: string
  language: string
}

export function SimpleCodeBlock({ code, language }: SimpleCodeBlockProps) {
  const codeRef = useRef<HTMLPreElement>(null)

  // Syntax highlighting with DOM manipulation
  useEffect(() => {
    if (!codeRef.current) return

    // Clear existing content
    while (codeRef.current.firstChild) {
      codeRef.current.removeChild(codeRef.current.firstChild)
    }

    // Split code into lines
    const lines = code.split("\n")

    // Process each line
    lines.forEach((line, lineIndex) => {
      // Create line container
      const lineDiv = document.createElement("div")
      lineDiv.className = "code-line"

      // Add line number
      const lineNumber = document.createElement("span")
      lineNumber.className = "line-number text-gray-500 select-none mr-4 inline-block w-5 text-right"
      lineNumber.textContent = (lineIndex + 1).toString()
      lineDiv.appendChild(lineNumber)

      // Process the line content based on language
      if (line.trim() === "") {
        // Empty line
        const emptySpace = document.createElement("span")
        emptySpace.className = "text-gray-100"
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
  }, [code, language])

  // Helper function to create a colored span
  const createColoredSpan = (text: string, colorClass: string) => {
    const span = document.createElement("span")
    span.className = colorClass
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
      } else if (["==", "=", ".", "=>", "+", "-", "*", ":", "<", ">"].includes(token)) {
        container.appendChild(createColoredSpan(token, "text-sky-400"))
      } else if (token === "*") {
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
      } else if (token === "==" || token === "=" || token === "." || token === "=>" || token === "+") {
        container.appendChild(createColoredSpan(token, "text-blue-300"))
      } else if (token.startsWith("@")) {
        container.appendChild(createColoredSpan(token, "text-green-300")) // annotations or verbatim identifiers
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
  
  return <pre ref={codeRef} className="h-full w-full font-jetbrains" style={{fontFeatureSettings: '"liga" 0',fontVariantLigatures: 'none',}}></pre>
}
