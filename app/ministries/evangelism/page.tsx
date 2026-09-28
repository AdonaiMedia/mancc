import Footer from "../../../src/components/Footer";
import Navbar from "../../../src/components/Navbar";

const missionProjects = [
  {
    icon: "community",
    title: "Community Evangelism",
    location: "Dar es Salaam",
    description:
      "Reaching communities with the Gospel through evangelism, prayer, discipleship, and practical acts of Christian service.",
    status: "Opportunities coming soon",
  },
  {
    icon: "church",
    title: "Church Planting",
    location: "Tanzania",
    description:
      "Supporting the establishment of local churches where communities need a place for worship, discipleship, fellowship, and pastoral care.",
    status: "Projects coming soon",
  },
  {
    icon: "mission",
    title: "Mission Outreach",
    location: "Tanzania & Beyond",
    description:
      "Taking the message of Jesus Christ to communities through organized mission trips, evangelistic outreaches, prayer, and service.",
    status: "Mission plans coming soon",
  },
];

const missionSchedule = [
  {
    date: "Coming Soon",
    title: "Evangelism Outreach",
    location: "Location to be announced",
    time: "Time to be announced",
  },
  {
    date: "Coming Soon",
    title: "Mission Trip",
    location: "Location to be announced",
    time: "Time to be announced",
  },
  {
    date: "Coming Soon",
    title: "Community Outreach",
    location: "Location to be announced",
    time: "Time to be announced",
  },
];

const missionFocus = [
  "Sharing the Gospel of Jesus Christ",
  "Making disciples and strengthening believers",
  "Planting and strengthening local churches",
  "Serving communities through practical Christian love",
  "Training and supporting mission workers",
  "Reaching communities that need a faithful Christian witness",
];

