"use client";

import { Suspense } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Image from "next/image";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

// Separate S25 report content
function S25ReportContent() {
	return (
		<>
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
		</>
	);
}

// Separate F25 report content
function F25ReportContent() {
	return (
		<>
			{/* Header */}
			<header className="mb-6">
				<h1 className="text-3xl md:text-4xl font-bold">Work Term Report — F25</h1>
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
					During my <strong>Fall 2025</strong> co-op term at <strong>Adknown Inc.</strong> in Guelph,
					Ontario, I focused heavily on research-driven engineering work through a set of internal
					proof-of-concepts (POCs). My goal was to validate whether modern embedding-based retrieval
					could produce meaningful product recommendations and requirement matching without relying on
					traditional training data. This term strengthened my ability to translate vague product ideas
					into testable systems with measurable outcomes.
				</p>

				{/* Employer */}
				<h2>About the Employer</h2>
				<p>
					Adknown is a Guelph-based online media company that builds and operates a portfolio of
					advertisement-driven websites across many verticals. The company values experimentation and
					iterative product development, which created an environment where POCs could be evaluated
					quickly and objectively. Working in this setting taught me how to balance curiosity and speed
					with the discipline needed to produce reliable conclusions and reusable internal tooling.
				</p>

				{/* Goals */}
				<h2>Goals</h2>
				<p>
					My primary goals were to deepen my understanding of information retrieval systems, become more
					comfortable designing experiments around uncertain outcomes, and improve how I communicate
					results to both technical and non-technical stakeholders. I also wanted to strengthen my
					serverless development skills by building prototypes that could run on cloud infrastructure
					rather than remaining as local scripts. By the end of the term, I improved in all of these
					areas by delivering complete POCs that included implementation, evaluation, and clear
					write-ups of trade-offs and next steps.
				</p>

				{/* Work Term Highlights */}
				<h2>Work Term Highlights</h2>
				<p>
					The most impactful work I contributed was a semantic retrieval POC that explored how dense text
					embeddings can power product-to-product recommendations. I built a pipeline that transformed
					raw product content into a combined text representation, generated embeddings using a managed
					model provider, and indexed vectors into a search backend configured for approximate nearest
					neighbor (ANN) retrieval. I then evaluated whether the nearest results were genuinely similar
					in function and specification rather than simply matching brand names or titles.
				</p>
				<p>
					In addition to retrieval quality, I focused on the practical engineering details required to
					make these systems dependable: deduplicating product variants to avoid biased indexing,
					establishing consistent metadata mappings, and adding logging and monitoring to make runs
					auditable. The term reinforced that POCs are only useful when they are reproducible and when
					results can be explained clearly. Even when outcomes are uncertain, building a clean pipeline
					and evaluation process ensures the work remains valuable for future iterations.
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
						<figcaption className="text-sm text-stone-600 mt-1">Company Office.</figcaption>
					</figure>
					<figure className="bg-stone-50 border border-stone-200 rounded-md p-2">
						<Image
							src="/images/CompanyRoom.jpg"
							alt="Company Break Room"
							width={600}
							height={350}
							className="rounded"
						/>
						<figcaption className="text-sm text-stone-600 mt-1">Company Break Room.</figcaption>
					</figure>
				</div>

				{/* Reflection */}
				<h2>Reflection</h2>
				<p>
					This term helped me mature as an engineer because the success criteria were not “ship a feature”
					but “prove or disprove an idea.” I learned to treat experimentation as a disciplined process:
					define a hypothesis, build the smallest complete system that can test it, and evaluate results
					with clear criteria. I also gained a better appreciation for how quickly “demo-ready” systems can
					become fragile if they lack observability, consistent data assumptions, and documentation.
				</p>
				<p>
					Looking forward, I want to improve how I measure retrieval quality beyond anecdotal checks by
					introducing more systematic evaluation methods (curated test cases, scoring rubrics, and
					baseline comparisons). I also want to expand reliability in prototype pipelines by increasing
					automated tests and standardizing run outputs so results remain easy to compare across iterations.
				</p>

				{/* Conclusion & Acknowledgments */}
				<h2>Conclusion &amp; Acknowledgments</h2>
				<p>
					Overall, this work term strengthened my ability to build experimental systems end-to-end and to
					communicate results in a way that supports real product decisions. I’m grateful to my supervisor
					and teammates at Adknown for their guidance and for giving me the autonomy to explore complex
					problems while still holding a high standard for clarity and rigor. The experience left me more
					confident in my ability to take uncertain problems and turn them into concrete engineering outcomes.
				</p>
			</article>
		</>
	);
}

// Component that uses useSearchParams - must be wrapped in Suspense
function WorkTermReportTabs() {
	const searchParams = useSearchParams();
	const router = useRouter();
	const pathname = usePathname();
	
	// Get the tab from URL, default to "s25"
	const activeTab = searchParams.get("tab") || "s25";
	const normalizedTab = activeTab.toLowerCase() === "f25" ? "f25" : "s25";

	const handleTabChange = (value: string) => {
		const params = new URLSearchParams(searchParams.toString());
		params.set("tab", value);
		router.push(`${pathname}?${params.toString()}`);
	};

	return (
		<Tabs value={normalizedTab} onValueChange={handleTabChange} className="w-full">
			<TabsList className="mb-6">
				<TabsTrigger value="s25">S25</TabsTrigger>
				<TabsTrigger value="f25">F25</TabsTrigger>
			</TabsList>

			<TabsContent value="s25">
				<S25ReportContent />
			</TabsContent>

			<TabsContent value="f25">
				<F25ReportContent />
			</TabsContent>
		</Tabs>
	);
}

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
					<Suspense fallback={<div className="text-center py-8">Loading...</div>}>
						<WorkTermReportTabs />
					</Suspense>
				</div>
			</main>

			<Footer />
		</div>
	);
}
