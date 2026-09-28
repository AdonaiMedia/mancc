"use client";

import Footer from "../../src/components/Footer";
import Navbar from "../../src/components/Navbar";
import { useLanguage } from "../../src/i18n/LanguageProvider";

const events = [
  {
    titleKey: "sundayWorship",
    categoryKey: "worship",
    dayKey: "everySunday",
    time: "06:00 AM – 08:30 AM",
    descriptionKey: "sundayDescription",
    icon: "worship",
    logo: "/branding/mancclogo.png",
  },
  {
    titleKey: "internationalService",
    categoryKey: "worship",
    dayKey: "everySunday",
    time: "08:30 AM – 10:30 AM",
    descriptionKey: "internationalServiceDescription",
    icon: "worship",
    logo: "/branding/mancclogo.png",
  },
  {
    titleKey: "thirdSundayService",
    categoryKey: "worship",
    dayKey: "everySunday",
    time: "10:30 AM – 01:30 PM",
    descriptionKey: "thirdSundayServiceDescription",
    icon: "worship",
    logo: "/branding/mancclogo.png",
  },
  {
    titleKey: "youthFellowship",
    categoryKey: "youth",
    dayKey: "everySunday",
    time: "04:30 PM – 06:00 PM",
    descriptionKey: "youthFellowshipDescription",
    icon: "youth",
    logo: "/ministries/ca-logo.jpg",
  },
  {
    titleKey: "womenFellowship",
    categoryKey: "fellowship",
    dayKey: "everyTuesday",
    time: "04:30 PM – 06:00 PM",
    descriptionKey: "womenFellowshipDescription",
    icon: "women",
    logo: "/ministries/wwk-logo.png",
  },
  {
    titleKey: "mensFellowship",
    categoryKey: "fellowship",
    dayKey: "everyTuesday",
    time: "07:00 PM – 09:00 PM",
    descriptionKey: "mensFellowshipDescription",
    icon: "men",
    logo: "/ministries/cmf-logo.png",
  },
  {
    titleKey: "bibleStudy",
    categoryKey: "bibleStudy",
    dayKey: "everyWednesday",
    time: "05:00 PM – 07:00 PM",
    descriptionKey: "bibleStudyPageDescription",
    icon: "bible",
    logo: "/branding/mancclogo.png",
  },
  {
    titleKey: "prayerMeeting",
    categoryKey: "prayer",
    dayKey: "everyFriday",
    time: "05:00 PM – 10:00 PM",
    descriptionKey: "prayerMeetingPageDescription",
    icon: "prayer",
    logo: "/branding/mancclogo.png",
  },
];

