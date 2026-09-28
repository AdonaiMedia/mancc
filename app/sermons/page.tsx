import Footer from "../../src/components/Footer";
import Navbar from "../../src/components/Navbar";

const sermons = [
  {
    title: "Walking by Faith",
    speaker: "Magomeni All Nations Christian Centre",
    date: "Coming Soon",
    category: "Faith",
    description:
      "Biblical encouragement to trust God, remain faithful, and walk confidently in His promises.",
  },
  {
    title: "The Power of Prayer",
    speaker: "Magomeni All Nations Christian Centre",
    date: "Coming Soon",
    category: "Prayer",
    description:
      "A teaching on developing a consistent prayer life and seeking God's will in every season.",
  },
  {
    title: "Called to Serve",
    speaker: "Magomeni All Nations Christian Centre",
    date: "Coming Soon",
    category: "Service",
    description:
      "Discovering our calling and using our gifts to serve God, the church, and our communities.",
  },
];

export default function SermonsPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Navbar />      
      {/* Hero */}
      <section className="relative min-h-[620px] overflow-hidden bg-blue-950 text-white sm:min-h-[680px]">
        <img
          src="/sermons/mancc-sermons-hero.png"
          alt="MANCC worship and sermon ministry"
          className="absolute inset-0 z-0 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 z-10 bg-gradient-to-r from-blue-950/90 via-blue-950/55 to-blue-950/20" />

        <div className="absolute inset-0 z-10 bg-gradient-to-t from-blue-950/80 via-transparent to-blue-950/20" />

        <div className="relative z-20 mx-auto flex min-h-[620px] max-w-7xl items-center px-6 py-24 sm:min-h-[680px] sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.25em] text-blue-100 backdrop-blur-md">
              Sermons &amp; Teachings
            </div>

            <h1 className="mt-7 text-5xl font-bold leading-[1.05] tracking-tight drop-shadow-2xl sm:text-6xl lg:text-7xl">
              Grow Through
              <span className="mt-3 block text-blue-200">
                God's Word
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/90 drop-shadow-md sm:text-xl">
              Watch and listen to biblical messages from Magomeni All Nations
              Christian Centre designed to strengthen your faith, encourage
              your walk with God, and help you grow in His Word.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#sermons"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 font-semibold text-blue-950 shadow-xl transition hover:bg-blue-50"
              >
                Explore Sermons
              </a>

              <a
                href="#media"
                className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-8 py-3.5 font-semibold text-white backdrop-blur-md transition hover:bg-white/20"
              >
                Watch Messages
              </a>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-blue-100">
              <span>Preaching</span>
              <span></span>
              <span>Teaching</span>
              <span></span>
              <span>Worship</span>
              <span></span>
              <span>Faith</span>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-700">
            The Word of God
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            Teaching That Transforms Lives
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            We believe God's Word has the power to transform lives, strengthen
            families, renew hope, and equip believers to live out their faith.
          </p>
        </div>
      </section>

      {/* Sermon Library */}
      <section id="sermons" className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-700">
              Sermon Library
            </p>

            <h2 className="mt-3 text-4xl font-bold">
              Latest Teachings
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
              Our sermon library will provide access to messages, teachings,
              Bible studies, and other spiritual resources.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {sermons.map((sermon) => (
              <article
                key={sermon.title}
                className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Video Placeholder */}
                <div className="flex aspect-video items-center justify-center bg-blue-950">
                  <div className="text-center text-white">
                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white text-3xl text-blue-950">
                      
                    </div>

                    <p className="mt-4 text-sm text-blue-200">
                      Sermon video coming soon
                    </p>
                  </div>
                </div>

                <div className="p-7">
                  <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                    {sermon.category}
                  </span>

                  <h3 className="mt-4 text-2xl font-bold">
                    {sermon.title}
                  </h3>

                  <p className="mt-2 text-sm font-semibold text-blue-900">
                    {sermon.speaker}
                  </p>

                  <p className="mt-1 text-sm text-gray-500">
                    {sermon.date}
                  </p>

                  <p className="mt-4 leading-7 text-gray-600">
                    {sermon.description}
                  </p>

                  <button
                    type="button"
                    className="mt-6 w-full rounded-xl bg-blue-900 px-6 py-3 font-semibold text-white transition hover:bg-blue-800"
                  >
                    Watch Sermon
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Bible Study */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-blue-700">
                Bible Study
              </p>

              <h2 className="mt-3 text-4xl font-bold">
                Go Deeper Into God's Word
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                Our Bible studies provide opportunities to explore Scripture,
                ask questions, grow spiritually, and develop a deeper
                understanding of God's Word.
              </p>

              <a
                href="/events"
                className="mt-7 inline-block rounded-full bg-blue-900 px-7 py-3 font-semibold text-white transition hover:bg-blue-800"
              >
                View Bible Study Events
              </a>
            </div>

            <div className="rounded-3xl bg-gray-50 p-10">
              <div className="text-5xl"></div>

              <h3 className="mt-6 text-2xl font-bold">
                Scripture  Study  Growth
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                We encourage every believer to develop a personal relationship
                with God's Word and apply biblical principles in everyday life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* YouTube / Media CTA */}
      <section className="bg-blue-50 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-700">
            Media Ministry
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            Watch More Messages
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            Our online media ministry will make sermons and teachings
            available to people wherever they are.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="#sermons"
              className="rounded-full bg-blue-900 px-7 py-3 font-semibold text-white transition hover:bg-blue-800"
            >
              Browse Sermons
            </a>

            <a
              href="/contact"
              className="rounded-full border border-blue-900 px-7 py-3 font-semibold text-blue-900 transition hover:bg-blue-900 hover:text-white"
            >
              Contact Church
            </a>
          </div>
        </div>
      </section>

     <Footer />
    </main>
  );
}

