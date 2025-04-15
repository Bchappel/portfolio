import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-stone-50 flex flex-col">
      <Navbar />
      <main className="flex-1 py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold">Resume</h1>
            <Button className="bg-stone-800 hover:bg-stone-900">
              <Download className="mr-2 h-4 w-4" /> Download PDF
            </Button>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm border border-stone-200">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-stone-800">Experience</h2>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-1">
                    <h3 className="font-medium text-lg">Senior Developer</h3>
                    <span className="text-stone-500">2020 - Present</span>
                  </div>
                  <div className="text-stone-600 mb-2">Company Name</div>
                  <ul className="space-y-2 text-stone-600">
                    <li className="flex items-start">
                      {/* Updated bullet point style */}
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-stone-500 mt-[0.65em] mr-2 flex-shrink-0"></span>
                      <span>Led development of key features and mentored junior developers</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-stone-500 mt-[0.65em] mr-2 flex-shrink-0"></span>
                      <span>Implemented CI/CD pipelines for automated testing and deployment</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-stone-500 mt-[0.65em] mr-2 flex-shrink-0"></span>
                      <span>Improved code quality through automated testing and code reviews</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <h3 className="font-medium text-lg">Web Developer</h3>
                    <span className="text-stone-500">2017 - 2020</span>
                  </div>
                  <div className="text-stone-600 mb-2">Previous Company</div>
                  <ul className="space-y-2 text-stone-600">
                    <li className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-stone-500 mt-[0.65em] mr-2 flex-shrink-0"></span>
                      <span>Developed responsive web applications using React and Node.js</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-stone-500 mt-[0.65em] mr-2 flex-shrink-0"></span>
                      <span>Collaborated with designers to implement user interfaces</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-stone-500 mt-[0.65em] mr-2 flex-shrink-0"></span>
                      <span>Optimized application performance and improved user experience</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <hr className="border-stone-200 my-8" />

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-stone-800">Education</h2>
              <div>
                <div className="flex justify-between mb-1">
                  <h3 className="font-medium text-lg">Bachelor of Science in Computer Science</h3>
                  <span className="text-stone-500">2013 - 2017</span>
                </div>
                <div className="text-stone-600">University Name</div>
                <ul className="mt-2 space-y-2 text-stone-600">
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-stone-500 mt-[0.65em] mr-2 flex-shrink-0"></span>
                    <span>GPA: 3.8/4.0</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-stone-500 mt-[0.65em] mr-2 flex-shrink-0"></span>
                    <span>Relevant coursework: Data Structures, Algorithms, Web Development</span>
                  </li>
                </ul>
              </div>
            </section>

            <hr className="border-stone-200 my-8" />

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-stone-800">Skills</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-medium mb-2">Programming Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    {["JavaScript", "TypeScript", "HTML/CSS", "Python", "Java", "C++"].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-stone-100 text-stone-700 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <hr className="col-span-2 border-stone-200 my-4" />

                <div>
                  <h3 className="font-medium mb-2">Frameworks & Tools</h3>
                  <div className="flex flex-wrap gap-2">
                    {["React", "Next.js", "Node.js", "Express", "Git", "GitHub", "AWS", "Vercel"].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-stone-100 text-stone-700 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
