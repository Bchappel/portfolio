"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Image from "next/image";

export default function WorkTermReportPage() {
	return (
		<div className="work-term-report min-h-screen bg-stone-50 flex flex-col">
			<style jsx global>{`
        /* Document-style headings for screen view */
        .work-term-report h1 {
          font-weight: 900 !important;
          color: #111827 !important;
          letter-spacing: -0.025em !important;
        }
        .work-term-report h2 {
          font-weight: 800 !important;
          color: #111827 !important;
          letter-spacing: -0.025em !important;
          margin-top: 1.5rem !important;
          margin-bottom: 0.75rem !important;
        }
        
        /* Print optimizations: fit within a single printed page */
        @media print {
          @page { margin: 0.5in; }
          body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
           h1 { font-size: 20px !important; margin-bottom: 6px !important; font-weight: 900 !important; color: #111827 !important; }
           h2 { font-size: 16px !important; margin: 12px 0 4px !important; font-weight: 800 !important; color: #111827 !important; }
          p { font-size: 12px !important; line-height: 1.45 !important; }
          .no-print { display: none !important; }
          header:first-of-type { display: none !important; }
          footer { display: none !important; }
          .prose { max-width: none !important; }
        }
      `}</style>

			<Navbar />

			<main className="flex-1 py-10">
				<div className="container mx-auto px-4">
					{/* Header */}
					<header className="mb-6">
						<h1 className="text-3xl md:text-4xl font-bold">Work Term Report — S25</h1>
						<p className="text-stone-600 mt-2">
							A reflective summary of my Adknown co-op term, highlighting my projects, goals, and learning.
						</p>
					</header>

					{/* Article */}
					<article
						className={[
							"prose prose-stone max-w-none bg-white p-6 md:p-8 rounded-lg shadow-sm border border-stone-200",
							// Force document-style heading styles
							"prose-headings:font-black prose-headings:text-gray-900",
							"prose-h1:font-black prose-h1:text-gray-900 prose-h1:tracking-tight",
							"prose-h2:font-extrabold prose-h2:text-gray-900 prose-h2:tracking-tight",
							"prose-p:text-gray-700 prose-p:leading-relaxed",
						].join(" ")}
					>
						{/* Introduction */}
						<h2>Introduction</h2>
						<p>
							From <strong>May 2025 to September 2025</strong>, I worked as a Software Engineering Intern at
							Adknown Inc. in Guelph, Ontario. My role balanced backend development with frontend feature
							work. I contributed to data pipelines and serverless infrastructure while also delivering
							user-facing tools like a product comparison feature and a price history chart.
						</p>

						{/* Employer */}
						<h2>About the Employer</h2>
						<p>
							Adknown is a Guelph-based online media company with a portfolio of advertisement-driven
							websites across many verticals. Its engineering team combines data-driven decision making with
							scalable infrastructure to create sustainable platforms and engaging user experiences. Working
							here exposed me to practical trade-offs between performance, product direction, and
							maintainability.
						</p>

						{/* Goals */}
						<h2>Goals</h2>
						<p>
							I set goals to deepen my experience with serverless cloud services, improve my full-stack
							development skills, and refine my ability to debug and maintain production systems. Over the
							term, I achieved these goals by alternating between infrastructure-focused projects that kept
							data reliable and feature-focused work that translated backend data into useful interfaces for
							users.
						</p>

						{/* Work Term Highlights */}
						<h2>Work Term Highlights</h2>
						<p>
							On the backend, I designed and maintained synchronization pipelines using{" "}
							<strong>AWS Lambda</strong>, written in Python and PHP (via Bref). These pipelines ingested
							and transformed external data before mapping it into product databases. I relied on AWS
							services such as Lambda, S3, and CloudWatch to handle storage, configuration, and
							monitoring. This work improved my understanding of schema design, indexing, and query
							optimization in MySQL and Postgres.
						</p>
						<p>
							On the frontend, I built an <strong>onsite product comparison tool</strong> that allowed
							visitors to compare key specifications across products, and a <strong>price history chart </strong>
							that visualized pricing trends. These features, developed with Laravel Blade, AlpineJS, and
							TailwindCSS, improved transparency and usability. They also reinforced the importance of
							presenting data clearly and responsively to match user expectations.
						</p>

						{/* Screenshots */}
						<div className="grid grid-cols-2 gap-4 my-4">
							<figure className="bg-stone-50 border border-stone-200 rounded-md p-2">
								<Image
									src="/images/CompanyLocation.jpg"
									alt="Company Office"
									width={600}
									height={350}
									className="rounded"
								/>
								<figcaption className="text-sm text-stone-600 mt-1">
									Company Office.
								</figcaption>
							</figure>
							<figure className="bg-stone-50 border border-stone-200 rounded-md p-2">
								<Image
									src="/images/CompanyRoom.jpg"
									alt="Company Break Room"
									width={600}
									height={350}
									className="rounded"
								/>
								<figcaption className="text-sm text-stone-600 mt-1">
									Company Break Room.
								</figcaption>
							</figure>
						</div>

						{/* Reflection */}
						<h2>Reflection</h2>
						<p>
							This term taught me to think about infrastructure and user impact together. A pipeline is not
							complete without observability, and a feature is not successful unless it answers real user
							needs. Moving between these perspectives helped me grow as a developer who can own projects
							from design through deployment.
						</p>
						<p>
							Looking ahead, I want to deepen observability (structured logs, traces, SLOs) and expand test
							coverage around data jobs, while continuing to polish UX where data drives decisions.
						</p>

						{/* Conclusion & Acknowledgments */}
						<h2>Conclusion &amp; Acknowledgments</h2>
						<p>
							Overall, I strengthened my skills in cloud infrastructure, full-stack development, and
							collaborative problem solving. I am grateful to my supervisor and teammates at Adknown for
							their mentorship and guidance. Their feedback helped me grow more confident and ship work that
							balanced system reliability with user-facing impact.
						</p>
					</article>
				</div>
			</main>

			{/* Leaving Footer as-is per your working version */}
			<Footer />
		</div>
	);
}
