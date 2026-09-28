const sermons = [
  {
    title: "Walking in Faith",
    preacher: "Magomeni All Nations Christian Centre",
    date: "Sunday Service",
    category: "Latest Sermon",
  },
  {
    title: "Growing Through God's Word",
    preacher: "Magomeni All Nations Christian Centre",
    date: "Bible Teaching",
    category: "Bible Study",
  },
  {
    title: "The Power of Prayer",
    preacher: "Magomeni All Nations Christian Centre",
    date: "Prayer Meeting",
    category: "Prayer",
  },
];

export default function Sermons() {
  return (
    <section id="sermons" className="bg-blue-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-300">
            Sermons & Teachings
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            Grow Through God's Word
          </h2>

          <p className="mt-5 text-lg leading-8 text-blue-100">
            Watch and listen to messages that encourage your faith and help
            you grow in your relationship with God.
          </p>
        </div>

        {/* Featured Sermon */}
        <div className="mt-12 grid items-center gap-10 md:grid-cols-2">
          <div className="overflow-hidden rounded-3xl bg-white/10 p-4 shadow-xl">
            <div className="flex aspect-video items-center justify-center rounded-2xl bg-black/40">
              <button
                type="button"
                className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-3xl text-blue-950 shadow-lg transition hover:scale-105"
                aria-label="Play latest sermon"
              >
                ▶
              </button>
            </div>
          </div>

          <div>
            <span className="rounded-full bg-blue-500/20 px-4 py-2 text-sm font-semibold text-blue-200">
              Latest Sermon
            </span>

            <h3 className="mt-6 text-3xl font-bold">
              Walking in Faith
            </h3>

            <p className="mt-4 text-blue-200">
              Sunday Worship Service
            </p>

            <p className="mt-5 leading-7 text-blue-100">
              Be encouraged through God's Word and discover how faith can
              transform your daily walk with Christ.
            </p>

            <button
              type="button"
              className="mt-7 rounded-full bg-white px-7 py-3 font-semibold text-blue-950 transition hover:bg-blue-50"
            >
              Watch Sermon
            </button>
          </div>
        </div>

        {/* Sermon Cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {sermons.map((sermon) => (
            <article
              key={sermon.title}
              className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur transition hover:-translate-y-1 hover:bg-white/15"
            >
              <div className="flex aspect-video items-center justify-center rounded-xl bg-black/30">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-lg text-blue-950">
                  ▶
                </div>
              </div>

              <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-blue-300">
                {sermon.category}
              </p>

              <h3 className="mt-2 text-xl font-bold">
                {sermon.title}
              </h3>

              <p className="mt-3 text-sm text-blue-200">
                {sermon.preacher}
              </p>

              <p className="mt-2 text-sm text-blue-300">
                {sermon.date}
              </p>

              <button
                type="button"
                className="mt-5 font-semibold text-white hover:text-blue-200"
              >
                Watch Now →
              </button>
            </article>
          ))}
        </div>

        {/* View All */}
        <div className="mt-12 text-center">
          <button
            type="button"
            className="rounded-full border border-white/30 px-7 py-3 font-semibold text-white transition hover:bg-white/10"
          >
            View All Sermons
          </button>
        </div>
      </div>
    </section>
  );
}