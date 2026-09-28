"use client";

import { useLanguage } from "../i18n/LanguageProvider";

export default function Events() {
  const { t } = useLanguage();

  const events = [
    {
      date: t("everySunday"),
      title: t("sundayWorship"),
      time: "8:00 AM – 12:00 PM",
      description: t("sundayDescription"),
    },
    {
      date: t("everyWednesday"),
      title: t("bibleStudy"),
      time: "5:30 PM – 7:00 PM",
      description: t("bibleStudyDescription"),
    },
    {
      date: t("everyFriday"),
      title: t("prayerMeeting"),
      time: "5:30 PM – 7:00 PM",
      description: t("prayerMeetingDescription"),
    },
  ];

  return (
    <section id="events" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-700">
            {t("churchCalendar")}
          </p>

          <h2 className="mt-3 text-4xl font-bold text-gray-900">
            {t("upcomingEvents")}
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            {t("eventsIntro")}
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {events.map((event) => (
            <article
              key={event.title}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="bg-blue-900 px-6 py-4 text-white">
                <p className="text-xs font-bold tracking-widest text-blue-200">
                  {event.date}
                </p>
              </div>

              <div className="p-7">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-900"
                  aria-hidden="true"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6 fill-none stroke-current stroke-2"
                  >
                    <rect x="3" y="4" width="18" height="17" rx="2" />
                    <path d="M16 2v4M8 2v4M3 10h18" />
                    <path d="M8 14h2M14 14h2M8 17h2" />
                  </svg>
                </div>

                <h3 className="mt-5 text-xl font-bold text-gray-900">
                  {event.title}
                </h3>

                <p className="mt-2 font-medium text-blue-700">
                  {event.time}
                </p>

                <p className="mt-4 leading-7 text-gray-600">
                  {event.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="/events"
            className="inline-flex items-center rounded-full border border-blue-900 px-6 py-3 font-semibold text-blue-900 transition hover:bg-blue-900 hover:text-white"
          >
            {t("viewChurchCalendar")}
            <span className="ml-2" aria-hidden="true">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
