import Layout from '@/components/Layout';

export default function Home() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Zachary Avila</h1>
          <p className="text-xl text-gray-600 mb-8">
            Student, Athlete, and Anthropomorphic Lamppost
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
              Welcome to my personal portfolio. I&apos;m passionate about personal growth and integrity, the future of technology, and continuous challenging myself.
              This space serves as a collection of my accomplishments, thoughts, and side-projects.
            </p>
            <p>
              My interests span across various domains including small business endeavors, the use-cases of AI in news, 
              and NFL player stats and trends. I believe learning from mentors, while owning responsibility of my own future. Success is better when shared!
            </p>
            <p>
              Feel free to explore my projects, essays, and other personally meaningful content. 
              I&apos;m always open to connecting with and learning from like-minded students, experienced entrepreneurs, or fellow Cowboys fans!
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Accomplishments</h3>
            <p className="text-gray-600 mb-4">
              Admire my incredible successes, and see all the nice things people have said about me! (Thankns mom!)
            </p>
            <a href="/accomplishments" className="text-blue-600 hover:text-blue-800 font-medium">
              View Accomplishments →
            </a>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Projects</h3>
            <p className="text-gray-600 mb-4">
              Check out my essays and thoughts. Mostly rants about football.
            </p>
            <a href="/reading" className="text-blue-600 hover:text-blue-800 font-medium">
              View Essays →
            </a>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Reading</h3>
            <p className="text-gray-600 mb-4">
              Explore my current and past school projects, personal research, and small side-gigs.
            </p>
            <a href="/projects" className="text-blue-600 hover:text-blue-800 font-medium">
              Explore Projects →
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
