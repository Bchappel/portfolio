/** Default / unclassified tech pill (used to detect themed vs neutral tags). */
export const DEFAULT_LANGUAGE_TAG_CLASS = "bg-stone-100 text-stone-700 border-stone-200"

/** True when this label resolves to a non-default themed palette (for ordering). */
export function skillLabelHasThemedColor(label: string): boolean {
  return getLanguageColorClass(label) !== DEFAULT_LANGUAGE_TAG_CLASS
}

/**
 * Sort key from the resolved pill classes: blues and blue-adjacent hues first, then a consistent
 * progression (greens → yellows → oranges → reds → purples → dark chips → other neutrals → default).
 */
export function getLanguageColorFamilySortRank(label: string): number {
  const c = getLanguageColorClass(label)
  if (c === DEFAULT_LANGUAGE_TAG_CLASS) return 200

  // Blue family first
  if (/\b(bg|text|border)-blue-/.test(c)) return 0
  if (/\b(bg|text|border)-sky-/.test(c)) return 1
  if (/\b(bg|text|border)-indigo-/.test(c)) return 2
  if (/\b(bg|text|border)-cyan-/.test(c)) return 3
  if (/\b(bg|text|border)-teal-/.test(c)) return 4

  if (/\b(bg|text|border)-emerald-/.test(c)) return 5
  if (/\b(bg|text|border)-green-/.test(c)) return 6

  if (/\b(bg|text|border)-yellow-/.test(c)) return 7
  if (/\b(bg|text|border)-amber-/.test(c)) return 8
  if (/\b(bg|text|border)-orange-/.test(c)) return 9

  if (/\b(bg|text|border)-red-/.test(c)) return 10
  if (/\b(bg|text|border)-rose-/.test(c)) return 11
  if (/\b(bg|text|border)-pink-/.test(c)) return 12
  if (/\b(bg|text|border)-violet-/.test(c)) return 13
  if (/\b(bg|text|border)-purple-/.test(c)) return 14

  // Dark / high-contrast chips after hue groups
  if (c.includes("black") || /\b(bg|text)-stone-8/.test(c) || /\b(bg|text)-stone-9/.test(c)) {
    return 15
  }

  // Remaining stone-tinted pills (e.g. WSL/Linux) before the plain default
  if (/\bstone-/.test(c)) return 190

  return 160
}

/** Group pills by colour family (blues first), then alphabetically within each group. */
export function sortSkillLabelsByColorFamily(labels: readonly string[]): string[] {
  return [...labels].sort((a, b) => {
    const ra = getLanguageColorFamilySortRank(a)
    const rb = getLanguageColorFamilySortRank(b)
    if (ra !== rb) return ra - rb
    return a.localeCompare(b, undefined, { sensitivity: "base" })
  })
}

/** @deprecated Use {@link sortSkillLabelsByColorFamily} */
export const sortSkillLabelsByThemedFirst = sortSkillLabelsByColorFamily

