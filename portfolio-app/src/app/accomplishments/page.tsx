import Layout from "@/components/Layout";
import Card from "@/components/Card";

// This would typically come from a CMS, database, or markdown files
const accomplishments = [
  {
    id: 1,
    title: "Taking the PSATs seriously",
    description:
      "I am studying for the PSATs on Friday and will totally do so well, I mean you don't have close to an IDEA how good I'll do",
    date: "2025",
    status: "In Progress",
    tags: ["Study", "College-Prep", "Successsssss"],
  },
  {
    id: 2,
    title: "I do the dishes alllll the time",
    description:
      "Investigation into the impact of household chores on personal responsibility and time management.",
    date: "2023-2025",
    status: "Completed",
    tags: ["Chores", "Easy", "#AlwaysWinning"],
  },
];

export default function Accomplishments() {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Accomplishments
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Zach, you need to update this with stuff. IDK what you have done.
          </p>
        </div>

        {/* Current Research */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Currently Crushing
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {accomplishments
              .filter(
                (accomplishment) => accomplishment.status === "In Progress"
              )
              .map((accomplishment) => (
                <Card
                  key={accomplishment.id}
                  title={accomplishment.title}
                  description={accomplishment.description}
                  date={accomplishment.date}
                >
                  <div className="flex flex-wrap gap-2 mt-4">
                    {accomplishment.tags.map((tag) => (
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
                      {accomplishment.status}
                    </span>
                  </div>
                </Card>
              ))}
          </div>
        </section>

        {/* Completed Research */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Reasons why I&apos;m so coolio doolio
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {accomplishments
              .filter((accomplishment) => accomplishment.status === "Completed")
              .map((accomplishment) => (
                <Card
                  key={accomplishment.id}
                  title={accomplishment.title}
                  description={accomplishment.description}
                  date={accomplishment.date}
                >
                  <div className="flex flex-wrap gap-2 mt-4">
                    {accomplishment.tags.map((tag) => (
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
                      {accomplishment.status}
                    </span>
                  </div>
                </Card>
              ))}
          </div>
        </section>

        {/* Research Interests */}
        <section className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Things people have said about me
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">
                Praise and Adulation
              </h3>
              <p className="text-gray-600">
                &quot;OH MY GOSHHHH!! ZACHY YOU ARE THE BESTTTTTT!!!!!&quot; -
                my classmates
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">
                Concerns
              </h3>
              <p className="text-gray-600">
                &quot;That kid... He worries me. Always studying, always working
                hard. Never an ounce of self-interest. Too perfect to be
                true.&quot; - my teachers
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">
                Hard Data
              </h3>
              <p className="text-gray-600">
                &quot;He has never beaten me at anything. Not once. I don&apos;t
                know how he does it.&quot; - Stephen, Brother-In-Law
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
