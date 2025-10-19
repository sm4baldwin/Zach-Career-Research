import Layout from '@/components/Layout';
import Card from '@/components/Card';

// This would typically come from a CMS, database, or markdown files
const researchProjects = [
  {
    id: 1,
    title: "Sample Research Project",
    description: "A comprehensive study exploring innovative methodologies in [your field of interest]. This project demonstrates systematic analysis and data-driven insights.",
    date: "2024",
    status: "In Progress",
    tags: ["Research", "Analysis", "Methodology"]
  },
  {
    id: 2,
    title: "Another Research Initiative",
    description: "Investigation into [specific topic] with focus on practical applications and theoretical frameworks.",
    date: "2023",
    status: "Completed",
    tags: ["Theory", "Application", "Framework"]
  }
];

export default function Research() {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Research</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Exploring new frontiers through systematic investigation and analysis. 
            Here you&apos;ll find my current and completed research projects.
          </p>
        </div>

        {/* Current Research */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Current Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {researchProjects
              .filter(project => project.status === "In Progress")
              .map(project => (
                <Card
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  date={project.date}
                >
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4">
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full">
                      {project.status}
                    </span>
                  </div>
                </Card>
              ))}
          </div>
        </section>

        {/* Completed Research */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Completed Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {researchProjects
              .filter(project => project.status === "Completed")
              .map(project => (
                <Card
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  date={project.date}
                >
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4">
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                      {project.status}
                    </span>
                  </div>
                </Card>
              ))}
          </div>
        </section>

        {/* Research Interests */}
        <section className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Research Interests</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">Methodology</h3>
              <p className="text-gray-600">
                Developing and refining research methodologies for systematic investigation.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">Analysis</h3>
              <p className="text-gray-600">
                Data analysis techniques and their applications across various domains.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600">
                Exploring innovative approaches to solve complex research problems.
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}