/** Tailwind classes for technology / language tags (used by LanguageTag and any future callers). */
export function getLanguageColorClass(lang: string): string {
  const normalizedLang = lang.toLowerCase()

  if (normalizedLang.includes("javascript") || normalizedLang === "js") {
    return "bg-yellow-100 text-yellow-800 border-yellow-200"
  }

  if (normalizedLang.includes("typescript") || normalizedLang === "ts") {
    return "bg-blue-100 text-blue-800 border-blue-200"
  }

  if (normalizedLang === "jsx" || normalizedLang === "tsx") {
    return "bg-blue-100 text-blue-800 border-blue-200"
  }

  if (normalizedLang.includes("react")) {
    return "bg-cyan-100 text-cyan-800 border-cyan-200"
  }

  if (normalizedLang.includes("next")) {
    return "bg-black text-white border-gray-700"
  }

  if (normalizedLang.includes("vue")) {
    return "bg-emerald-100 text-emerald-800 border-emerald-200"
  }

  if (normalizedLang.includes("node")) {
    return "bg-green-100 text-green-800 border-green-200"
  }

  if (normalizedLang === "python" || normalizedLang.includes("django") || normalizedLang.includes("flask")) {
    return "bg-yellow-100 text-yellow-800 border-yellow-400"
  }

  if (normalizedLang.includes("pandas")) {
    return "bg-lime-100 text-lime-900 border-lime-400"
  }

  if (normalizedLang === "java" || normalizedLang.includes("spring")) {
    return "bg-red-100 text-red-800 border-red-200"
  }

  if (
    normalizedLang === "c" ||
    normalizedLang === "cpp" ||
    normalizedLang === "c++" ||
    normalizedLang.includes("c/c++") ||
    normalizedLang.includes("c++")
  ) {
    return "bg-blue-100 text-blue-800 border-blue-200"
  }

  if (normalizedLang === "c#" || normalizedLang === "csharp") {
    return "bg-purple-100 text-purple-800 border-purple-200"
  }

  if (normalizedLang.includes(".net") || normalizedLang.includes("dotnet")) {
    return "bg-purple-100 text-purple-800 border-purple-200"
  }

  if (normalizedLang === "html") {
    return "bg-orange-100 text-orange-800 border-orange-200"
  }

  if (normalizedLang === "css" || normalizedLang === "sass" || normalizedLang === "scss") {
    return "bg-blue-100 text-blue-800 border-blue-200"
  }

  if (normalizedLang.includes("tailwind")) {
    return "bg-cyan-100 text-cyan-800 border-cyan-200"
  }

  if (normalizedLang.includes("sql") || normalizedLang.includes("postgresql") || normalizedLang.includes("mysql")) {
    return "bg-blue-100 text-blue-800 border-blue-200"
  }

  if (normalizedLang.includes("mongo")) {
    return "bg-green-100 text-green-800 border-green-200"
  }

  if (normalizedLang.includes("firebase")) {
    return "bg-yellow-100 text-yellow-800 border-yellow-200"
  }

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

  if (normalizedLang.includes("laravel")) {
    return "bg-red-100 text-red-800 border-red-300"
  }

  if (normalizedLang.includes("flutter")) {
    return "bg-sky-100 text-sky-800 border-sky-300"
  }

  if (normalizedLang.includes("swiftui")) {
    return "bg-rose-100 text-rose-900 border-rose-300"
  }

  if (normalizedLang.includes("healthkit")) {
    return "bg-pink-100 text-pink-900 border-pink-300"
  }

  if (normalizedLang.includes("xcode")) {
    return "bg-sky-100 text-sky-900 border-sky-400"
  }

  if (normalizedLang.includes("winforms")) {
    return "bg-slate-200 text-slate-900 border-slate-400"
  }

  if (normalizedLang.includes("swift")) {
    return "bg-orange-100 text-orange-800 border-orange-300"
  }

  if (normalizedLang === "r") {
    return "bg-blue-100 text-blue-900 border-blue-300"
  }

  if (normalizedLang.includes("visual basic") || normalizedLang === "vb" || normalizedLang.includes("vb.net")) {
    return "bg-violet-100 text-violet-800 border-violet-300"
  }

  if (normalizedLang.includes("gnu") || normalizedLang.includes("gcc")) {
    return "bg-blue-100 text-blue-800 border-blue-200"
  }

  if (normalizedLang.includes("github")) {
    return "bg-stone-800 text-white border-stone-900"
  }

  if (normalizedLang.includes("bitbucket")) {
    return "bg-blue-100 text-blue-900 border-blue-400"
  }

  if (normalizedLang.includes("vercel")) {
    return "bg-black text-white border-gray-700"
  }

  if (normalizedLang.includes("linux") || normalizedLang.includes("wsl")) {
    return "bg-stone-200 text-stone-900 border-stone-400"
  }

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

  return DEFAULT_LANGUAGE_TAG_CLASS
}
