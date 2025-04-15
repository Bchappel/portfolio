# Portfolio Website

A minimalist portfolio website built with Next.js, Tailwind CSS, and shadcn/ui components.

## Features

- Welcome page with animated background paths
- Home page with featured projects
- Projects page with code snippets
- Resume page with downloadable PDF option
- Personal page with guitar collection and hobbies
- Responsive design for all screen sizes
- SF Pro Display font
- Dark mode support

## Installation

### Prerequisites

- Node.js 18.17.0 or later
- npm or yarn

### Setup

1. Clone the repository:
\`\`\`bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
# or
yarn
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
# or
yarn dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Customization

- Update your personal information in the files
- Replace placeholder images with your own
- Add your actual projects with code snippets
- Update your resume details
- Add your guitar collection with specifications

## Customizing Code Snippets

To replace the code snippets with your own:

1. Open the `data/projects-data.ts` file
2. Modify the `featuredProjects` and `allProjects` arrays with your own project information
3. For each project, update:
   - `title`: The name of your project
   - `description`: A brief description of what the project does
   - `tags`: Technologies used (these will be color-coded automatically)
   - `codeSnippet`: Your actual code snippet (can be any language)
   - `language`: The language of your code snippet (for syntax highlighting)
   - `link`: Where the project should link to

The code snippets will automatically be displayed with proper syntax highlighting on both the home page and projects page.

You can also add new projects by adding new objects to the arrays, or remove projects by deleting them from the arrays.
\`\`\`

## Building for Production

\`\`\`bash
npm run build
# or
yarn build
\`\`\`

## Deployment

This portfolio can be easily deployed to Vercel:

1. Push your code to a GitHub repository
2. Import the project in Vercel
3. Deploy

## Technologies Used

- Next.js 14
- React 18
- Tailwind CSS
- shadcn/ui components
- Lucide React icons
