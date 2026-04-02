import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { TravelMapDynamic } from "@/components/travel-map-dynamic"

export default function PersonalPage() {
  return (
    <div className="min-h-screen bg-stone-50 flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="py-24 md:py-32 bg-stone-100">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-8">About Me</h1>
            <div className="prose prose-stone max-w-none w-full">
              <p className="text-lg text-stone-600 max-w-none">
                I&apos;m Braedan Chappel, an undergraduate Software Engineering student at the University of Guelph. I&apos;m
                committed to creating high-quality, efficient, and maintainable software. I strictly adhere to best
                practices, including code reviews, continuous development & integration, and automated testing.
                I&apos;m committed to continuous learning and staying updated with the latest and most advanced
                technologies. My ultimate goal is to deliver reliable software that meets the needs of users and stands
                the test of time.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-stone-800">Places I&apos;ve Been</h2>
            <div className="prose prose-stone max-w-none w-full mb-10">
              <p className="text-lg text-stone-600 max-w-none">
                A snapshot of countries and cities I&apos;ve visited over the years. Zoom in to see regional detail, or
                zoom out for the full picture.
              </p>
            </div>
            <TravelMapDynamic />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
