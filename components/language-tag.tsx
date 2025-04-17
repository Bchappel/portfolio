interface LanguageTagProps {
  language: string
}

export function LanguageTag({ language }: LanguageTagProps) {
  // Function to determine color based on language
  const getColorClasses = (lang: string): string => {
    // Convert to lowercase for case-insensitive matching
    const normalizedLang = lang.toLowerCase()

    // JavaScript family
    if (normalizedLang.includes("javascript") || normalizedLang === "js") {
      return "bg-yellow-100 text-yellow-800 border-yellow-200"
    }

    if (normalizedLang.includes("typescript") || normalizedLang === "ts") {
      return "bg-blue-100 text-blue-800 border-blue-200"
    }

    if (normalizedLang === "jsx" || normalizedLang === "tsx") {
      return "bg-blue-100 text-blue-800 border-blue-200"
    }

    // React ecosystem
    if (normalizedLang.includes("react")) {
      return "bg-cyan-100 text-cyan-800 border-cyan-200"
    }

    // Next.js
    if (normalizedLang.includes("next")) {
      return "bg-black text-white border-gray-700"
    }

    // Vue ecosystem
    if (normalizedLang.includes("vue")) {
      return "bg-emerald-100 text-emerald-800 border-emerald-200"
    }

    // Node.js
    if (normalizedLang.includes("node")) {
      return "bg-green-100 text-green-800 border-green-200"
    }

    // Python ecosystem
    if (normalizedLang === "python" || normalizedLang.includes("django") || normalizedLang.includes("flask")) {
      return "bg-yellow-100 text-yellow-800 border-yellow-400"
    }

    // Java ecosystem
    if (normalizedLang === "java" || normalizedLang.includes("spring")) {
      return "bg-red-100 text-red-800 border-red-200"
    }

    // C family
    if (normalizedLang === "c" || normalizedLang === "cpp" || normalizedLang === "c++") {
      return "bg-blue-100 text-blue-800 border-blue-200"
    }

    if (normalizedLang === "c#" || normalizedLang === "csharp") {
      return "bg-purple-100 text-purple-800 border-purple-200"
    }

    // Web technologies
    if (normalizedLang === "html") {
      return "bg-orange-100 text-orange-800 border-orange-200"
    }

    if (normalizedLang === "css" || normalizedLang === "sass" || normalizedLang === "scss") {
      return "bg-blue-100 text-blue-800 border-blue-200"
    }

    if (normalizedLang.includes("tailwind")) {
      return "bg-cyan-100 text-cyan-800 border-cyan-200"
    }

    // Databases
    if (normalizedLang.includes("sql") || normalizedLang.includes("postgresql") || normalizedLang.includes("mysql")) {
      return "bg-blue-100 text-blue-800 border-blue-200"
    }

    if (normalizedLang.includes("mongo")) {
      return "bg-green-100 text-green-800 border-green-200"
    }

    if (normalizedLang.includes("firebase")) {
      return "bg-yellow-100 text-yellow-800 border-yellow-200"
    }

    // Other languages
    if (normalizedLang === "go") {
      return "bg-cyan-100 text-cyan-800 border-cyan-200"
    }

    if (normalizedLang === "rust") {
      return "bg-amber-100 text-amber-800 border-amber-200"
    }

    if (normalizedLang === "opengl") {
      return "bg-green-100 text-green-800 border-green-200"
    }

    if (normalizedLang === "gradle") {
      return "bg-blue-100 text-blue-800 border-blue-200"
    }

    if (normalizedLang === "unity") {
      return "bg-white-100 text-white-800 border-white-200"
    }

    if (normalizedLang === "ruby") {
      return "bg-red-100 text-red-800 border-red-200"
    }

    if (normalizedLang === "php") {
      return "bg-indigo-100 text-indigo-800 border-indigo-200"
    }

    // Tools & Others
    if (normalizedLang.includes("docker") || normalizedLang.includes("kubernetes")) {
      return "bg-blue-100 text-blue-800 border-blue-200"
    }

    if (normalizedLang === "aws") {
      return "bg-yellow-100 text-yellow-800 border-yellow-200"
    }

    if (normalizedLang === "azure") {
      return "bg-blue-100 text-blue-800 border-blue-200"
    }

    if (normalizedLang === "gcp") {
      return "bg-red-100 text-red-800 border-red-200"
    }

    if (normalizedLang.includes("graphql")) {
      return "bg-pink-100 text-pink-800 border-pink-200"
    }

    // Default color for unknown languages
    return "bg-stone-100 text-stone-700 border-stone-200"
  }

  return <span className={`px-2 py-1 rounded-md text-xs border ${getColorClasses(language)}`}>{language}</span>
}
