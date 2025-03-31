'use client';

export default function CallToAction() {
  return (
    <section className="text-center space-y-6 py-16 px-4 bg-white/10 backdrop-blur-sm rounded-xl max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-white">
        Let’s Work Together
      </h2>

      <p className="text-white/80 text-lg max-w-xl mx-auto leading-relaxed">
        I’m open to freelance projects, contract roles, and long-term collaborations.
        Let’s bring your next idea to life with clean, scalable code.
      </p>

      <div className="flex justify-center flex-wrap gap-4 pt-4">
        <a
          href="/resume.pdf"
          target="_blank"
          className="px-6 py-3 rounded-lg bg-yellow-500 text-white font-semibold shadow-md hover:shadow-lg hover:bg-yellow-400 transition duration-300"
        >
          Download Resume
        </a>

        <a
          href="mailto:contact@temwanimsiska.dev"
          className="px-6 py-3 rounded-lg border border-yellow-500 text-yellow-500 font-semibold hover:bg-yellow-100 hover:text-yellow-700 transition duration-300"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}
