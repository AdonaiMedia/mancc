"use client";

import { useLanguage } from "../i18n/LanguageProvider";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Introduction */}
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">
              {t("aboutOurChurch")}
            </p>

            <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl">
              {t("familyOfBelievers")}
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              {t("aboutDescription1")}
            </p>

            <p className="mt-4 max-w-2xl leading-7 text-gray-600">
              {t("aboutDescription2")}
            </p>
          </div>

          {/* Vision */}
          <div className="rounded-3xl bg-blue-950 p-8 text-white shadow-xl sm:p-10">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-xl">
              ✦
            </div>

            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-blue-200">
              {t("ourVision")}
            </p>

            <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
              {t("transformingLives")}
            </h3>

            <p className="mt-4 leading-7 text-blue-100">
              {t("visionDescription")}
            </p>
          </div>
        </div>

        {/* Mission */}
        <div className="mt-8 rounded-3xl border border-gray-200 bg-gray-50 p-8 sm:p-10">
          <div className="max-w-3xl">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-950 text-xl text-white">
              ✦
            </div>

            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-blue-700">
              {t("missionTitle")}
            </p>

            <h3 className="mt-3 text-2xl font-bold text-gray-900 sm:text-3xl">
              {t("missionHeading")}
            </h3>

            <p className="mt-4 leading-7 text-gray-600">
              {t("missionDescriptionAbout")}
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mt-20 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">
            {t("whatWeBelieve")}
          </p>

          <h3 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t("ourCoreValues")}
          </h3>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <ValueCard
              number="01"
              title={t("love")}
              description={t("loveDescription")}
            />

            <ValueCard
              number="02"
              title={t("truth")}
              description={t("truthDescription")}
            />

            <ValueCard
              number="03"
              title={t("mission")}
              description={t("missionValueDescription")}
            />

            <ValueCard
              number="04"
              title={t("service")}
              description={t("serviceDescription")}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ValueCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 text-left transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">
      <div className="text-sm font-bold tracking-[0.15em] text-blue-700">
        {number}
      </div>

      <h4 className="mt-4 text-lg font-bold text-gray-900">
        {title}
      </h4>

      <p className="mt-2 text-sm leading-6 text-gray-600">
        {description}
      </p>
    </div>
  );
}
