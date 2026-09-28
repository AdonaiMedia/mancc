export default function Contact() {
  return (
    <section id="contact" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-700">
            Contact Us
          </p>

          <h2 className="mt-3 text-4xl font-bold text-gray-900">
            We Would Love to Hear From You
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            Have a question, need prayer, or want to connect with our church?
            Reach out to us and we will be happy to hear from you.
          </p>
        </div>

        {/* Contact Content */}
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {/* Contact Information */}
          <div className="rounded-3xl bg-blue-950 p-8 text-white md:p-10">
            <h3 className="text-2xl font-bold">
              Get In Touch
            </h3>

            <p className="mt-4 leading-7 text-blue-100">
              Visit us, call us, or send us a message. We look forward to
              connecting with you and your family.
            </p>

            <div className="mt-8 space-y-6">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-xl">
                  📍
                </div>

                <div>
                  <p className="font-semibold">Location</p>
                  <p className="mt-1 text-sm leading-6 text-blue-200">
                    Magomeni, Dar es Salaam, Tanzania
                  </p>

                  <a
                    href="https://maps.app.goo.gl/hJgHKt52jVpDWHv87"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex text-sm font-semibold text-white underline decoration-blue-300 underline-offset-4 transition hover:text-blue-200"
                  >
                    Open in Google Maps →
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-xl">
                  📞
                </div>

                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="mt-1 text-sm text-blue-200">
                    Church phone number coming soon
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-xl">
                  ✉️
                </div>

                <div>
                  <p className="font-semibold">Email</p>
                  <p className="mt-1 text-sm text-blue-200">
                    Church email coming soon
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-xl">
                  🕐
                </div>

                <div>
                  <p className="font-semibold">Sunday Service</p>
                  <p className="mt-1 text-sm text-blue-200">
                    Service times available on our Events page
                  </p>

                  <a
                    href="/events"
                    className="mt-2 inline-flex text-sm font-semibold text-white underline decoration-blue-300 underline-offset-4 transition hover:text-blue-200"
                  >
                    View Service Times →
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-3xl border border-gray-200 bg-gray-50 p-8 md:p-10">
            <h3 className="text-2xl font-bold text-gray-900">
              Send Us a Message
            </h3>

            <form className="mt-6 space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Your Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-blue-700 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-blue-700 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Write your message..."
                  className="w-full resize-none rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-blue-700 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-blue-900 px-6 py-3 font-semibold text-white transition hover:bg-blue-800"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Church Location */}
        <div className="mt-10 overflow-hidden rounded-3xl border border-gray-200 bg-gray-50 shadow-sm">
          <div className="flex min-h-[280px] items-center justify-center p-8">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-3xl">
                📍
              </div>

              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
                Church Location
              </p>

              <h3 className="mt-3 text-2xl font-bold text-gray-900">
                Magomeni All Nations Christian Centre
              </h3>

              <p className="mt-2 text-gray-600">
                Magomeni, Dar es Salaam, Tanzania
              </p>

              <a
                href="https://maps.app.goo.gl/hJgHKt52jVpDWHv87"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex rounded-full bg-blue-950 px-7 py-3 font-semibold text-white transition hover:bg-blue-800"
              >
                Open Church Location
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