const weeklyRhythm = [
  {
    titleKey: "sundayWorshipRhythm",
    logo: "/branding/mancclogo.png",
    dayKey: "everySunday",
    time: "06:00 AM – 01:30 PM",
    descriptionKey: "sundayWorshipRhythmDescription",
    icon: "worship",
  },
  {
    titleKey: "youthFellowship",
    logo: "/ministries/ca-logo.jpg",
    dayKey: "everySunday",
    time: "04:30 PM – 06:00 PM",
    descriptionKey: "youthFellowshipRhythmDescription",
    icon: "youth",
  },
  {
    titleKey: "womenFellowship",
    logo: "/ministries/wwk-logo.png",
    dayKey: "everyTuesday",
    time: "04:30 PM – 06:00 PM",
    descriptionKey: "womenFellowshipRhythmDescription",
    icon: "women",
  },
  {
    titleKey: "mensFellowship",
    logo: "/ministries/cmf-logo.png",
    dayKey: "everyTuesday",
    time: "07:00 PM – 09:00 PM",
    descriptionKey: "menFellowshipRhythmDescription",
    icon: "men",
  },
  {
    titleKey: "bibleStudy",
    logo: "/branding/mancclogo.png",
    dayKey: "everyWednesday",
    time: "05:00 PM – 07:00 PM",
    descriptionKey: "bibleStudyRhythmDescription",
    icon: "bible",
  },
  {
    titleKey: "prayerMeeting",
    logo: "/branding/mancclogo.png",
    dayKey: "everyFriday",
    time: "05:00 PM – 10:00 PM",
    descriptionKey: "prayerMeetingRhythmDescription",
    icon: "prayer",
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

  if (type === "worship") {
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

  if (type === "bible") {
    return (
      <svg
        viewBox="0 0 24 24"
        className={base}
        aria-hidden="true"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 4.5A2.5 2.5 0 0 1 7.5 2H20v17H7.5A2.5 2.5 0 0 0 5 21.5z" />
        <path d="M5 4.5v17" />
        <path d="M9 6h7M9 10h7M9 14h5" />
      </svg>
    );
  }

  if (type === "prayer") {
    return (
      <svg
        viewBox="0 0 24 24"
        className={base}
        aria-hidden="true"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M8 21v-7" />
        <path d="M16 21v-7" />
        <path d="M8 14c-2.5-1.5-4-3.5-4-6V5.5A1.5 1.5 0 0 1 7 5v3" />
        <path d="M16 14c2.5-1.5 4-3.5 4-6V5.5A1.5 1.5 0 0 0 17 5v3" />
        <path d="M8 8V3.5A1.5 1.5 0 0 1 11 3v5" />
        <path d="M16 8V3.5A1.5 1.5 0 0 0 13 3v5" />
      </svg>
    );
  }

  if (type === "youth") {
    return (
      <svg
        viewBox="0 0 24 24"
        className={base}
        aria-hidden="true"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="6" r="3" />
        <path d="M7 21a5 5 0 0 1 10 0" />
        <path d="M4 13h4M16 13h4" />
        <path d="M6 10l-2 3 2 3M18 10l2 3-2 3" />
      </svg>
    );
  }

  if (type === "men") {
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

  return (
    <svg
      viewBox="0 0 24 24"
      className={base}
      aria-hidden="true"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="8" r="3" />
      <path d="M5 21a7 7 0 0 1 14 0" />
      <path d="M17 11a3 3 0 1 1 0 6" />
      <path d="M19 21a4 4 0 0 0-2-3.5" />
    </svg>
  );
}

export default function EventsPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[620px] overflow-hidden bg-blue-950 text-white sm:min-h-[680px]">
        <img
          src="/events/mancc-events-hero.png"
          alt="MANCC church congregation worship gathering"
          className="absolute inset-0 z-0 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 z-10 bg-gradient-to-r from-blue-950/90 via-blue-950/60 to-blue-950/25" />

        <div className="absolute inset-0 z-10 bg-gradient-to-t from-blue-950/75 via-transparent to-blue-950/15" />

        <div className="absolute -right-40 -top-40 z-10 h-[600px] w-[600px] rounded-full border-[80px] border-white/5" />

        <div className="relative z-20 mx-auto flex min-h-[620px] max-w-7xl items-center px-6 py-24 sm:min-h-[680px] sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.25em] text-blue-100 backdrop-blur-md">
              <Icon type="worship" className="mr-3 h-5 w-5" />
              {t("churchCalendar")}
            </div>

            <h1 className="mt-7 text-5xl font-bold leading-[1.05] tracking-tight drop-shadow-2xl sm:text-6xl lg:text-7xl">
              {t("gatherGrowServe")}
              <span className="mt-3 block text-blue-200">
                {t("serveTogether")}
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/90 drop-shadow-md sm:text-xl">
              {t("eventsPageIntro")}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#calendar"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 font-semibold text-blue-950 shadow-xl transition hover:bg-blue-50"
              >
                {t("viewChurchCalendar")}
              </a>

              <a
                href="#weekly-rhythm"
                className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-8 py-3.5 font-semibold text-white backdrop-blur-md transition hover:bg-white/20"
              >
                {t("weeklyRhythm")}
              </a>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-blue-100">
              <span>{t("worship")}</span>
              <span>Ã¢â‚¬Â¢</span>
              <span>{t("bibleStudy")}</span>
              <span>Ã¢â‚¬Â¢</span>
              <span>{t("prayer")}</span>
              <span>Ã¢â‚¬Â¢</span>
              <span>{t("fellowship")}</span>
            </div>
          </div>
        </div>
      </section>
      {/* Calendar */}
      <section id="calendar" className="scroll-mt-20 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
              {t("weeklyChurchCalendar")}
            </p>

            <h2 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
              {t("worshipFellowshipGrowth")}
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              {t("weeklyCalendarDescription")}
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {events.map((event) => (
              <article
                key={event.titleKey}
                className="flex h-full flex-col rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-gray-200 bg-white p-2 shadow-sm">
                    <img
                      src={event.logo}
                      alt={`${t(event.titleKey)} logo`}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-blue-900 ring-1 ring-gray-200">
                    <Icon type={event.icon} />
                  </div>

                  <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-blue-800 ring-1 ring-gray-200">
                    {t(event.categoryKey)}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-bold leading-7 text-gray-900">
                  {t(event.titleKey)}
                </h3>

                <div className="mt-4 space-y-2 text-sm leading-6 text-gray-600">
                  <p>
                    <span className="font-semibold text-gray-800">
                      {t("day")}:
                    </span>{" "}
                    {t(event.dayKey)}
                  </p>

                  <p>
                    <span className="font-semibold text-gray-800">
                      {t("time")}:
                    </span>{" "}
                    {event.time}
                  </p>

                  <p>
                    <span className="font-semibold text-gray-800">
                      {t("where")}:
                    </span>{" "}
                    Magomeni All Nations Christian Centre
                  </p>
                </div>

                <p className="mt-5 leading-7 text-gray-600">
                  {t(event.descriptionKey)}
                </p>

                <div className="mt-6 rounded-xl border border-gray-200 bg-white px-4 py-3 text-center text-sm font-semibold text-blue-900">
                  {t("regularWeeklyGathering")}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Weekly Rhythm */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
              {t("weeklyRhythm")}
            </p>

            <h2 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
              {t("growingTogetherEveryWeek")}
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              {t("weeklyRhythmDescription")}
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {weeklyRhythm.map((item) => (
              <article
                key={item.titleKey}
                className="rounded-2xl border border-gray-200 bg-white p-7 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-blue-900 ring-1 ring-gray-200">
                  <Icon type={item.icon} />
                </div>

                <h3 className="mt-5 text-xl font-bold text-gray-900">
                  {t(item.titleKey)}
                </h3>

                <p className="mt-2 font-semibold text-blue-700">
                  {t(item.dayKey)}
                </p>

                <p className="mt-1 text-sm text-gray-500">{item.time}</p>

                <p className="mt-3 leading-7 text-gray-600">
                  {t(item.descriptionKey)}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Evangelism CTA */}
      <section className="bg-blue-950 py-20 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
            {t("evangelismMissionsLabel")}
          </p>

          <h2 className="mt-3 text-4xl font-bold md:text-5xl">
            {t("bePartOfMission")}
          </h2>

          <p className="mt-5 text-lg leading-8 text-blue-100">
            {t("missionPageDescription")}
          </p>

          <a
            href="/ministries/evangelism"
            className="mt-8 inline-flex items-center rounded-full bg-white px-8 py-3 font-semibold text-blue-950 transition hover:bg-blue-50"
          >
            {t("exploreEvangelismMissions")}
          </a>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">
            {t("questionsAboutSchedule")}
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            {t("scheduleQuestionsDescription")}
          </p>

          <a
            href="/contact"
            className="mt-8 inline-flex items-center rounded-full bg-blue-900 px-8 py-3 font-semibold text-white transition hover:bg-blue-800"
          >
            {t("contactUs")}
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
