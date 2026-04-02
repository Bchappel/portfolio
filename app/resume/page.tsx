import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { LanguageTag } from "@/components/language-tag"
import { sortSkillLabelsByColorFamily } from "@/lib/language-tag-styles"

const programmingLanguages = [
  "C/C++",
  "C#",
  "Python",
  "PHP",
  "Java",
  "HTML",
  "JavaScript",
  "CSS",
  "SQL",
  "TypeScript",
  "Visual Basic",
  "R",
  "Swift",
] as const

const frameworksAndTools = [
  "GitHub",
  "AWS",
  "Vercel",
  "BitBucket",
  ".NET Core",
  "Laravel MVC",
  "WSL/Linux",
  "Flutter",
  "React",
  "Next.js",
  "Node.js",
  "Unity",
  "GNU CC",
] as const

const projectManagementSkills = [
  "Agile",
  "Scrum",
  "CD/CI",
  "SDLC",
  "Data Analysis",
  "Time Management",
  "Risk Management",
] as const

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
                  <div className="mb-1">
                    <h3 className="font-medium text-lg">Software Engineering Intern</h3>
                  </div>
                  <div className="mb-2 flex flex-wrap items-baseline gap-x-2 text-stone-600">
                    <span>CoShopper (Subsidiary of Adknown Inc.)</span>
                    <span className="text-stone-500">March 2026 – Present</span>
                  </div>
                  <ul className="space-y-2 pl-8 text-stone-600">
                    <li className="flex items-start">
                      <span
                        className="mt-[0.65em] mr-2 inline-block size-1.5 shrink-0 rounded-none bg-stone-500"
                        aria-hidden
                      />
                      <span>
                        Designed and evaluated multiple proof-of-concept recommendation architectures, comparing
                        embedding providers, similarity metrics, and retrieval strategies to assess recommendation quality
                        without supervised training data.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span
                        className="mt-[0.65em] mr-2 inline-block size-1.5 shrink-0 rounded-none bg-stone-500"
                        aria-hidden
                      />
                      <span>
                        Built and deployed vector indexing and ANN search pipelines in AWS OpenSearch (HNSW), enabling
                        low-latency semantic retrieval over large product catalogs with deduplicated variants.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span
                        className="mt-[0.65em] mr-2 inline-block size-1.5 shrink-0 rounded-none bg-stone-500"
                        aria-hidden
                      />
                      <span>
                        Implemented and benchmarked ML-based recommendation models using NVIDIA Merlin, exploring
                        embedding-based user–item representations, feature engineering workflows, and GPU-accelerated
                        training at scale.
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <div className="mb-1">
                    <h3 className="font-medium text-lg">Software Engineering Intern</h3>
                  </div>
                  <div className="mb-2 flex flex-wrap items-baseline gap-x-2 text-stone-600">
                    <span>Adknown Inc.</span>
                    <span className="text-stone-500">September 2024 – March 2026</span>
                  </div>
                  <ul className="space-y-2 pl-8 text-stone-600">
                    <li className="flex items-start">
                      <span
                        className="mt-[0.65em] mr-2 inline-block size-1.5 shrink-0 rounded-none bg-stone-500"
                        aria-hidden
                      />
                      <span>
                        Designed and developed an ecommerce comparison and review aggregation platform using the Laravel
                        MVC framework by integrating PHP, Tailwind CSS, and Alpine.js into modular Blade templates for
                        responsive, performant front-end delivery.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span
                        className="mt-[0.65em] mr-2 inline-block size-1.5 shrink-0 rounded-none bg-stone-500"
                        aria-hidden
                      />
                      <span>
                        Architected and configured AWS infrastructure such as EC2, Elastic Beanstalk, CloudFront, and S3
                        environments, and implemented Bitbucket CI/CD pipelines for seamless deployment, scalability,
                        and versioned staging/production parity.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span
                        className="mt-[0.65em] mr-2 inline-block size-1.5 shrink-0 rounded-none bg-stone-500"
                        aria-hidden
                      />
                      <span>
                        Optimized MySQL database schemas for product and brand data, applying indexing, eager loading,
                        and Laravel Eloquent ORM design patterns to significantly improve query performance and API
                        responsiveness.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span
                        className="mt-[0.65em] mr-2 inline-block size-1.5 shrink-0 rounded-none bg-stone-500"
                        aria-hidden
                      />
                      <span>
                        Developed and maintained AWS Lambda services for data extraction, scheduled sync tasks, and
                        image-processing jobs; designed an internal scheduling framework to coordinate Lambda executions
                        and maintain data consistency.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span
                        className="mt-[0.65em] mr-2 inline-block size-1.5 shrink-0 rounded-none bg-stone-500"
                        aria-hidden
                      />
                      <span>
                        Built a custom API layer powering dynamic product comparison, search filters, and a real-time
                        recommendation engine; implemented front-end interactivity entirely within Alpine.js for a
                        lightweight and reactive UX.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span
                        className="mt-[0.65em] mr-2 inline-block size-1.5 shrink-0 rounded-none bg-stone-500"
                        aria-hidden
                      />
                      <span>
                        Created an onsite AI chatbot interface integrated with AWS Bedrock and LangChain, enabling
                        natural-language product queries via a Neptune-backed RDF graph and SPARQL retrieval, including
                        custom frontend widget design and API integration.
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <div className="mb-1">
                    <h3 className="font-medium text-lg">Software Engineering Intern</h3>
                  </div>
                  <div className="mb-2 flex flex-wrap items-baseline gap-x-2 text-stone-600">
                    <span>NovaTox Inc.</span>
                    <span className="text-stone-500">April 2023 – September 2023</span>
                  </div>
                  <ul className="space-y-2 pl-8 text-stone-600">
                    <li className="flex items-start">
                      <span
                        className="mt-[0.65em] mr-2 inline-block size-1.5 shrink-0 rounded-none bg-stone-500"
                        aria-hidden
                      />
                      <span>
                        Assisted in designing and documenting a robust Java-based API and software system for modeling
                        equations used in environmental risk assessments.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span
                        className="mt-[0.65em] mr-2 inline-block size-1.5 shrink-0 rounded-none bg-stone-500"
                        aria-hidden
                      />
                      <span>
                        Contributed to code reviews, unit and integration testing employing JUnit to ensure reliable
                        function.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <hr className="border-stone-200 my-8" />

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-stone-800">Education</h2>
              <div>
                <div className="mb-1">
                  <h3 className="font-medium text-lg">Bachelor of Computing, Software Engineering</h3>
                  <span className="text-stone-500 block">2022 - Present</span>
                </div>
                <div className="text-stone-600">University of Guelph</div>
                <ul className="mt-2 space-y-2 pl-8 text-stone-600">
                  <li className="flex items-start">
                    <span
                      className="mt-[0.65em] mr-2 inline-block size-1.5 shrink-0 rounded-none bg-stone-500"
                      aria-hidden
                    />
                    <span>Minoring in Project Management.</span>
                  </li>
                  <li className="flex items-start">
                    <span
                      className="mt-[0.65em] mr-2 inline-block size-1.5 shrink-0 rounded-none bg-stone-500"
                      aria-hidden
                    />
                    <span>
                      Relevant coursework: Data Structures, Algorithms, Web Development, Mobile Development, Micro
                      Computing.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span
                      className="mt-[0.65em] mr-2 inline-block size-1.5 shrink-0 rounded-none bg-stone-500"
                      aria-hidden
                    />
                    <span>College of Engineering & Physical Sciences Dean's Honours List.</span>
                  </li>
                </ul>
              </div>
            </section>

            <hr className="border-stone-200 my-8" />

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-stone-800">Skills</h2>

              {/* Programming Languages - full width */}
              <div className="mb-6">
                <h3 className="font-medium mb-2">Programming Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {sortSkillLabelsByColorFamily(programmingLanguages).map((skill) => (
                    <LanguageTag key={skill} language={skill} />
                  ))}
                </div>
              </div>

              <hr className="border-stone-200 my-4" />

              {/* Frameworks & Tools + Project Management - stay side by side */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-medium mb-2">Frameworks & Tools</h3>
                  <div className="flex flex-wrap gap-2">
                    {sortSkillLabelsByColorFamily(frameworksAndTools).map((skill) => (
                      <LanguageTag key={skill} language={skill} />
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Project Management Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {sortSkillLabelsByColorFamily(projectManagementSkills).map((skill) => (
                      <LanguageTag key={skill} language={skill} />
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
