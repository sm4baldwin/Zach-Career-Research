import Layout from "@/components/Layout";
import Card from "@/components/Card";

// This would typically come from a CMS, database, or bookmarks API
const essayList = [
  {
    id: 1,
    title: "The Art of Scientific Research",
    description:
      "An insightful guide on developing research methodologies and maintaining scientific rigor in investigative work.",
    author: "Dr. Jane Smith",
    date: "2024",
    category: "Research Methods",
    link: "https://example.com/research-guide",
    type: "Article",
  },
  {
    id: 2,
    title: "Modern Web Development Patterns",
    description:
      "Exploring contemporary approaches to building scalable, maintainable web applications with modern frameworks.",
    author: "John Developer",
    date: "2023",
    category: "Technology",
    link: "https://example.com/web-patterns",
    type: "Tutorial",
  },
  {
    id: 3,
    title: "Data-Driven Decision Making",
    description:
      "How organizations can leverage data analytics to make informed strategic decisions and improve outcomes.",
    author: "Analytics Institute",
    date: "2023",
    category: "Data Science",
    link: "https://example.com/data-decisions",
    type: "Paper",
  },
  {
    id: 4,
    title: "The Future of Academic Publishing",
    description:
      "Examining trends in scholarly communication and the evolution of academic publishing in the digital age.",
    author: "Prof. Academic",
    date: "2024",
    category: "Academia",
    link: "https://example.com/future-publishing",
    type: "Article",
  },
];

const categories = [
  "All",
  "Research Methods",
  "Technology",
  "Data Science",
  "Academia",
];

export default function Essays() {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Personal Essays
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A curated collection of school papers I didn&apos;t plagiarize or
            use AI to write.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors text-sm"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Reading List */}
        <section className="mb-12">
          <div className="grid lg:grid-cols-2 gap-6">
            {essayList.map((item) => (
              <Card
                key={item.id}
                title={item.title}
                description={item.description}
                link={item.link}
                date={item.date}
              >
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="text-sm text-gray-600">
                      By {item.author}
                    </span>
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${
                        item.type === "Article"
                          ? "bg-blue-100 text-blue-800"
                          : item.type === "Paper"
                          ? "bg-green-100 text-green-800"
                          : "bg-purple-100 text-purple-800"
                      }`}
                    >
                      {item.type}
                    </span>
                  </div>
                </div>
                <div className="mt-2">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                    {item.category}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Reading Notes */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Currently Reading
          </h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-lg font-medium text-gray-900">
                Curious George
              </h3>
              <p className="text-gray-600 text-sm mb-2">
                Currently exploring Chapter 1: The man in the Yellow Hat
              </p>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full"
                  style={{ width: "65%" }}
                ></div>
              </div>
              <p className="text-xs text-gray-500 mt-1">65% complete</p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="text-lg font-medium text-gray-900">Google.com</h3>
              <p className="text-gray-600 text-sm mb-2">
                Deep diving into every website ever made
              </p>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-green-600 h-2 rounded-full"
                  style={{ width: "40%" }}
                ></div>
              </div>
              <p className="text-xs text-gray-500 mt-1">40% complete</p>
            </div>
          </div>
        </section>

        {/* Recommendations */}
        <section className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Recommended Resources
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">
                Research & Academia
              </h3>
              <ul className="text-gray-600 space-y-2">
                <li>
                  •{" "}
                  <a href="#" className="hover:text-blue-600">
                    Nature Research Methods
                  </a>
                </li>
                <li>
                  •{" "}
                  <a href="#" className="hover:text-blue-600">
                    Journal of Research Practice
                  </a>
                </li>
                <li>
                  •{" "}
                  <a href="#" className="hover:text-blue-600">
                    Academic Writing Guidelines
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">
                Technology & Development
              </h3>
              <ul className="text-gray-600 space-y-2">
                <li>
                  •{" "}
                  <a href="#" className="hover:text-blue-600">
                    MDN Web Docs
                  </a>
                </li>
                <li>
                  •{" "}
                  <a href="#" className="hover:text-blue-600">
                    React Official Documentation
                  </a>
                </li>
                <li>
                  •{" "}
                  <a href="#" className="hover:text-blue-600">
                    TypeScript Handbook
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
