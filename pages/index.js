export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-yellow-400 to-white text-white flex items-center justify-center p-8">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Hi, I’m Temwani 👋</h1>
        <p className="text-lg sm:text-xl mb-6">
          Full Stack Developer | React | Next.js | Tailwind CSS | TypeScript | Django | Node.js
        </p>
        <p className="text-md sm:text-lg mb-8">
          My portfolio is coming soon. In the meantime, feel free to connect with me below.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="mailto:temwani.msiska@gmail.com.com"
            className="bg-white text-blue-700 px-5 py-2 rounded-full font-semibold hover:bg-gray-100 transition"
          >
            Email Me
          </a>
          <a
            href="https://www.linkedin.com/in/temwani-msiska-3640a827b/"
            target="_blank"
            className="bg-white text-blue-700 px-5 py-2 rounded-full font-semibold hover:bg-gray-100 transition"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </main>
  );
}
