/**
 * DOM-based syntax highlighting for project cards vs home page blocks.
 * Two entry points preserve different tokenization / colors (do not merge behavior).
 * Keyword sets live at module scope to avoid reallocating on every paint.
 */

// --- Project card (regex-heavy JS/Python; matches CodeProjectCard) ---

const CARD_JS_KEYWORDS = new Set([
  "const", "let", "var", "function", "return", "if", "else", "for", "while", "do",
  "switch", "case", "break", "continue", "class", "extends", "super",
  "import", "export", "from", "as", "new", "this", "typeof", "instanceof",
  "async", "await", "try", "catch", "finally", "throw", "yield",
])

const CARD_PYTHON_KEYWORDS = new Set([
  "def", "class", "import", "from", "as", "return", "if", "elif", "else",
  "for", "while", "try", "except", "with", "async", "await", "lambda", "pass", "raise", "del", "not", "in", "is",
])

const CARD_CSHARP_KEYWORDS = new Set([
  "using", "namespace", "class", "struct", "interface", "enum", "public", "private", "protected", "internal",
  "static", "readonly", "const", "new", "override", "virtual", "abstract", "sealed", "partial", "void",
  "int", "float", "double", "decimal", "bool", "string", "char", "object", "var", "dynamic",
  "return", "if", "else", "for", "while", "do", "switch", "case", "default", "break", "continue",
  "try", "catch", "finally", "throw", "null", "true", "false", "get", "set", "this", "base",
])

const CARD_CSHARP_TYPES = new Set([
  "Task", "List", "Dictionary", "IEnumerable", "IDisposable", "Action", "Func", "EventHandler",
])

const CARD_CPP_KEYWORDS = new Set([
  "if", "else", "return", "sizeof", "new", "delete", "while", "for", "switch", "case", "break", "continue",
  "const", "static", "void", "int", "char", "float", "double", "unsigned", "signed", "struct", "class", "enum",
  "NULL", "nullptr",
])

const CARD_JAVA_KEYWORDS = new Set([
  "public", "private", "protected", "class", "interface", "extends", "implements",
  "void", "int", "float", "double", "char", "boolean", "byte", "short", "long",
  "return", "new", "this", "static", "final", "null", "true", "false", "if", "else",
  "for", "while", "switch", "case", "break", "continue", "import", "package",
  "try", "catch", "finally", "throw", "throws",
])

const CARD_JAVA_TYPES = new Set([
  "String", "Integer", "Double", "Float", "Boolean", "Character", "Object",
])

function cardColoredSpan(text: string, colorClass: string): HTMLSpanElement {
  const span = document.createElement("span")
  span.className = `${colorClass} font-jetbrains`
  span.textContent = text
  return span
}

