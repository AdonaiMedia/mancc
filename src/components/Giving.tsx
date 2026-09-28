const givingOptions = [
  {
    icon: "🙏",
    title: "Tithe",
    description:
      "Honour God through faithful giving and support the ongoing ministry of the church.",
  },
  {
    icon: "❤️",
    title: "Offering",
    description:
      "Give freely and joyfully as an expression of gratitude and worship to God.",
  },
  {
    icon: "🏗️",
    title: "Church Building",
    description:
      "Support projects that help us create better spaces for worship, fellowship, and ministry.",
  },
  {
    icon: "🤝",
    title: "Helping People",
    description:
      "Help us support people and families facing difficult circumstances in our community.",
  },
];

export default function Giving() {
  return (
    <section id="give" className="bg-blue-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-700">
            Giving
          </p>

          <h2 className="mt-3 text-4xl font-bold text-gray-900">
            Give & Support God's Work
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            Your generosity helps us advance the Gospel, support ministry,
            strengthen families, and serve people in need.
          </p>
        </div>

        {/* Giving Options */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {givingOptions.map((option) => (
            <div
              key={option.title}
              className="rounded-2xl border border-blue-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-3xl">
                {option.icon}
              </div>

              <h3 className="mt-6 text-xl font-bold text-gray-900">
                {option.title}
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                {option.description}
              </p>
            </div>
          ))}
        </div>

        {/* Giving CTA */}
        <div className="mt-12 rounded-3xl bg-blue-950 px-8 py-10 text-center text-white shadow-xl md:px-16">
          <h3 className="text-3xl font-bold">
            Every Gift Makes a Difference
          </h3>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-blue-100">
            Whether you give towards ministry, church development, missions,
            or helping people in need, your generosity can make an impact.
          </p>

          <button
            type="button"
            className="mt-7 rounded-full bg-white px-8 py-3 font-semibold text-blue-950 transition hover:bg-blue-50"
          >
            Give Now
          </button>
        </div>

        {/* Payment Information Placeholder */}
        <div className="mt-10 rounded-2xl border border-dashed border-blue-300 bg-white p-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-700">
            Giving Information
          </p>

          <h3 className="mt-3 text-2xl font-bold text-gray-900">
            Payment Details Coming Soon
          </h3>

          <p className="mx-auto mt-3 max-w-xl leading-7 text-gray-600">
            Church bank accounts, mobile money numbers, and secure online
            payment options will be added here once the official details are
            provided.
          </p>
        </div>
      </div>
    </section>
  );
}