import Layout from '@/components/Layout';
import Card from '@/components/Card';

// This would typically come from a CMS, database, or API
const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features a clean design and extensible architecture.",
    date: "2024",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase"],
    link: "https://github.com/zachavila/portfolio",
    status: "Active"
  },
  {
    id: 2,
    title: "Data Analysis Tool",
    description: "A comprehensive tool for data visualization and analysis, designed to streamline research workflows and generate insights.",
    date: "2023",
    technologies: ["Python", "Pandas", "Matplotlib", "Jupyter"],
    link: "https://github.com/zachavila/data-tool",
    status: "Completed"
  },
  {
    id: 3,
    title: "Research Management System",
    description: "A web application for managing research projects, tracking progress, and organizing academic resources.",
    date: "2023",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    status: "In Development"
  }
];

export default function Projects() {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Projects</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A collection of my development projects, tools, and technical experiments. 
            Each project represents a learning journey and problem-solving approach.
          </p>
        </div>

        {/* Featured Projects */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Featured Projects</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map(project => (
              <Card
                key={project.id}
                title={project.title}
                description={project.description}
                date={project.date}
                link={project.link}
              >
                <div className="mt-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map(tech => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-4">
                  <span className={`px-3 py-1 text-sm rounded-full ${
                    project.status === 'Active' 
                      ? 'bg-green-100 text-green-800'
                      : project.status === 'Completed'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Technical Skills */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Technical Skills</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">Frontend</h3>
              <ul className="text-gray-600 space-y-1">
                <li>React/Next.js</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
                <li>HTML/CSS</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">Backend</h3>
              <ul className="text-gray-600 space-y-1">
                <li>Node.js</li>
                <li>Python</li>
                <li>Express.js</li>
                <li>RESTful APIs</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">Database</h3>
              <ul className="text-gray-600 space-y-1">
                <li>MongoDB</li>
                <li>PostgreSQL</li>
                <li>Firebase</li>
                <li>SQL</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">Tools</h3>
              <ul className="text-gray-600 space-y-1">
                <li>Git/GitHub</li>
                <li>Docker</li>
                <li>VS Code</li>
                <li>Jupyter</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Open Source Contributions */}
        <section className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Open Source & Collaboration</h2>
          <p className="text-gray-600 mb-4">
            I believe in the power of open source software and collaborative development. 
            While building personal projects, I also contribute to the broader developer community.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="https://github.com/zachavila" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors"
            >
              View GitHub Profile →
            </a>
            <a 
              href="mailto:contact@zachavila.com" 
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Get In Touch →
            </a>
          </div>
        </section>
      </div>
    </Layout>
  );
}