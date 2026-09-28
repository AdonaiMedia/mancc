import Footer from "../../src/components/Footer";
import Navbar from "../../src/components/Navbar";

const annualTargetTzs = 60000000;
const churchTargetTzs = 15000000;

const annualTargetUsd = 22680;
const churchTargetUsd = 5670;

const projects = [
  {
    number: "01",
    title: "Church Building Project 01",
    description:
      "A permanent church building for a community where ministry and Christian meetings are taking place without a dedicated church facility.",
  },
  {
    number: "02",
    title: "Church Building Project 02",
    description:
      "A church building project designed to provide a permanent place for worship, discipleship, evangelism, fellowship, and community service.",
  },
  {
    number: "03",
    title: "Church Building Project 03",
    description:
      "A permanent place of worship that will help strengthen the work of the church and provide space for spiritual growth and community ministry.",
  },
  {
    number: "04",
    title: "Church Building Project 04",
    description:
      "The fourth church building project within our annual goal of establishing four permanent church buildings in communities where they are needed.",
  },
];

function ImpactIcon({ type }: { type: string }) {
  if (type === "church") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-7 w-7"
        aria-hidden="true"
      >
        <path d="M3 21h18M5 21V9l7-5 7 5v12" />
        <path d="M9 21v-6h6v6M9 10h6M12 7v3" />
      </svg>
    );
  }

  if (type === "book") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-7 w-7"
        aria-hidden="true"
      >
        <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5v-16Z" />
        <path d="M4 5.5v16M8 7h8M8 11h8M8 15h5" />
      </svg>
    );
  }

  if (type === "users") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-7 w-7"
        aria-hidden="true"
      >
        <circle cx="9" cy="7" r="3" />
        <circle cx="17" cy="9" r="2.5" />
        <path d="M3 20v-1a5 5 0 0 1 5-5h2a5 5 0 0 1 5 5v1" />
        <path d="M14 14.5a4.5 4.5 0 0 1 7 3.5v1" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-7 w-7"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="8" />
      <path d="M12 4c2.5 2.5 4 5.3 4 8s-1.5 5.5-4 8c-2.5-2.5-4-5.3-4-8s1.5-5.5 4-8Z" />
      <path d="M4 12h16M12 4v16" />
    </svg>
  );
}

function formatNumber(amount: number) {
  return new Intl.NumberFormat("en-US").format(amount);
}

