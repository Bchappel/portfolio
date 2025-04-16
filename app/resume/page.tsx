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
            {/* <Button className="bg-stone-800 hover:bg-stone-900">
              <Download className="mr-2 h-4 w-4" /> Download PDF
            </Button> */}
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm border border-stone-200">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-stone-800">Work Experience</h2>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-1">
                    <h3 className="font-medium text-lg">Software Enginering Intern</h3>
                    <span className="text-stone-500">September 2024 - Present</span>
                  </div>
                  <div className="text-stone-600 mb-2">Adknown Inc.</div>
                  <ul className="space-y-2 text-stone-600">
                    <li className="flex items-start">
                      {/* Updated bullet point style */}
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-stone-500 mt-[0.65em] mr-2 flex-shrink-0"></span>
                      <span>Designed and developed a website for household products using the Laravel MVC (Model-View-Controller) framework, integrated PHP, Tailwind CSS, and JavaScript (Alpine.js) into blade (HTML) templates.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-stone-500 mt-[0.65em] mr-2 flex-shrink-0"></span>
                      <span>Configured staging and production environments leveraging AWS services, including EC2, Elastic Beanstalk, CloudFront, and S3, to ensure scalability and load balancing as well as configuring CD/CI pipelines and deployment.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-stone-500 mt-[0.65em] mr-2 flex-shrink-0"></span>
                      <span>Engineered optimized MySQL database schemas using Laravel's Eloquent ORM (Object Relational Mapper) for products and brands to enhance query performance and streamline site data access.</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <h3 className="font-medium text-lg">Software Engineering Intern</h3>
                    <span className="text-stone-500">April 2023 - September 2023</span>
                  </div>
                  <div className="text-stone-600 mb-2">NovaTox Inc.</div>
                  <ul className="space-y-2 text-stone-600">
                    <li className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-stone-500 mt-[0.65em] mr-2 flex-shrink-0"></span>
                      <span>Contributed to developing and documenting an extensive in-house API and software suite using Java to model equations pertinent for conducting environmental risk assessments.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-stone-500 mt-[0.65em] mr-2 flex-shrink-0"></span>
                      <span>Engaged in Agile methodologies by participating in sprints and stand-ups to meet project objectives within deadlines.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-stone-500 mt-[0.65em] mr-2 flex-shrink-0"></span>
                      <span>Contributed to code reviews, comprehensive unit and integration testing employing JUnit to ensure reliable function.</span>
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
                  <h3 className="font-medium text-lg">Bachelor of Computing in Software Engineering</h3>
                  <span className="text-stone-500">2022 - Present</span>
                </div>
                <div className="text-stone-600">University of Guelph</div>
                <ul className="mt-2 space-y-2 text-stone-600">
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-stone-500 mt-[0.65em] mr-2 flex-shrink-0"></span>
                    <span>Minoring in Project Management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-stone-500 mt-[0.65em] mr-2 flex-shrink-0"></span>
                    <span>Relevant coursework: Data Structures, Algorithms, Web Development, Mobile Development, Micro Computing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-stone-500 mt-[0.65em] mr-2 flex-shrink-0"></span>
                    <span>College of Engineering & Physical Sciences Dean's Honours List.</span>
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
                    {["C/C++", "C#", "Python", "PHP", "Java", "HTML", "JavaScript", "CSS", "SQL", "TypeScript", "Visual Basic", "R", "Swift"].map((skill) => (
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
                    {["GitHub", "AWS", "Vercel", "BitBucket",".NET Core","Laravel MVC","WSL/Linux","Flutter","React", "Next.js", "Node.js", "Unity", "GNU CC"].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-stone-100 text-stone-700 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Project Management Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Agile", "Scrum", "Requirment Managment", "CD/CI","SDLC","Data Analysis","Time Manangement","Risk Management"].map((skill) => (
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
