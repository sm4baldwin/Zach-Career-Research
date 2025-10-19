import Layout from '@/components/Layout';

export default function Home() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Zach Avila</h1>
          <p className="text-xl text-gray-600 mb-8">
            Researcher, Developer, and Lifelong Learner
          </p>
          <div className="w-32 h-32 mx-auto mb-8">
            <img 
              src="/profile-photo.jpg" 
              alt="Zach Avila profile photo"
              className="w-full h-full object-cover rounded-full shadow-lg"
            />
          </div>
        </div>

        {/* About Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">About Me</h2>
          <div className="prose prose-lg text-gray-600 space-y-4">
            <p>
              Welcome to my personal portfolio. I&apos;m passionate about research, technology, and continuous learning.
              This space serves as a collection of my work, thoughts, and discoveries.
            </p>
            <p>
              My interests span across various domains including software development, research methodologies, 
              and exploring innovative solutions to complex problems. I believe in the power of knowledge sharing 
              and collaborative growth.
            </p>
            <p>
              Feel free to explore my research projects, development work, and curated reading materials. 
              I&apos;m always open to connecting with fellow researchers, developers, and curious minds.
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Research</h3>
            <p className="text-gray-600 mb-4">
              Explore my current and past research projects, methodologies, and findings.
            </p>
            <a href="/research" className="text-blue-600 hover:text-blue-800 font-medium">
              View Research →
            </a>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Projects</h3>
            <p className="text-gray-600 mb-4">
              Check out my development projects, tools, and technical experiments.
            </p>
            <a href="/projects" className="text-blue-600 hover:text-blue-800 font-medium">
              View Projects →
            </a>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Reading</h3>
            <p className="text-gray-600 mb-4">
              Discover my curated collection of insightful articles, papers, and resources.
            </p>
            <a href="/reading" className="text-blue-600 hover:text-blue-800 font-medium">
              Browse Reading →
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
