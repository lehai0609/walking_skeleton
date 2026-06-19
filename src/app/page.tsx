export default function Home() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      {/* Header */}
      <section className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">TODO: Your Name</h1>
        <p className="text-lg text-gray-600 mt-1">TODO: Your Title / Role</p>
        <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-500">
          <a href="mailto:todo@example.com" className="hover:text-gray-800">todo@example.com</a>
          <a href="https://github.com/todo" className="hover:text-gray-800">GitHub</a>
          <a href="https://linkedin.com/in/todo" className="hover:text-gray-800">LinkedIn</a>
          <span>TODO: Location</span>
        </div>
      </section>

      {/* Summary */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold border-b border-gray-200 pb-1 mb-3">Summary</h2>
        <p className="text-gray-700 leading-relaxed">
          TODO: One paragraph summary of your background, expertise, and what you&apos;re looking for.
        </p>
      </section>

      {/* Experience */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold border-b border-gray-200 pb-1 mb-4">Experience</h2>

        <div className="mb-5">
          <div className="flex justify-between items-baseline">
            <span className="font-medium">TODO: Company Name</span>
            <span className="text-sm text-gray-500">TODO: Mon YYYY – Mon YYYY</span>
          </div>
          <p className="text-sm text-gray-600 mb-2">TODO: Role / Title</p>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            <li>TODO: Key achievement or responsibility</li>
            <li>TODO: Key achievement or responsibility</li>
          </ul>
        </div>

        <div className="mb-5">
          <div className="flex justify-between items-baseline">
            <span className="font-medium">TODO: Company Name</span>
            <span className="text-sm text-gray-500">TODO: Mon YYYY – Mon YYYY</span>
          </div>
          <p className="text-sm text-gray-600 mb-2">TODO: Role / Title</p>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            <li>TODO: Key achievement or responsibility</li>
            <li>TODO: Key achievement or responsibility</li>
          </ul>
        </div>

        <div>
          <div className="flex justify-between items-baseline">
            <span className="font-medium">TODO: Company Name</span>
            <span className="text-sm text-gray-500">TODO: Mon YYYY – Mon YYYY</span>
          </div>
          <p className="text-sm text-gray-600 mb-2">TODO: Role / Title</p>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            <li>TODO: Key achievement or responsibility</li>
            <li>TODO: Key achievement or responsibility</li>
          </ul>
        </div>
      </section>

      {/* Education */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold border-b border-gray-200 pb-1 mb-4">Education</h2>

        <div className="mb-4">
          <div className="flex justify-between items-baseline">
            <span className="font-medium">TODO: University Name</span>
            <span className="text-sm text-gray-500">TODO: YYYY – YYYY</span>
          </div>
          <p className="text-sm text-gray-600">TODO: Degree, Major</p>
        </div>

        <div>
          <div className="flex justify-between items-baseline">
            <span className="font-medium">TODO: University / Course Name</span>
            <span className="text-sm text-gray-500">TODO: YYYY – YYYY</span>
          </div>
          <p className="text-sm text-gray-600">TODO: Degree / Certification, Major</p>
        </div>
      </section>

      {/* Skills */}
      <section>
        <h2 className="text-xl font-semibold border-b border-gray-200 pb-1 mb-3">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {[
            "TODO: Skill 1",
            "TODO: Skill 2",
            "TODO: Skill 3",
            "TODO: Skill 4",
            "TODO: Skill 5",
            "TODO: Skill 6",
          ].map((skill) => (
            <span
              key={skill}
              className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    </main>
  );
}