function Icon({
  type,
  className = "h-7 w-7",
}: {
  type: string;
  className?: string;
}) {
  const base = `${className} fill-none stroke-current stroke-[1.8]`;

  if (type === "cross") {
    return (
      <svg
        viewBox="0 0 24 24"
        className={base}
        aria-hidden="true"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 3h6v6h4v4h-4v8H9v-8H5V9h4V3Z" />
      </svg>
    );
  }

  if (type === "community") {
    return (
      <svg
        viewBox="0 0 24 24"
        className={base}
        aria-hidden="true"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="9" cy="7" r="3" />
        <path d="M3.5 21a5.5 5.5 0 0 1 11 0" />
        <circle cx="17.5" cy="8" r="2.5" />
        <path d="M15 14.5a4.5 4.5 0 0 1 5.5 4.5" />
      </svg>
    );
  }

  if (type === "church") {
    return (
      <svg
        viewBox="0 0 24 24"
        className={base}
        aria-hidden="true"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 21h16" />
        <path d="M6 21V10l6-4 6 4v11" />
        <path d="M10 21v-5h4v5" />
        <path d="M12 2v5" />
        <path d="M9.5 4.5h5" />
      </svg>
    );
  }

  if (type === "mission") {
    return (
      <svg
        viewBox="0 0 24 24"
        className={base}
        aria-hidden="true"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 3v18" />
        <path d="M8 7h8" />
        <path d="M7 11h10" />
        <path d="M5 15h14" />
        <path d="M12 3 9 6" />
        <path d="M12 3 15 6" />
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
        <path d="M20.8 8.7c0 5.5-8.8 10.3-8.8 10.3S3.2 14.2 3.2 8.7A4.7 4.7 0 0 1 12 6.3a4.7 4.7 0 0 1 8.8 2.4Z" />
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
      <path d="M12 21V11" />
      <path d="M7 16h10" />
      <path d="M8 5h8" />
      <path d="M10 3h4" />
      <path d="M5 11a7 7 0 0 1 14 0" />
    </svg>
  );
}

export default function EvangelismPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[600px] overflow-hidden text-white sm:min-h-[640px]">
        {/* Evangelism & Missions Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('/evangelism/mancc-evangelism-missions.png')",
          }}
        />

        {/* Modern blue overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-950/60 to-blue-950/20" />

        {/* Soft bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-blue-950/70 to-transparent" />

        {/* Decorative curved light */}
        <div className="absolute -left-32 top-20 h-[520px] w-[520px] rounded-full border border-white/10" />
        <div className="absolute -right-40 -top-40 h-[620px] w-[620px] rounded-full border-[80px] border-white/5" />

        <div className="relative mx-auto flex min-h-[600px] max-w-7xl items-center px-6 py-24 sm:px-8 lg:min-h-[640px] lg:px-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.25em] text-blue-100 backdrop-blur-md">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15">
                <Icon type="cross" className="h-4 w-4" />
              </span>
              Evangelism &amp; Missions
            </div>

            <h1 className="mt-7 text-5xl font-bold leading-[1.05] tracking-tight drop-shadow-2xl sm:text-6xl lg:text-7xl">
              Taking the Gospel
              <span className="mt-2 block text-blue-200">
                Beyond the Church Walls
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/90 drop-shadow-md sm:text-xl">
              We exist to share the Gospel of Jesus Christ, make disciples,
              reach communities, plant churches, and serve people with the love
              of Christ.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#mission"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 font-semibold text-blue-950 shadow-xl transition hover:bg-blue-50"
              >
                Explore Our Mission
              </a>

              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-8 py-3.5 font-semibold text-white backdrop-blur-md transition hover:bg-white/20"
              >
                Partner With Us
              </a>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-5 gap-y-2 text-sm text-blue-100/90">
              <span>Evangelism</span>
              <span>•</span>
              <span>Missions</span>
              <span>•</span>
              <span>Discipleship</span>
              <span>•</span>
              <span>Church Planting</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section id="mission" className="scroll-mt-20 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
                Our Mission
              </p>

              <h2 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
                Reaching People With the Love of Christ
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                Evangelism and missions are central to our calling. We desire
                to take the Gospel to people and communities, disciple new
                believers, strengthen local churches, and demonstrate Christ&apos;s
                love through practical service.
              </p>

              <p className="mt-5 leading-7 text-gray-600">
                Through evangelistic outreach, mission trips, church planting,
                prayer, discipleship, and community service, we seek to help
                people encounter the message of Jesus Christ and grow in faith.
              </p>

              <div className="mt-8">
                <a
                  href="/contact"
                  className="inline-flex rounded-full bg-blue-900 px-7 py-3 font-semibold text-white transition hover:bg-blue-800"
                >
                  Partner With Us
                </a>
              </div>
            </div>

            <div className="rounded-3xl bg-blue-950 p-8 text-white shadow-xl md:p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
                <Icon type="cross" />
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                Our Mission Focus
              </h3>

              <div className="mt-7 space-y-4">
                {missionFocus.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-4 border-b border-white/10 pb-4 last:border-b-0 last:pb-0"
                  >
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-400/20 text-sm font-bold text-blue-200">
                      +
                    </span>

                    <p className="leading-7 text-blue-100">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Path */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
              How We Serve
            </p>

            <h2 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
              From Gospel Outreach to Lasting Discipleship
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              Our mission is not only to share the Gospel, but also to help
              establish communities of faith where people can worship, grow,
              serve, and make disciples.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <article className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-900">
                <Icon type="community" />
              </div>

              <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-blue-700">
                01
              </p>

              <h3 className="mt-2 text-xl font-bold text-gray-900">
                Reach
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Go into communities with the Gospel through evangelism,
                prayer, outreach, and practical Christian service.
              </p>
            </article>

            <article className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-900">
                <Icon type="mission" />
              </div>

              <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-blue-700">
                02
              </p>

              <h3 className="mt-2 text-xl font-bold text-gray-900">
                Disciple
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Help new believers grow through biblical teaching, prayer,
                fellowship, and intentional discipleship.
              </p>
            </article>

            <article className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-900">
                <Icon type="church" />
              </div>

              <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-blue-700">
                03
              </p>

              <h3 className="mt-2 text-xl font-bold text-gray-900">
                Establish
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Strengthen local churches and support new places of worship
                where communities need a faithful Christian witness.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Mission Projects */}
      <section id="missions" className="scroll-mt-20 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
              Mission Areas
            </p>

            <h2 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
              Where We Hope to Serve
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              These areas represent the mission opportunities we are preparing
              to develop. Specific projects, locations, and schedules will be
              published as they become available.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {missionProjects.map((project) => (
              <article
                key={project.title}
                className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-900">
                  <Icon type={project.icon} />
                </div>

                <h3 className="mt-6 text-xl font-bold text-gray-900">
                  {project.title}
                </h3>

                <p className="mt-2 text-sm font-semibold text-blue-700">
                  {project.location}
                </p>

                <p className="mt-4 leading-7 text-gray-600">
                  {project.description}
                </p>

                <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-blue-700">
                    Status
                  </p>

                  <p className="mt-1 text-sm font-semibold text-blue-950">
                    {project.status}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Schedule */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
              Mission Schedule
            </p>

            <h2 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
              Upcoming Mission Activities
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              Mission dates and locations will be added here as activities are
              confirmed.
            </p>
          </div>

          <div className="mt-12 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
            <div className="hidden grid-cols-4 bg-blue-950 px-6 py-4 text-sm font-semibold text-white md:grid">
              <span>Date</span>
              <span>Activity</span>
              <span>Location</span>
              <span>Time</span>
            </div>

            {missionSchedule.map((item, index) => (
              <div
                key={`${item.title}-${index}`}
                className="grid gap-4 border-b border-gray-100 px-6 py-6 last:border-b-0 md:grid-cols-4"
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 md:hidden">
                    Date
                  </p>

                  <p className="font-semibold text-blue-900">
                    {item.date}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 md:hidden">
                    Activity
                  </p>

                  <p className="font-semibold text-gray-900">
                    {item.title}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 md:hidden">
                    Location
                  </p>

                  <p className="text-gray-600">{item.location}</p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 md:hidden">
                    Time
                  </p>

                  <p className="text-gray-600">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Church Building Connection */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="overflow-hidden rounded-3xl bg-blue-950 text-white">
            <div className="grid items-center md:grid-cols-[1.2fr_0.8fr]">
              <div className="p-8 md:p-14">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                  From Mission to Community
                </p>

                <h2 className="mt-3 text-4xl font-bold md:text-5xl">
                  Establishing Churches Where They Are Needed
                </h2>

                <p className="mt-5 max-w-2xl text-lg leading-8 text-blue-100">
                  Evangelism can open the door to new relationships and new
                  believers. Strong local churches can then provide places for
                  worship, discipleship, fellowship, pastoral care, and
                  continued Gospel witness.
                </p>

                <a
                  href="/church-building"
                  className="mt-8 inline-flex rounded-full bg-white px-7 py-3 font-semibold text-blue-950 transition hover:bg-blue-50"
                >
                  Explore Church Building
                </a>
              </div>

              <div className="flex min-h-[320px] items-center justify-center bg-blue-900 p-10">
                <div className="text-center">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-white/10 text-blue-100">
                    <Icon type="church" className="h-12 w-12" />
                  </div>

                  <p className="mt-5 text-lg font-semibold">
                    Worship. Discipleship. Mission.
                  </p>

                  <p className="mt-2 text-sm text-blue-200">
                    Building communities of faith
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership */}
      <section className="bg-blue-50 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-blue-900 shadow-sm">
            <Icon type="heart" className="h-8 w-8" />
          </div>

          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
            Partner With Us
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
            Help Take the Gospel Further
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-600">
            Mission work grows through prayer, people, resources, and faithful
            partnership. As opportunities are developed, this page will
            provide more information about how you can participate.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="/contact"
              className="inline-flex rounded-full bg-blue-900 px-8 py-3 font-semibold text-white transition hover:bg-blue-800"
            >
              Contact the Church
            </a>

            <a
              href="/giving"
              className="inline-flex rounded-full border border-blue-200 bg-white px-8 py-3 font-semibold text-blue-900 transition hover:bg-blue-100"
            >
              Support the Mission
            </a>
          </div>
        </div>
      </section>

      {/* Scripture */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-blue-900">
            <Icon type="cross" className="h-7 w-7" />
          </div>

          <blockquote className="mt-6 text-2xl font-semibold leading-10 text-gray-900 md:text-3xl">
            &ldquo;Go into all the world and preach the gospel to all
            creation.&rdquo;
          </blockquote>

          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
            Mark 16:15
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}

