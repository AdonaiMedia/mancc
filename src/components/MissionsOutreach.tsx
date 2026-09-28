"use client";

import Image from "next/image";
import { useLanguage } from "../i18n/LanguageProvider";

const photos = [
  {
    src: "/missions/745715649_980807054962499_4959617901404720162_n.jpg",
    alt: "Tabora Mega Crusade 2026",
  },
  {
    src: "/missions/740303891_2596519964097029_2972628533712052577_n.jpg",
    alt: "Tabora Mega Crusade 2026 gathering",
  },
  {
    src: "/missions/744598093_1048237111480177_4253706830162427675_n.jpg",
    alt: "Tabora Mega Crusade 2026",
  },
];

export default function MissionsOutreach() {
  const { t } = useLanguage();

  return (
    <section
      id="missions"
      className="bg-slate-50 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">
            {t("missionsOutreach")}
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            {t("takingGospel")}
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            {t("missionsIntro")}
          </p>
        </div>

        {/* Tabora Mega Crusade */}
        <div className="mt-14 overflow-hidden rounded-[2rem] bg-slate-950 shadow-2xl">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr]">

            {/* Information */}
            <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
              <div className="inline-flex w-fit rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-200">
                {t("outreach2026")}
              </div>

              <h3 className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl">
                {t("taboraMegaCrusade")}
              </h3>

              <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">
                {t("taboraDate")}
              </p>

              <p className="mt-6 text-base leading-8 text-slate-300">
                {t("taboraDescription")}
              </p>

              {/* Impact */}
              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-2xl font-bold text-white">1,200+</p>
                  <p className="mt-1 text-xs leading-5 text-slate-400">
                    {t("respondedToGospel")}
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-2xl font-bold text-white">5</p>
                  <p className="mt-1 text-xs leading-5 text-slate-400">
                    {t("daysOfCrusade")}
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-2xl font-bold text-white">TZS 30M</p>
                  <p className="mt-1 text-xs leading-5 text-slate-400">
                    {t("crusadeBudget")}
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-2xl font-bold text-white">Tabora</p>
                  <p className="mt-1 text-xs leading-5 text-slate-400">
                    {t("location")}
                  </p>
                </div>
              </div>

              {/* Event links */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#missions-gallery"
                  className="rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-blue-50"
                >
                  {t("viewPhotos")}
                </a>

                <a
                  href="/giving"
                  className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  {t("supportMissions")}
                </a>
              </div>
            </div>

            {/* Main Image */}
            <div className="relative min-h-[420px] lg:min-h-full">
              <Image
                src={photos[0].src}
                alt={photos[0].alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 rounded-full border border-white/20 bg-black/40 px-4 py-2 text-xs font-semibold text-white backdrop-blur">
                {t("taboraMegaCrusade")}
              </div>
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div id="missions-gallery" className="mt-14">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
                {t("fromTheField")}
              </p>

              <h3 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">
                {t("momentsFromTabora")}
              </h3>
            </div>

            <p className="max-w-xl text-sm leading-6 text-slate-600">
              {t("fieldMomentsDescription")}
            </p>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {photos.map((photo) => (
              <div
                key={photo.src}
                className="group relative aspect-[4/3] overflow-hidden rounded-3xl bg-slate-200 shadow-sm"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-70" />

                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-sm font-semibold text-white">
                    {t("taboraMegaCrusade")}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Outreach Vision */}
        <div className="mt-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">
              {t("outreachVision")}
            </p>

            <h3 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              {t("preparingToReachMore")}
            </h3>

            <p className="mt-5 text-base leading-7 text-slate-600">
              {t("outreachVisionDescription")}
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-white p-7 text-center shadow-sm">
              <p className="text-4xl font-bold text-blue-700">3–5</p>
              <h4 className="mt-3 font-bold text-slate-950">
                {t("gospelMeetings")}
              </h4>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {t("gospelMeetingsDescription")}
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-7 text-center shadow-sm">
              <p className="text-4xl font-bold text-blue-700">2</p>
              <h4 className="mt-3 font-bold text-slate-950">
                {t("indoorSeminars")}
              </h4>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {t("indoorSeminarsDescription")}
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-7 text-center shadow-sm">
              <p className="text-4xl font-bold text-blue-700">10,000</p>
              <h4 className="mt-3 font-bold text-slate-950">
                {t("serviceCapacity")}
              </h4>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {t("serviceCapacityDescription")}
              </p>
            </div>
          </div>
        </div>

        {/* Equipment Project */}
        <div className="mt-10 rounded-[2rem] border border-blue-100 bg-blue-50 p-8 sm:p-10 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
                {t("missionsEquipmentProject")}
              </p>

              <h3 className="mt-3 text-2xl font-bold text-slate-950 sm:text-3xl">
                {t("preparingTools")}
              </h3>

              <p className="mt-4 max-w-3xl text-base leading-7 text-slate-700">
                {t("equipmentDescription")}
              </p>
            </div>

            <a
              href="/giving"
              className="inline-flex items-center justify-center rounded-full bg-blue-700 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-800"
            >
              {t("supportProject")}
            </a>
          </div>
        </div>

        {/* Share the Vision */}
        <div className="mt-10 overflow-hidden rounded-[2rem] bg-slate-950 px-8 py-10 text-center sm:px-12 sm:py-12">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">
            {t("shareVision")}
          </p>

          <h3 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            {t("greatCommission")}
          </h3>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-300">
            {t("greatCommissionDescription")}
          </p>

          <p className="mt-6 text-sm font-semibold text-blue-200">
            Matthew 28:19–20
          </p>

          <div className="mt-8">
            <a
              href="/giving"
              className="inline-flex rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-blue-50"
            >
              {t("supportMissions")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
