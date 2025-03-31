export default function CallToAction() {
    return (
      <section className="text-center space-y-4">
        <h2 className="text-2xl font-semibold">Let’s Work Together</h2>
        <p className="text-gray-700">
          I’m open to freelance projects, contract roles, and collaborations.
          Let’s bring your vision to life.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="/resume.pdf"
            target="_blank"
            className="px-6 py-2 bg-yellow-500 text-white rounded-lg shadow hover:shadow-lg transition"
          >
            Download Resume
          </a>
          <a
            href="mailto:temwani@temwanimsiska.dev"
            className="px-6 py-2 border border-yellow-500 text-yellow-500 rounded-lg hover:bg-yellow-100 transition"
          >
            Contact Me
          </a>
        </div>
      </section>
    );
  }
  