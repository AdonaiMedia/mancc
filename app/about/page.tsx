import Footer from "../../src/components/Footer";
import Leadership from "../../src/components/Leadership";
import Navbar from "../../src/components/Navbar";

function Icon({
  type,
}: {
  type: "church" | "book" | "heart" | "globe" | "target" | "cross";
}) {
  const common =
    "h-6 w-6";

  if (type === "heart") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className={common}
      >
        <path d="M20.8 8.6c0 5.5-8.8 10.4-8.8 10.4S3.2 14.1 3.2 8.6A4.6 4.6 0 0 1 12 6.2a4.6 4.6 0 0 1 8.8 2.4Z" />
      </svg>
    );
  }

  if (type === "book") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className={common}
      >
        <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5v-16Z" />
        <path d="M4 5.5v16M8 7h8M8 11h8" />
      </svg>
    );
  }

  if (type === "globe") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className={common}
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.5 2.5 3.5 5.5 3.5 9S14.5 18.5 12 21M12 3C9.5 5.5 8.5 8.5 8.5 12s1 6.5 3.5 9" />
      </svg>
    );
  }

  if (type === "target") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className={common}
      >
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1.5" />
      </svg>
    );
  }

  if (type === "cross") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        className={common}
      >
        <path d="M12 3v18M7 8h10" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={common}
    >
      <path d="M4 21V9l8-5 8 5v12" />
      <path d="M8 21v-6h8v6M9 10h.01M15 10h.01M12 10h.01" />
    </svg>
  );
}

const values = [
  {
    icon: "church" as const,
    title: "Worship",
    description:
      "We gather together to worship God, honor His name, and grow in His presence through prayer, praise, and fellowship.",
  },
  {
    icon: "book" as const,
    title: "The Word",
    description:
      "We believe the Bible is the foundation of our faith and seek to apply God's Word faithfully in everyday life.",
  },
  {
    icon: "heart" as const,
    title: "Love",
    description:
      "We seek to demonstrate the love of Christ through fellowship, service, compassion, and care for one another.",
  },
  {
    icon: "globe" as const,
    title: "Mission",
    description:
      "We are committed to sharing the Gospel and helping reach communities in Tanzania and beyond with the message of Jesus Christ.",
  },
];

const ministries = [
  {
    icon: "church" as const,
    title: "Fellowship",
    description:
      "Building strong relationships among believers through fellowship, encouragement, prayer, and shared life in Christ.",
  },
  {
    icon: "book" as const,
    title: "Discipleship",
    description:
      "Helping believers grow spiritually through God's Word, teaching, mentoring, and practical Christian living.",
  },
  {
    icon: "globe" as const,
    title: "Evangelism & Missions",
    description:
      "Taking the Gospel beyond our church walls and reaching people and communities with the hope of Jesus Christ.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navbar />

      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/about/mancc-about.png')",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/60 to-slate-950/20" />

        <div className="relative mx-auto flex min-h-[560px] max-w-7xl items-center px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="max-w-3xl text-white">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
              <Icon type="church" />
              Magomeni All Nations Christian Centre
            </div>

            <h1 className="text-4xl font-bold tracking-tight drop-shadow-lg sm:text-5xl lg:text-6xl">
              A church centered on Christ, His Word, and His mission.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/90 drop-shadow-md">
              We are a Christian community committed to worshiping God,
              growing disciples, loving people, and taking the Gospel to
              communities in Tanzania and beyond.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <div className="mb-4 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
              <Icon type="cross" />
              Who We Are
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              A church family serving God and people.
            </h2>

            <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
              <p>
                Magomeni All Nations Christian Centre is a local Christian
                church in Dar es Salaam, Tanzania. We desire to see people
                encounter Jesus Christ, grow in their relationship with God,
                and become faithful disciples.
              </p>

              <p>
                Our life together is shaped by worship, biblical teaching,
                prayer, fellowship, service, and the Great Commission. We
                believe the church is called not only to gather, but also to
                go and serve.
              </p>

              <p>
                We welcome people from different backgrounds and generations
                and seek to build a Christ-centered community where people can
                grow in faith and serve according to the gifts God has given
                them.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-950 p-8 text-white shadow-xl sm:p-10">
            <div className="grid gap-4 sm:grid-cols-2">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="rounded-2xl bg-white/10 p-5"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-slate-950">
                    <Icon type={value.icon} />
                  </div>

                  <p className="mt-4 font-semibold">{value.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
              Our Direction
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Vision & Mission
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600">
              We seek to remain faithful to Christ while serving people,
              strengthening families, and reaching communities with the Gospel.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50 text-sky-700">
                <Icon type="target" />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-950">
                Our Vision
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                To be a Christ-centered church that transforms lives,
                strengthens families, and impacts communities through the
                power of the Gospel.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50 text-sky-700">
                <Icon type="globe" />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-950">
                Our Mission
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                To make disciples of Jesus Christ, equip believers for
                ministry, care for those in need, and share the Gospel with
                all nations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Leadership />

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
<p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
            What Guides Us
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Our Core Values
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600">
            Our values shape how we worship, serve one another, and participate
            in the mission of the church.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 text-sky-700">
              <Icon type="heart" />
            </div>

            <h3 className="mt-5 text-xl font-bold text-slate-950">Love</h3>

            <p className="mt-3 leading-7 text-slate-600">
              Loving God and loving people through Christ-centered fellowship,
              compassion, and service.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 text-sky-700">
              <Icon type="book" />
            </div>

            <h3 className="mt-5 text-xl font-bold text-slate-950">Truth</h3>

            <p className="mt-3 leading-7 text-slate-600">
              Standing firmly on God's Word and seeking to live according to
              biblical truth.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 text-sky-700">
              <Icon type="globe" />
            </div>

            <h3 className="mt-5 text-xl font-bold text-slate-950">Mission</h3>

            <p className="mt-3 leading-7 text-slate-600">
              Taking the Gospel to our community and beyond while serving
              people with faith, hope, and love.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {ministries.map((ministry) => (
            <div
              key={ministry.title}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-7"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-950 text-white">
                <Icon type={ministry.icon} />
              </div>

              <h3 className="mt-5 text-xl font-bold text-slate-950">
                {ministry.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {ministry.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-950">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center sm:px-8 lg:px-12">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-white">
            <Icon type="cross" />
          </div>

          <h2 className="mt-7 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            You Are Welcome Here
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300">
            Come and worship with us. We believe there is a place for you,
            your family, and your gifts in God's house.
          </p>

          <a
            href="/contact"
            className="mt-8 inline-block rounded-full bg-white px-8 py-3 font-semibold text-slate-950 transition hover:bg-slate-100"
          >
            Contact Us
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}









