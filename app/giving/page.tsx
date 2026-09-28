import Footer from "../../src/components/Footer";
import Navbar from "../../src/components/Navbar";

const projects = [
  {
    number: "01",
    title: "Mikutano & Conferences",
    description:
      "Support special church meetings, conferences, crusades, evangelistic gatherings, and other events that help us proclaim the Gospel and strengthen believers.",
    icon: "calendar",
  },
  {
    number: "02",
    title: "Ujenzi wa Majengo",
    description:
      "Support the development of church buildings and ministry facilities that provide places for worship, discipleship, fellowship, evangelism, and community service.",
    icon: "building",
  },
];

function Icon({
  type,
  className = "h-7 w-7",
}: {
  type: string;
  className?: string;
}) {
  const base = `${className} fill-none stroke-current stroke-[1.8]`;

  if (type === "calendar") {
    return (
      <svg
        viewBox="0 0 24 24"
        className={base}
        aria-hidden="true"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="4" width="18" height="17" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
        <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" />
      </svg>
    );
  }

  if (type === "building") {
    return (
      <svg
        viewBox="0 0 24 24"
        className={base}
        aria-hidden="true"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 21h18" />
        <path d="M5 21V9l7-5 7 5v12" />
        <path d="M9 21v-6h6v6" />
        <path d="M9 10h6" />
        <path d="M12 7v3" />
      </svg>
    );
  }

  if (type === "heart") {
    return (
      <svg
        viewBox="0 0 24 24"
        className={base}
        aria-hidden="true"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78Z" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      className={base}
      aria-hidden="true"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2v20" />
      <path d="M17 5.5C16 4.5 14.5 4 12.5 4 10 4 8 5.5 8 7.5S10 11 12.5 11s4.5 1.5 4.5 3.5-2 3.5-4.5 3.5c-2 0-3.5-.5-4.5-1.5" />
    </svg>
  );
}

export default function GivingPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-blue-700 py-24 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border-[40px] border-white" />
          <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full border-[50px] border-white" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/20">
            <Icon type="heart" className="h-8 w-8" />
          </div>

          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.3em] text-blue-200">
            Giving &amp; Partnership
          </p>

          <h1 className="mt-5 text-5xl font-bold leading-tight md:text-6xl">
            Give With
            <span className="block text-blue-200">Purpose</span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100 md:text-xl">
            Support the vision, projects, conferences, and ministry work of
            Magomeni All Nations Christian Centre.
          </p>

          <a
            href="#projects"
            className="mt-8 inline-flex rounded-full bg-white px-8 py-3 font-semibold text-blue-950 transition hover:bg-blue-50"
          >
            View Projects
          </a>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
            Supporting the Vision
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
            Give Toward a Specific Purpose
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            This page is dedicated to project and ministry support. Choose an
            area you would like to support, then contact the church for the
            official payment instructions for that project.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="scroll-mt-20 bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
              Projects &amp; Special Support
            </p>

            <h2 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
              Choose What You Want to Support
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              Your contribution can be directed toward a specific church
              project or special ministry activity.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl md:p-10"
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-900">
                    <Icon type={project.icon} className="h-8 w-8" />
                  </div>

                  <span className="text-5xl font-black tracking-tight text-blue-100">
                    {project.number}
                  </span>
                </div>

                <h3 className="mt-8 text-2xl font-bold text-gray-900 md:text-3xl">
                  {project.title}
                </h3>

                <p className="mt-5 leading-8 text-gray-600">
                  {project.description}
                </p>

                {project.icon === "building" && (
                  <a
                    href="/church-building"
                    className="mt-7 inline-flex rounded-full bg-blue-950 px-6 py-3 font-semibold text-white transition hover:bg-blue-800"
                  >
                    View Building Project
                  </a>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How to Give */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-3xl bg-blue-950 p-8 text-white shadow-xl md:p-12">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-blue-100 ring-1 ring-white/10">
                <Icon type="heart" className="h-8 w-8" />
              </div>

              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                How to Support a Project
              </p>

              <h2 className="mt-3 text-4xl font-bold md:text-5xl">
                Simple, Clear &amp; Purposeful
              </h2>

              <p className="mx-auto mt-5 max-w-2xl leading-8 text-blue-100">
                Before making a project contribution, contact the church to
                receive the official payment details and instructions for the
                project you want to support.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              <div className="rounded-2xl bg-white/10 p-6 text-center ring-1 ring-white/10">
                <p className="text-3xl font-bold text-blue-200">01</p>
                <h3 className="mt-3 font-bold">Choose a Project</h3>
                <p className="mt-2 text-sm leading-6 text-blue-100">
                  Select conferences or church building support.
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-6 text-center ring-1 ring-white/10">
                <p className="text-3xl font-bold text-blue-200">02</p>
                <h3 className="mt-3 font-bold">Contact the Church</h3>
                <p className="mt-2 text-sm leading-6 text-blue-100">
                  Confirm the official payment details for your chosen project.
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-6 text-center ring-1 ring-white/10">
                <p className="text-3xl font-bold text-blue-200">03</p>
                <h3 className="mt-3 font-bold">Support the Vision</h3>
                <p className="mt-2 text-sm leading-6 text-blue-100">
                  Give toward the purpose you have selected.
                </p>
              </div>
            </div>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="/contact"
                className="inline-flex rounded-full bg-white px-8 py-3 font-semibold text-blue-950 transition hover:bg-blue-50"
              >
                Contact the Church
              </a>

              <a
                href="https://maps.app.goo.gl/hJgHKt52jVpDWHv87"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full border border-white/30 px-8 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Church */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-10 md:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
                Visit Us
              </p>

              <h2 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
                You Are Welcome at MANCC
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-600">
                If you would like to learn more about a project or support the
                church in person, visit Magomeni All Nations Christian Centre
                in Dar es Salaam.
              </p>

              <p className="mt-5 font-semibold text-gray-900">
                Magomeni, Dar es Salaam, Tanzania
              </p>

              <a
                href="https://maps.app.goo.gl/hJgHKt52jVpDWHv87"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex rounded-full bg-blue-950 px-7 py-3 font-semibold text-white transition hover:bg-blue-800"
              >
                Open Church Location
              </a>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-900">
                <Icon type="building" className="h-8 w-8" />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-gray-900">
                Magomeni All Nations Christian Centre
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                TAG Magomeni All Nations Christian Church
              </p>

              <a
                href="https://maps.app.goo.gl/hJgHKt52jVpDWHv87"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex text-sm font-bold text-blue-800 hover:text-blue-950"
              >
                View on Google Maps →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Scripture */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div
            className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-blue-900"
            aria-hidden="true"
          >
            <Icon type="heart" className="h-7 w-7" />
          </div>

          <blockquote className="mt-6 text-2xl font-semibold leading-10 text-gray-900 md:text-3xl">
            &ldquo;God loves a cheerful giver.&rdquo;
          </blockquote>

          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
            2 Corinthians 9:7
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