function processCardJavaScriptLine(line: string, container: HTMLElement): void {
  if (line.trim().startsWith("//")) {
    container.appendChild(cardColoredSpan(line, "text-gray-500"))
    return
  }

  const regex = /(\s+|".*?"|'.*?'|`.*?`|\w+\(|\w+|===|!==|==|=>|\.|[^\s\w])/g
  const tokens = line.match(regex) || []

  tokens.forEach((token) => {
    if (/^\s+$/.test(token)) {
      container.appendChild(document.createTextNode(token))
    } else if (CARD_JS_KEYWORDS.has(token)) {
      container.appendChild(cardColoredSpan(token, "text-purple-400"))
    } else if (/^\w+\($/.test(token)) {
      container.appendChild(cardColoredSpan(token.slice(0, -1), "text-purple-300"))
      container.appendChild(cardColoredSpan("(", "text-gray-100"))
    } else if (/^".*?"$/.test(token) || /^'.*?'$/.test(token) || /^`.*?`$/.test(token)) {
      container.appendChild(cardColoredSpan(token, "text-amber-300"))
    } else if (/^\d+(\.\d+)?$/.test(token)) {
      container.appendChild(cardColoredSpan(token, "text-orange-300"))
    } else if (["===", "!==", "==", "=", "=>", ".", "+", "-", "*", "/", ":", "<", ">"].includes(token)) {
      container.appendChild(cardColoredSpan(token, "text-sky-400"))
    } else {
      container.appendChild(cardColoredSpan(token, "text-gray-100"))
    }
  })
}

function processCardPythonLine(line: string, container: HTMLElement): void {
  if (line.trim().startsWith("#")) {
    container.appendChild(cardColoredSpan(line, "text-gray-500"))
    return
  }

  const regex = /(\s+|".*?"|'.*?'|\w+\(|\w+|==|!=|<=|>=|\.|[^\s\w])/g
  const tokens = line.match(regex) || []

  tokens.forEach((token) => {
    if (/^\s+$/.test(token)) {
      container.appendChild(document.createTextNode(token))
    } else if (CARD_PYTHON_KEYWORDS.has(token)) {
      container.appendChild(cardColoredSpan(token, "text-purple-400"))
    } else if (/^\w+\($/.test(token)) {
      container.appendChild(cardColoredSpan(token.slice(0, -1), "text-purple-300"))
      container.appendChild(cardColoredSpan("(", "text-gray-100"))
    } else if (/^".*?"$/.test(token) || /^'.*?'$/.test(token)) {
      container.appendChild(cardColoredSpan(token, "text-sky-400"))
    } else if (/^\d+(\.\d+)?$/.test(token)) {
      container.appendChild(cardColoredSpan(token, "text-orange-300"))
    } else if (["==", "!=", "<=", ">=", "=", ".", "+", "-", "*", "/", ":", "<", ">"].includes(token)) {
      container.appendChild(cardColoredSpan(token, "text-sky-400"))
    } else {
      container.appendChild(cardColoredSpan(token, "text-gray-100"))
    }
  })
}

function processCardCSharpLine(line: string, container: HTMLElement): void {
  if (line.trim().startsWith("//")) {
    container.appendChild(cardColoredSpan(line, "text-gray-500"))
    return
  }

  const regex = /(\s+|".*?"|\w+\(|\w+|==|=>|\.|::|[^\s\w])/g
  const tokens = line.match(regex) || []

  tokens.forEach((token) => {
    if (/^\s+$/.test(token)) {
      container.appendChild(document.createTextNode(token))
    } else if (CARD_CSHARP_KEYWORDS.has(token)) {
      container.appendChild(cardColoredSpan(token, "text-rose-400"))
    } else if (CARD_CSHARP_TYPES.has(token)) {
      container.appendChild(cardColoredSpan(token, "text-sky-400"))
    } else if (/^\w+\($/.test(token)) {
      container.appendChild(cardColoredSpan(token.slice(0, -1), "text-purple-300"))
      container.appendChild(cardColoredSpan("(", "text-gray-100"))
    } else if (/^".*"$/.test(token)) {
      container.appendChild(cardColoredSpan(token, "text-yellow-400"))
    } else if (/^\d+(\.\d+)?$/.test(token)) {
      container.appendChild(cardColoredSpan(token, "text-orange-300"))
    } else if (["==", "=", ".", "=>", "+", "-", "*", ":", "<", ">", "!"].includes(token)) {
      container.appendChild(cardColoredSpan(token, "text-sky-400"))
    } else if (token.startsWith("@")) {
      container.appendChild(cardColoredSpan(token, "text-green-300"))
    } else {
      container.appendChild(cardColoredSpan(token, "text-gray-100"))
    }
  })
}

function processCardCppLine(line: string, container: HTMLElement): void {
  if (line.trim().startsWith("//")) {
    container.appendChild(cardColoredSpan(line, "text-gray-500"))
    return
  }

  if (line.trim().startsWith("#")) {
    const parts = line.trim().split(/\s+/)
    container.appendChild(cardColoredSpan(parts[0], "text-red-400"))
    const rest = line.substring(parts[0].length)
    container.appendChild(cardColoredSpan(rest, "text-sky-400"))
    return
  }

  const regex = /(\s+|".*?"|\w+\(|\w+|==|->|\.|[^\s\w])/g
  const tokens = line.match(regex) || []

  tokens.forEach((token) => {
    if (/^\s+$/.test(token)) {
      container.appendChild(document.createTextNode(token))
    } else if (token === "NULL") {
      container.appendChild(cardColoredSpan(token, "text-blue-400"))
    } else if (CARD_CPP_KEYWORDS.has(token)) {
      container.appendChild(cardColoredSpan(token, "text-purple-300"))
    } else if (/^\w+\($/.test(token)) {
      container.appendChild(cardColoredSpan(token.slice(0, -1), "text-red-400"))
      container.appendChild(cardColoredSpan("(", "text-gray-100"))
    } else if (/^".*"$/.test(token)) {
      container.appendChild(cardColoredSpan(token, "text-yellow-400"))
    } else if (token === "==") {
      container.appendChild(cardColoredSpan("=", "text-blue-300"))
      container.appendChild(cardColoredSpan("=", "text-blue-300"))
    } else if (token === "->") {
      container.appendChild(cardColoredSpan("-", "text-blue-300"))
      container.appendChild(cardColoredSpan(">", "text-blue-300"))
    } else if (/^\d+$/.test(token)) {
      container.appendChild(cardColoredSpan(token, "text-orange-300"))
    } else if (token === "." || token === "=") {
      container.appendChild(cardColoredSpan(token, "text-blue-300"))
    } else if (token === "*") {
      container.appendChild(cardColoredSpan(token, "text-sky-400"))
    } else {
      container.appendChild(cardColoredSpan(token, "text-gray-100"))
    }
  })
}

const CARD_SWIFT_KEYWORDS = new Set([
  "import", "struct", "class", "enum", "protocol", "extension", "let", "var", "func", "return", "if", "else",
  "switch", "case", "default", "break", "continue", "for", "in", "while", "guard", "defer", "try", "catch",
  "throw", "throws", "async", "await", "some", "where", "init", "self", "Self", "nil", "true", "false",
  "private", "public", "internal", "fileprivate", "open", "static", "mutating", "override", "convenience",
])

const CARD_SWIFT_TYPES = new Set([
  "View", "String", "Int", "Double", "Float", "Bool", "Color", "Text", "Image", "HStack", "VStack", "ZStack",
  "Spacer", "ForEach", "Binding", "State", "ObservableObject", "Published",
])

function processCardSwiftLine(line: string, container: HTMLElement): void {
  const t = line.trim()
  if (t.startsWith("//")) {
    container.appendChild(cardColoredSpan(line, "text-gray-500"))
    return
  }

  const regex = /(\s+|".*?"|\w+\(|\w+|==|!=|\.|::|[^\s\w])/g
  const tokens = line.match(regex) || []

  tokens.forEach((token) => {
    if (/^\s+$/.test(token)) {
      container.appendChild(document.createTextNode(token))
    } else if (CARD_SWIFT_KEYWORDS.has(token)) {
      container.appendChild(cardColoredSpan(token, "text-fuchsia-400"))
    } else if (CARD_SWIFT_TYPES.has(token)) {
      container.appendChild(cardColoredSpan(token, "text-cyan-300"))
    } else if (/^\w+\($/.test(token)) {
      container.appendChild(cardColoredSpan(token.slice(0, -1), "text-amber-300"))
      container.appendChild(cardColoredSpan("(", "text-gray-100"))
    } else if (/^".*"$/.test(token)) {
      container.appendChild(cardColoredSpan(token, "text-green-400"))
    } else if (/^\d+(\.\d+)?$/.test(token)) {
      container.appendChild(cardColoredSpan(token, "text-orange-300"))
    } else if (["==", "!=", "=", ".", ":", ",", "->"].includes(token)) {
      container.appendChild(cardColoredSpan(token, "text-sky-400"))
    } else {
      container.appendChild(cardColoredSpan(token, "text-gray-100"))
    }
  })
}

const CARD_VB_KEYWORDS = new Set([
  "Public", "Private", "Protected", "Friend", "Dim", "As", "Class", "Module", "End", "Sub", "Function",
  "If", "Then", "Else", "ElseIf", "Select", "Case", "While", "For", "Each", "Next", "To", "Step", "Handles",
  "And", "Or", "Not", "Xor", "New", "Me", "MyBase", "MyClass", "True", "False", "Nothing", "Is", "IsNot",
  "ByVal", "ByRef", "Optional", "ParamArray", "Return", "Try", "Catch", "Finally", "Throw",
])

const CARD_VB_TYPES = new Set([
  "Decimal", "Double", "Single", "Integer", "Long", "Short", "Byte", "Boolean", "String", "Char", "Object", "Date",
])

function processCardVbLine(line: string, container: HTMLElement): void {
  const trimmed = line.trimStart()
  if (trimmed.startsWith("'")) {
    container.appendChild(cardColoredSpan(line, "text-gray-500"))
    return
  }

  const regex = /(\s+|".*?"|\w+\(|\w+|==|\.|&|[^\s\w])/g
  const tokens = line.match(regex) || []

  tokens.forEach((token) => {
    if (/^\s+$/.test(token)) {
      container.appendChild(document.createTextNode(token))
    } else if (CARD_VB_KEYWORDS.has(token)) {
      container.appendChild(cardColoredSpan(token, "text-blue-300"))
    } else if (CARD_VB_TYPES.has(token)) {
      container.appendChild(cardColoredSpan(token, "text-teal-300"))
    } else if (/^\w+\($/.test(token)) {
      container.appendChild(cardColoredSpan(token.slice(0, -1), "text-yellow-300"))
      container.appendChild(cardColoredSpan("(", "text-gray-100"))
    } else if (/^".*"$/.test(token)) {
      container.appendChild(cardColoredSpan(token, "text-amber-200"))
    } else if (/^\d+(\.\d+)?$/.test(token)) {
      container.appendChild(cardColoredSpan(token, "text-orange-300"))
    } else if (["=", "+", "-", "*", "/", "&", "."].includes(token)) {
      container.appendChild(cardColoredSpan(token, "text-sky-400"))
    } else {
      container.appendChild(cardColoredSpan(token, "text-gray-100"))
    }
  })
}

function processCardJavaLine(line: string, container: HTMLElement): void {
  if (line.trim().startsWith("//")) {
    container.appendChild(cardColoredSpan(line, "text-gray-500"))
    return
  }

  if (line.trim().startsWith("package") || line.trim().startsWith("import")) {
    const parts = line.trim().split(/\s+/)
    container.appendChild(cardColoredSpan(parts[0], "text-rose-400"))
    container.appendChild(cardColoredSpan(line.substring(parts[0].length), "text-gray-100"))
    return
  }

  const regex = /(\s+|".*?"|\w+\(|\w+|==|\.|[^\s\w])/g
  const tokens = line.match(regex) || []

  tokens.forEach((token) => {
    if (/^\s+$/.test(token)) {
      container.appendChild(document.createTextNode(token))
    } else if (CARD_JAVA_KEYWORDS.has(token)) {
      container.appendChild(cardColoredSpan(token, "text-rose-400"))
    } else if (CARD_JAVA_TYPES.has(token)) {
      container.appendChild(cardColoredSpan(token, "text-sky-400"))
    } else if (/^\w+\($/.test(token)) {
      container.appendChild(cardColoredSpan(token.slice(0, -1), "text-purple-300"))
      container.appendChild(cardColoredSpan("(", "text-gray-100"))
    } else if (/^".*"$/.test(token)) {
      container.appendChild(cardColoredSpan(token, "text-sky-400"))
    } else if (/^\d+(\.\d+)?$/.test(token)) {
      container.appendChild(cardColoredSpan(token, "text-orange-300"))
    } else if (token === "==" || token === "=" || token === "." || token === "+") {
      container.appendChild(cardColoredSpan(token, "text-blue-300"))
    } else if (token.startsWith("@")) {
      container.appendChild(cardColoredSpan(token, "text-green-300"))
    } else {
      container.appendChild(cardColoredSpan(token, "text-gray-100"))
    }
  })
}

function appendLineCard(
  root: HTMLElement,
  line: string,
  lineIndex: number,
  language: string,
): void {
  const lineDiv = document.createElement("div")
  lineDiv.className = "code-line font-jetbrains"

  const lineNumber = document.createElement("span")
  lineNumber.className = "line-number text-gray-500 select-none mr-4 inline-block w-5 text-right font-jetbrains"
  lineNumber.textContent = String(lineIndex + 1)
  lineDiv.appendChild(lineNumber)

  if (line.trim() === "") {
    const emptySpace = document.createElement("span")
    emptySpace.className = "text-gray-100 font-jetbrains"
    emptySpace.textContent = " "
    lineDiv.appendChild(emptySpace)
  } else if (
    language === "javascript" || language === "jsx" ||
    language === "typescript" || language === "tsx"
  ) {
    processCardJavaScriptLine(line, lineDiv)
  } else if (language === "python") {
    processCardPythonLine(line, lineDiv)
  } else if (language === "cpp" || language === "c") {
    processCardCppLine(line, lineDiv)
  } else if (language === "java") {
    processCardJavaLine(line, lineDiv)
  } else if (language === "csharp" || language === "c#") {
    processCardCSharpLine(line, lineDiv)
  } else if (language === "swift") {
    processCardSwiftLine(line, lineDiv)
  } else if (language === "vb" || language === "vb.net" || language === "vbnet") {
    processCardVbLine(line, lineDiv)
  } else {
    const textSpan = document.createElement("span")
    textSpan.className = "text-gray-100"
    textSpan.textContent = line
    lineDiv.appendChild(textSpan)
  }

  root.appendChild(lineDiv)
}

export function appendProjectCardHighlight(root: HTMLElement, code: string, language: string): void {
  while (root.firstChild) {
    root.removeChild(root.firstChild)
  }
  const lines = code.split("\n")
  lines.forEach((line, lineIndex) => {
    appendLineCard(root, line, lineIndex, language)
  })
}

// --- Simple block (character tokenizer for JS/Python; matches SimpleCodeBlock) ---

const SIMPLE_CPP_KEYWORDS = CARD_CPP_KEYWORDS

const SIMPLE_CSHARP_KEYWORDS = CARD_CSHARP_KEYWORDS
const SIMPLE_CSHARP_TYPES = CARD_CSHARP_TYPES

const SIMPLE_JAVA_KEYWORDS = CARD_JAVA_KEYWORDS
const SIMPLE_JAVA_TYPES = CARD_JAVA_TYPES

const SIMPLE_BLOCK_JS_KEYWORDS = [
  "const", "let", "var", "function", "return", "if", "else", "for", "while",
  "class", "import", "export", "from", "async", "await", "try", "catch", "new", "this",
]

const SIMPLE_BLOCK_PYTHON_KEYWORDS = [
  "def", "class", "import", "from", "as", "return", "if", "elif", "else",
  "for", "while", "try", "except", "with", "async", "await", "lambda",
]

function simpleColoredSpan(text: string, colorClass: string): HTMLSpanElement {
  const span = document.createElement("span")
  span.className = colorClass
  span.textContent = text
  return span
}

function processSimpleJavaScriptLine(line: string, container: HTMLElement): void {
  if (line.trim().startsWith("//")) {
    container.appendChild(simpleColoredSpan(line, "text-gray-500"))
    return
  }

  let currentIndex = 0
  const tokens: { type: string; text: string }[] = []

  while (currentIndex < line.length) {
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

    let foundKeyword = false
    for (const keyword of SIMPLE_BLOCK_JS_KEYWORDS) {
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

    tokens.push({
      type: "text",
      text: line[currentIndex],
    })
    currentIndex++
  }

  tokens.forEach((token) => {
    if (token.type === "keyword") {
      container.appendChild(simpleColoredSpan(token.text, "text-purple-400"))
    } else if (token.type === "string") {
      container.appendChild(simpleColoredSpan(token.text, "text-amber-300"))
    } else {
      container.appendChild(simpleColoredSpan(token.text, "text-gray-100"))
    }
  })
}

function processSimplePythonLine(line: string, container: HTMLElement): void {
  if (line.trim().startsWith("#")) {
    container.appendChild(simpleColoredSpan(line, "text-gray-500"))
    return
  }

  let currentIndex = 0
  const tokens: { type: string; text: string }[] = []

  while (currentIndex < line.length) {
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

    let foundKeyword = false
    for (const keyword of SIMPLE_BLOCK_PYTHON_KEYWORDS) {
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

    tokens.push({
      type: "text",
      text: line[currentIndex],
    })
    currentIndex++
  }

  tokens.forEach((token) => {
    if (token.type === "keyword") {
      container.appendChild(simpleColoredSpan(token.text, "text-purple-400"))
    } else if (token.type === "string") {
      container.appendChild(simpleColoredSpan(token.text, "text-amber-300"))
    } else {
      container.appendChild(simpleColoredSpan(token.text, "text-gray-100"))
    }
  })
}

function processSimpleCppLine(line: string, container: HTMLElement): void {
  if (line.trim().startsWith("//")) {
    container.appendChild(simpleColoredSpan(line, "text-gray-500"))
    return
  }

  if (line.trim().startsWith("#")) {
    const parts = line.trim().split(/\s+/)
    container.appendChild(simpleColoredSpan(parts[0], "text-red-400"))

    const rest = line.substring(parts[0].length)
    container.appendChild(simpleColoredSpan(rest, "text-sky-400"))
    return
  }

  const regex = /(\s+|".*?"|\w+\(|\w+|==|->|\.|[^\s\w])/g
  const tokens = line.match(regex) || []

  tokens.forEach((token) => {
    if (/^\s+$/.test(token)) {
      container.appendChild(document.createTextNode(token))
    } else if (token === "NULL") {
      container.appendChild(simpleColoredSpan(token, "text-blue-400"))
    } else if (SIMPLE_CPP_KEYWORDS.has(token)) {
      container.appendChild(simpleColoredSpan(token, "text-purple-300"))
    } else if (/^\w+\($/.test(token)) {
      container.appendChild(simpleColoredSpan(token.slice(0, -1), "text-red-400"))
      container.appendChild(simpleColoredSpan("(", "text-gray-100"))
    } else if (/^".*"$/.test(token)) {
      container.appendChild(simpleColoredSpan(token, "text-yellow-400"))
    } else if (token === "==") {
      container.appendChild(simpleColoredSpan("=", "text-blue-300"))
      container.appendChild(simpleColoredSpan("=", "text-blue-300"))
    } else if (token === "->") {
      container.appendChild(simpleColoredSpan("-", "text-blue-300"))
      container.appendChild(simpleColoredSpan(">", "text-blue-300"))
    } else if (/^\d+$/.test(token)) {
      container.appendChild(simpleColoredSpan(token, "text-orange-300"))
    } else if (["==", "=", ".", "=>", "+", "-", "*", ":", "<", ">"].includes(token)) {
      container.appendChild(simpleColoredSpan(token, "text-sky-400"))
    } else if (token === "*") {
      container.appendChild(simpleColoredSpan(token, "text-sky-400"))
    } else {
      container.appendChild(simpleColoredSpan(token, "text-gray-100"))
    }
  })
}

function processSimpleCSharpLine(line: string, container: HTMLElement): void {
  if (line.trim().startsWith("//")) {
    container.appendChild(simpleColoredSpan(line, "text-gray-500"))
    return
  }

  const regex = /(\s+|".*?"|\w+\(|\w+|==|=>|\.|::|[^\s\w])/g
  const tokens = line.match(regex) || []

  tokens.forEach((token) => {
    if (/^\s+$/.test(token)) {
      container.appendChild(document.createTextNode(token))
    } else if (SIMPLE_CSHARP_KEYWORDS.has(token)) {
      container.appendChild(simpleColoredSpan(token, "text-rose-400"))
    } else if (SIMPLE_CSHARP_TYPES.has(token)) {
      container.appendChild(simpleColoredSpan(token, "text-sky-400"))
    } else if (/^\w+\($/.test(token)) {
      container.appendChild(simpleColoredSpan(token.slice(0, -1), "text-purple-300"))
      container.appendChild(simpleColoredSpan("(", "text-gray-100"))
    } else if (/^".*"$/.test(token)) {
      container.appendChild(simpleColoredSpan(token, "text-yellow-400"))
    } else if (/^\d+(\.\d+)?$/.test(token)) {
      container.appendChild(simpleColoredSpan(token, "text-orange-300"))
    } else if (token === "==" || token === "=" || token === "." || token === "=>" || token === "+") {
      container.appendChild(simpleColoredSpan(token, "text-blue-300"))
    } else if (token.startsWith("@")) {
      container.appendChild(simpleColoredSpan(token, "text-green-300"))
    } else {
      container.appendChild(simpleColoredSpan(token, "text-gray-100"))
    }
  })
}

function processSimpleJavaLine(line: string, container: HTMLElement): void {
  if (line.trim().startsWith("//")) {
    container.appendChild(simpleColoredSpan(line, "text-gray-500"))
    return
  }

  if (line.trim().startsWith("package") || line.trim().startsWith("import")) {
    const parts = line.trim().split(/\s+/)
    container.appendChild(simpleColoredSpan(parts[0], "text-rose-400"))
    container.appendChild(simpleColoredSpan(line.substring(parts[0].length), "text-gray-100"))
    return
  }

  const regex = /(\s+|".*?"|\w+\(|\w+|==|\.|[^\s\w])/g
  const tokens = line.match(regex) || []

  tokens.forEach((token) => {
    if (/^\s+$/.test(token)) {
      container.appendChild(document.createTextNode(token))
    } else if (SIMPLE_JAVA_KEYWORDS.has(token)) {
      container.appendChild(simpleColoredSpan(token, "text-rose-400"))
    } else if (SIMPLE_JAVA_TYPES.has(token)) {
      container.appendChild(simpleColoredSpan(token, "text-sky-400"))
    } else if (/^\w+\($/.test(token)) {
      container.appendChild(simpleColoredSpan(token.slice(0, -1), "text-purple-300"))
      container.appendChild(simpleColoredSpan("(", "text-gray-100"))
    } else if (/^".*"$/.test(token)) {
      container.appendChild(simpleColoredSpan(token, "text-sky-400"))
    } else if (/^\d+(\.\d+)?$/.test(token)) {
      container.appendChild(simpleColoredSpan(token, "text-orange-300"))
    } else if (token === "==" || token === "=" || token === "." || token === "+") {
      container.appendChild(simpleColoredSpan(token, "text-blue-300"))
    } else if (token.startsWith("@")) {
      container.appendChild(simpleColoredSpan(token, "text-green-300"))
    } else {
      container.appendChild(simpleColoredSpan(token, "text-gray-100"))
    }
  })
}

function appendLineSimple(
  root: HTMLElement,
  line: string,
  lineIndex: number,
  language: string,
): void {
  const lineDiv = document.createElement("div")
  lineDiv.className = "code-line"

  const lineNumber = document.createElement("span")
  lineNumber.className = "line-number text-gray-500 select-none mr-4 inline-block w-5 text-right"
  lineNumber.textContent = String(lineIndex + 1)
  lineDiv.appendChild(lineNumber)

  if (line.trim() === "") {
    const emptySpace = document.createElement("span")
    emptySpace.className = "text-gray-100"
    emptySpace.textContent = " "
    lineDiv.appendChild(emptySpace)
  } else if (
    language === "javascript" || language === "jsx" ||
    language === "typescript" || language === "tsx"
  ) {
    processSimpleJavaScriptLine(line, lineDiv)
  } else if (language === "python") {
    processSimplePythonLine(line, lineDiv)
  } else if (language === "cpp" || language === "c") {
    processSimpleCppLine(line, lineDiv)
  } else if (language === "java") {
    processSimpleJavaLine(line, lineDiv)
  } else if (language === "csharp" || language === "c#") {
    processSimpleCSharpLine(line, lineDiv)
  } else {
    const textSpan = document.createElement("span")
    textSpan.className = "text-gray-100"
    textSpan.textContent = line
    lineDiv.appendChild(textSpan)
  }

  root.appendChild(lineDiv)
}

export function appendSimpleBlockHighlight(root: HTMLElement, code: string, language: string): void {
  while (root.firstChild) {
    root.removeChild(root.firstChild)
  }
  const lines = code.split("\n")
  lines.forEach((line, lineIndex) => {
    appendLineSimple(root, line, lineIndex, language)
  })
}
