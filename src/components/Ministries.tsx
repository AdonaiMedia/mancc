"use client";

import Image from "next/image";
import { useLanguage } from "../i18n/LanguageProvider";

const ministries = [
  {
    icon: "cross",
    titleKey: "evangelismMissions",
    descriptionKey: "evangelismMissionsDescription",
    featured: true,
    href: "/ministries/evangelism",
    linkKey: "exploreMissions",
  },
  {
    icon: "men",
    titleKey: "mensFellowship",
    descriptionKey: "mensFellowshipDescription",
    logo: "/ministries/cmf-logo.png",
  },
  {
    icon: "women",
    titleKey: "womensFellowship",
    descriptionKey: "womensFellowshipDescription",
    logo: "/ministries/wwk-logo.png",
  },
  {
    icon: "youth",
    titleKey: "youthMinistry",
    descriptionKey: "youthMinistryDescription",
    logo: "/ministries/ca-logo.jpg",
  },
  {
    icon: "children",
    titleKey: "childrenStudents",
    descriptionKey: "childrenStudentsDescription",
    logo: "/ministries/children-logo.jpg",
  },
  {
    icon: "prayer",
    titleKey: "prayerMinistry",
    descriptionKey: "prayerMinistryDescription",
  },
];

function MinistryIcon({ type }: { type: string }) {
  const common =
    "h-7 w-7 fill-none stroke-current stroke-2 stroke-linecap-round stroke-linejoin-round";

  if (type === "cross") {
    return (
      <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
        <path d="M9 3h6v6h4v4h-4v8H9v-8H5V9h4V3Z" />
      </svg>
    );
  }

  if (type === "men") {
    return (
      <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
        <circle cx="9" cy="7" r="3" />
        <path d="M3.5 21a5.5 5.5 0 0 1 11 0" />
        <circle cx="17.5" cy="8" r="2.5" />
        <path d="M15 14.5a4.5 4.5 0 0 1 5.5 4.5" />
      </svg>
    );
  }

  if (type === "women") {
    return (
      <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
        <circle cx="12" cy="7" r="4" />
        <path d="M6 21a6 6 0 0 1 12 0" />
        <path d="M9 21h6" />
      </svg>
    );
  }

  if (type === "youth") {
    return (
      <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
        <circle cx="12" cy="7" r="3" />
        <path d="M6 21a6 6 0 0 1 12 0" />
        <path d="m16 3 1.5 2L20 6l-2.5 1L16 9l-.5-2L13 6l2.5-1L16 3Z" />
      </svg>
    );
  }

  if (type === "children") {
    return (
      <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
        <circle cx="12" cy="7" r="3" />
        <path d="M7 21a5 5 0 0 1 10 0" />
        <path d="M5 15a3 3 0 0 1 3-3" />
        <path d="M19 15a3 3 0 0 0-3-3" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
      <path d="M12 21V11" />
      <path d="M7 16h10" />
      <path d="M8 5h8" />
      <path d="M10 3h4" />
      <path d="M5 11a7 7 0 0 1 14 0" />
    </svg>
  );
}

export default function Ministries() {
  const { t } = useLanguage();

  return (
    <section id="ministries" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-700">
            {t("ourMinistries")}
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            {t("servingGodPeople")}
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            {t("ministriesDescription")}
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ministries.map((ministry) => (
            <div
              key={ministry.titleKey}
              className={`group rounded-2xl border p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl ${
                ministry.featured
                  ? "border-blue-200 bg-blue-50/60 shadow-md lg:col-span-2"
                  : "border-gray-200 bg-white hover:border-blue-200"
              }`}
            >
              {ministry.logo ? (
                <div className="mb-5 flex h-20 items-center justify-start">
                  <Image
                    src={ministry.logo}
                    alt={`${t(ministry.titleKey)} logo`}
                    width={150}
                    height={80}
                    className={`w-auto object-contain object-left ${
                      ministry.icon === "children"
                        ? "h-24 max-w-[210px]"
                        : "h-16 max-w-[150px]"
                    }`}
                  />
                </div>
              ) : (
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl transition ${
                    ministry.featured
                      ? "bg-blue-900 text-white group-hover:bg-blue-800"
                      : "bg-blue-50 text-blue-900 group-hover:bg-blue-900 group-hover:text-white"
                  }`}
                >
                  <MinistryIcon type={ministry.icon} />
                </div>
              )}

              <h3 className="text-xl font-bold text-gray-900">
                {t(ministry.titleKey)}
              </h3>

              <p className="mt-3 max-w-2xl leading-7 text-gray-600">
                {t(ministry.descriptionKey)}
              </p>

              {ministry.href && ministry.linkKey ? (
                <a
                  href={ministry.href}
                  className="mt-5 inline-flex items-center font-semibold text-blue-900 transition hover:text-blue-700"
                >
                  {t(ministry.linkKey)}
                  <span className="ml-2" aria-hidden="true">
                    →
                  </span>
                </a>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