export default function ChurchBuildingPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[650px] overflow-hidden bg-blue-950 text-white sm:min-h-[700px]">
        {/* Hero Image */}
        <img
          src="/church-building/mancc-church-building.png"
          alt="MANCC church building project"
          className="absolute inset-0 z-0 h-full w-full object-cover object-center"
        />

        {/* Overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-blue-950/95 via-blue-950/75 to-blue-950/25" />

        <div className="absolute inset-0 z-10 bg-gradient-to-t from-blue-950/80 via-transparent to-blue-950/20" />

        {/* Hero Content */}
        <div className="relative z-20 mx-auto flex min-h-[650px] max-w-7xl items-center px-6 py-24 sm:min-h-[700px] sm:px-8 lg:px-12">
          <div className="max-w-4xl">
            <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.25em] text-blue-100 backdrop-blur-md">
              Church Building &amp; Missions
            </div>

            <h1 className="mt-7 text-5xl font-bold leading-[1.05] tracking-tight drop-shadow-2xl sm:text-6xl lg:text-7xl">
              Building Churches
              <span className="mt-3 block text-blue-200">
                Where They Are Needed Most
              </span>
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/90 drop-shadow-md sm:text-xl">
              We conduct ministry and Christian meetings in communities where
              there are no permanent church buildings. Our vision is to
              establish lasting places of worship, discipleship, evangelism,
              fellowship, and service.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 font-semibold text-blue-950 shadow-xl transition hover:bg-blue-50"
              >
                View Our Projects
              </a>

              <a
                href="#give"
                className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-8 py-3.5 font-semibold text-white backdrop-blur-md transition hover:bg-white/20"
              >
                Support Church Building
              </a>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-blue-100">
              <span>Worship</span>
              <span>•</span>
              <span>Discipleship</span>
              <span>•</span>
              <span>Evangelism</span>
              <span>•</span>
              <span>Community</span>
            </div>
          </div>
        </div>
      </section>

      {/* Annual Target */}
      <section className="relative z-30 -mt-10 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-2xl">
            <div className="grid md:grid-cols-3">
              <div className="border-b border-blue-100 p-7 md:border-b-0 md:border-r md:p-9">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
                  Annual Goal
                </p>

                <p className="mt-3 text-4xl font-bold text-blue-950">
                  4 Churches
                </p>

                <p className="mt-2 text-gray-600">
                  Our annual goal is to build four churches.
                </p>
              </div>

              <div className="border-b border-blue-100 p-7 md:border-b-0 md:border-r md:p-9">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
                  Cost Per Church
                </p>

                <p className="mt-3 text-3xl font-bold text-blue-950">
                  TZS 15,000,000+
                </p>

                <p className="mt-2 text-gray-600">
                  Approximately USD {formatNumber(churchTargetUsd)} or more.
                </p>
              </div>

              <div className="p-7 md:p-9">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
                  Annual Building Target
                </p>

                <p className="mt-3 text-3xl font-bold text-blue-950">
                  TZS 60,000,000+
                </p>

                <p className="mt-2 text-gray-600">
                  Approximately USD {formatNumber(annualTargetUsd)} or more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section id="vision" className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
              Our Vision
            </p>

            <h2 className="mt-3 text-4xl font-bold tracking-tight text-gray-950 md:text-5xl">
              More Than a Building
            </h2>

            <p className="mx-auto mt-6 text-lg leading-8 text-gray-600">
              A church building is more than a structure. It provides a
              permanent place where people can worship God, learn His Word,
              fellowship with one another, receive ministry, and reach their
              communities with the Gospel.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Worship",
                description:
                  "A permanent place where believers can gather and worship God together.",
                icon: "church",
              },
              {
                title: "Discipleship",
                description:
                  "A place where people can learn God's Word, grow in faith, and disciple others.",
                icon: "book",
              },
              {
                title: "Community",
                description:
                  "A space that can serve families, children, youth, and the surrounding community.",
                icon: "users",
              },
              {
                title: "Mission",
                description:
                  "A foundation for evangelism, missions, outreach, and the planting of churches.",
                icon: "globe",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-950 text-white">
                  <ImpactIcon type={item.icon} />
                </div>

                <h3 className="mt-6 text-xl font-bold text-gray-950">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="bg-gray-50 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
              Church Building Projects
            </p>

            <h2 className="mt-3 text-4xl font-bold tracking-tight text-gray-950 md:text-5xl">
              Four Churches Every Year
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              Our goal is to build at least four churches each year in
              communities where permanent church buildings are needed.
            </p>
          </div>

          <div className="mt-14 grid gap-7 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.number}
                className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative overflow-hidden bg-blue-950 px-7 py-8 text-white">
                  <div className="absolute -right-12 -top-16 h-40 w-40 rounded-full border-[24px] border-white/5" />

                  <div className="relative flex items-start justify-between gap-5">
                    <div>
                      <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-300">
                        Project {project.number}
                      </p>

                      <h3 className="mt-3 text-2xl font-bold">
                        {project.title}
                      </h3>
                    </div>

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-lg font-bold text-blue-100">
                      {project.number}
                    </div>
                  </div>
                </div>

                <div className="p-7">
                  <p className="leading-7 text-gray-600">
                    {project.description}
                  </p>

                  <div className="mt-7 rounded-2xl bg-blue-50 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-blue-700">
                      Building Target
                    </p>

                    <div className="mt-2 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
                      <p className="text-2xl font-bold text-blue-950">
                        TZS 15,000,000+
                      </p>

                      <p className="text-sm font-semibold text-blue-800">
                        ≈ USD {formatNumber(churchTargetUsd)}+
                      </p>
                    </div>

                    <div className="mt-5 h-2.5 overflow-hidden rounded-full bg-blue-100">
                      <div className="h-full w-0 rounded-full bg-blue-700" />
                    </div>

                    <p className="mt-3 text-sm text-gray-500">
                      Building target. Donation progress will be connected to
                      the website database in a future phase.
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Annual Total */}
          <div className="mt-10 rounded-3xl bg-blue-950 p-8 text-white shadow-xl md:p-10">
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                  Annual Building Goal
                </p>

                <h3 className="mt-3 text-3xl font-bold md:text-4xl">
                  TZS 60,000,000+
                </h3>

                <p className="mt-3 max-w-2xl leading-7 text-blue-100">
                  Four church buildings at a minimum target of TZS 15,000,000
                  per church.
                </p>
              </div>

              <div className="shrink-0 rounded-2xl border border-white/10 bg-white/10 px-7 py-5 text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-blue-200">
                  Four Churches
                </p>

                <p className="mt-2 text-3xl font-bold">
                  USD {formatNumber(annualTargetUsd)}+
                </p>

                <p className="mt-1 text-sm text-blue-200">
                  Approximate equivalent
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Giving */}
      <section id="give" className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
              Support Church Building
            </p>

            <h2 className="mt-3 text-4xl font-bold text-gray-950 md:text-5xl">
              Help Us Build Churches
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              Your contribution can help establish a permanent place of
              worship and ministry in communities where there is no church
              building.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {/* Payment Information */}
            <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-lg md:p-9">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
                Official Building Account
              </p>

              <h3 className="mt-3 text-2xl font-bold text-gray-950">
                TAG Magomeni Development Fund
              </h3>

              <div className="mt-7 space-y-4">
                <div className="rounded-2xl bg-gray-50 p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                    Lipa Namba
                  </p>

                  <p className="mt-2 text-3xl font-bold tracking-wider text-blue-950">
                    117750178
                  </p>
                </div>

                <div className="rounded-2xl bg-gray-50 p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                    Account / Fund Name
                  </p>

                  <p className="mt-2 text-lg font-bold text-gray-950">
                    TAG MAGOMENI DEV FUND
                  </p>
                </div>

                <div className="rounded-2xl bg-gray-50 p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                    CRDB SimBanking
                  </p>

                  <p className="mt-2 text-xl font-bold text-blue-950">
                    *150*03#
                  </p>
                </div>
              </div>

              <div className="mt-7 rounded-2xl bg-blue-50 p-5">
                <p className="font-semibold text-blue-950">
                  Payment Reference
                </p>

                <p className="mt-2 leading-7 text-blue-900/80">
                  When making a contribution, use the appropriate payment
                  reference for the church building project where applicable.
                </p>
              </div>
            </div>

            {/* Payment QR */}
            <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg">
              <div className="p-7 pb-5 md:p-9 md:pb-5">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
                  Scan to Pay
                </p>

                <h3 className="mt-3 text-2xl font-bold text-gray-950">
                  Lipa Hapa
                </h3>

                <p className="mt-2 leading-7 text-gray-600">
                  Scan the QR code below to make your contribution through the
                  available payment channels.
                </p>
              </div>

              <div className="px-7 pb-7 md:px-9 md:pb-9">
                <img
                  src="/church-building/church-building-payment.jpeg"
                  alt="Church building payment QR code and payment information"
                  className="mx-auto w-full max-w-md rounded-2xl border border-gray-200 object-contain"
                />
              </div>
            </div>
          </div>

          <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-blue-100 bg-blue-50 p-6 text-center">
            <p className="font-semibold text-blue-950">
              Building Target: TZS 15,000,000+ per church
            </p>

            <p className="mt-2 text-sm leading-6 text-blue-900/80">
              Our annual goal is to build at least four churches, with a
              combined minimum building target of TZS 60,000,000.
            </p>
          </div>
        </div>
      </section>

      {/* Future Progress */}
      <section className="border-t border-gray-100 bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
            Building Progress
          </p>

          <h2 className="mt-3 text-3xl font-bold text-gray-950">
            Transparent Progress
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-600">
            In a future phase, the website will connect to a database so that
            confirmed contributions can be displayed and the progress of each
            church building project can increase automatically.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}


