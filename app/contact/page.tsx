import Footer from "../../src/components/Footer";
import Navbar from "../../src/components/Navbar";

const contactDetails = [
  {
    icon: "location",
    title: "Our Location",
    value: "Magomeni, Dar es Salaam",
    description:
      "Visit us and worship with our church family.",
  },
  {
    icon: "phone",
    title: "Church Phone",
    value: "+255 784 477 774",
    description:
      "Call us for church information, services, and general inquiries.",
  },
  {
    icon: "email",
    title: "Official Email",
    value: "magomeni,allnations@gmail.com",
    description:
      "Send us a message and our church team will get back to you.",
  },
  {
    icon: "worship",
    title: "Sunday Worship",
    value: "Three Sunday Services",
    description:
      "Swahili and International services throughout the morning.",
  },
];

function Icon({
  type,
  className = "h-7 w-7",
}: {
  type: string;
  className?: string;
}) {
  const base = `${className} fill-none stroke-current stroke-2`;

  if (type === "location") {
    return (
      <svg
        viewBox="0 0 24 24"
        className={base}
        aria-hidden="true"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    );
  }

  if (type === "phone") {
    return (
      <svg
        viewBox="0 0 24 24"
        className={base}
        aria-hidden="true"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6.5 3h3l1.5 5-2 1.5a15 15 0 0 0 5.5 5.5l1.5-2 5 1.5v3c0 1.1-.9 2-2 2C10.7 19.5 4.5 13.3 4.5 5c0-1.1.9-2 2-2Z" />
      </svg>
    );
  }

  if (type === "email") {
    return (
      <svg
        viewBox="0 0 24 24"
        className={base}
        aria-hidden="true"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 7 8 6 8-6" />
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
      <path d="M12 3v18" />
      <path d="M7 8h10" />
      <path d="M8.5 8 6 12h12l-2.5-4" />
    </svg>
  );
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[620px] overflow-hidden bg-blue-950 text-white">
        <img
          src="/hero/mancc-hero-clean.png"
          alt="Magomeni All Nations Christian Centre"
          className="absolute inset-0 z-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-blue-950/90 via-blue-950/65 to-blue-950/30" />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-blue-950/80 via-transparent to-blue-950/20" />
        <div className="relative z-20 mx-auto flex min-h-[620px] max-w-6xl items-center px-6 py-24">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-200">
            Contact Us
          </p>

          <h1 className="mt-5 text-5xl font-bold leading-tight md:text-6xl">
            We Would Love
            <span className="block text-blue-200">
              To Hear From You
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100">
            Whether you have a question, need prayer, want to visit our church,
            or would like to partner with our mission, we would love to connect
            with you.
          </p>

          <a
            href="#contact-form"
            className="mt-8 inline-flex items-center rounded-full bg-white px-8 py-3 font-semibold text-blue-950 transition hover:bg-blue-50"
          >
            Send Us a Message
            <span className="ml-2" aria-hidden="true">
              ↓
            </span>
          </a>
          </div>
        </div>
      </section>

      {/* Contact Details */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-700">
              Get In Touch
            </p>

            <h2 className="mt-3 text-4xl font-bold">
              Connect With Magomeni All Nations
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              We are here to welcome you, answer your questions, and help you
              become part of our church community.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {contactDetails.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-gray-200 bg-white p-7 text-center shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-900">
                  <Icon type={item.icon} />
                </div>

                <h3 className="mt-6 text-xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-3 font-semibold text-blue-900">
                  {item.icon === "phone" ? (
                    <a
                      href="tel:+255784477774"
                      className="transition hover:text-blue-700"
                    >
                      {item.value}
                    </a>
                  ) : item.icon === "email" ? (
                    <a
                      href="mailto:magomeni,allnations@gmail.com"
                      className="transition hover:text-blue-700"
                    >
                      {item.value}
                    </a>
                  ) : (
                    item.value
                  )}
                </p>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="bg-gray-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 md:grid-cols-2">
            {/* Information */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-blue-700">
                Send a Message
              </p>

              <h2 className="mt-3 text-4xl font-bold">
                How Can We Help You?
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                Have a question about our church, ministries, events,
                evangelism, missions, or giving? Send us a message and we will
                get back to you.
              </p>

              <div className="mt-8 space-y-5">
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-900">
                    <Icon type="prayer" className="h-5 w-5" />
                  </div>

                  <div>
                    <h3 className="font-bold">
                      Need Prayer?
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      Let us know how we can stand with you in prayer.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-900">
                    <Icon type="location" className="h-5 w-5" />
                  </div>

                  <div>
                    <h3 className="font-bold">
                      Planning a Visit?
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      We would be happy to welcome you and your family.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-900">
                    <Icon type="mission" className="h-5 w-5" />
                  </div>

                  <div>
                    <h3 className="font-bold">
                      Join the Mission
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      Ask us how you can participate in evangelism and
                      missions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="text-sm font-semibold text-gray-700"
                  >
                    Full Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your full name"
                    className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-900 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="text-sm font-semibold text-gray-700"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-900 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="text-sm font-semibold text-gray-700"
                  >
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Your phone number"
                    className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-900 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="text-sm font-semibold text-gray-700"
                  >
                    Subject
                  </label>

                  <select
                    id="subject"
                    name="subject"
                    defaultValue=""
                    className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-blue-900 focus:ring-2 focus:ring-blue-100"
                  >
                    <option value="" disabled>
                      Select a subject
                    </option>

                    <option value="general">
                      General Question
                    </option>

                    <option value="prayer">
                      Prayer Request
                    </option>

                    <option value="visit">
                      Church Visit
                    </option>

                    <option value="missions">
                      Evangelism & Missions
                    </option>

                    <option value="giving">
                      Giving
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="text-sm font-semibold text-gray-700"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Write your message..."
                    className="mt-2 w-full resize-none rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-900 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-blue-900 px-6 py-4 font-semibold text-white transition hover:bg-blue-800"
                >
                  Send Message
                </button>

                <p className="text-center text-xs text-gray-500">
                  Online messaging will be connected to the church email
                  system before launch.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Us */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="overflow-hidden rounded-3xl bg-gray-900 text-white">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-14">
                <p className="text-sm font-semibold uppercase tracking-widest text-blue-300">
                  Visit Us
                </p>

                <h2 className="mt-3 text-4xl font-bold">
                  Come Worship With Us
                </h2>

                <p className="mt-5 leading-8 text-gray-300">
                  We would love to welcome you and your family to Magomeni All
                  Nations Christian Centre.
                </p>

                <div className="mt-8 space-y-5 text-gray-300">
                  <div className="flex items-center gap-3">
                    <Icon type="location" className="h-5 w-5 shrink-0" />
                    <span>Magomeni, Dar es Salaam</span>
                  </div>

                  <div className="flex items-start gap-3">
                    <Icon type="worship" className="mt-0.5 h-5 w-5 shrink-0" />
                    <span>
                      Sunday Services:
                      <span className="mt-1 block text-gray-400">
                        06:00 AM – 08:30 AM
                      </span>
                      <span className="block text-gray-400">
                        08:30 AM – 10:30 AM
                      </span>
                      <span className="block text-gray-400">
                        10:30 AM – 01:30 PM
                      </span>
                    </span>
                  </div>

                  <div className="flex items-start gap-3">
                    <Icon type="phone" className="h-5 w-5 shrink-0" />
                    <div className="flex flex-col gap-1">
                      <a
                        href="tel:+255784477774"
                        className="transition hover:text-white"
                      >
                        +255 784 477 774
                      </a>

                      <a
                        href="https://wa.me/255757447493"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition hover:text-green-300"
                      >
                        WhatsApp: +255 757 447 493
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex min-h-[350px] items-center justify-center bg-blue-950">
                <div className="text-center">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-white/10 text-blue-200">
                    <Icon type="location" className="h-10 w-10" />
                  </div>

                  <h3 className="mt-5 text-2xl font-bold">
                    Magomeni
                  </h3>

                  <p className="mt-2 text-blue-200">
                    Dar es Salaam, Tanzania
                  </p>

                  <a
                    href="https://maps.app.goo.gl/hJgHKt52jVpDWHv87"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-blue-950 transition hover:bg-blue-100"
                  >
                    Open Church Location →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission CTA */}
      <section className="bg-blue-50 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-700">
            Evangelism & Missions
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            Be Part of What God Is Doing
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            Connect with us and discover how you can participate in the
            mission of reaching communities with the Gospel.
          </p>

          <a
            href="/ministries/evangelism"
            className="mt-8 inline-flex items-center rounded-full bg-blue-900 px-8 py-3 font-semibold text-white transition hover:bg-blue-800"
          >
            Explore Our Mission
            <span className="ml-2" aria-hidden="true">
              →
            </span>
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
