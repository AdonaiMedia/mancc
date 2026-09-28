"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import {
  locales,
  localeLabels,
  localeFlags,
  type Locale,
} from "../i18n/config";
import { useLanguage } from "../i18n/LanguageProvider";

const navigation = [
  { key: "home", href: "/" },
  { key: "about", href: "/about" },
  { key: "ministries", href: "/#ministries" },
  { key: "evangelismMissions", href: "/ministries/evangelism" },
  { key: "churchBuilding", href: "/church-building" },
  { key: "sermons", href: "/sermons" },
  { key: "events", href: "/events" },
  { key: "contact", href: "/contact" },
];

const navigationTranslations: Record<
  string,
  Record<Locale, string>
> = {
  home: {
    sw: "Mwanzo",
    en: "Home",
    fr: "Accueil",
    es: "Inicio",
  },
  about: {
    sw: "Kuhusu Sisi",
    en: "About",
    fr: "À propos",
    es: "Nosotros",
  },
  ministries: {
    sw: "Huduma",
    en: "Ministries",
    fr: "Ministères",
    es: "Ministerios",
  },
  evangelismMissions: {
    sw: "Uinjilisti na Misheni",
    en: "Evangelism & Missions",
    fr: "Évangélisation et Missions",
    es: "Evangelismo y Misiones",
  },
  churchBuilding: {
    sw: "Ujenzi wa Kanisa",
    en: "Church Building",
    fr: "Construction de l'Église",
    es: "Construcción de la Iglesia",
  },
  sermons: {
    sw: "Mahubiri",
    en: "Sermons",
    fr: "Prédications",
    es: "Predicaciones",
  },
  events: {
    sw: "Matukio",
    en: "Events",
    fr: "Événements",
    es: "Eventos",
  },
  contact: {
    sw: "Mawasiliano",
    en: "Contact",
    fr: "Contact",
    es: "Contacto",
  },
};

export default function Navbar() {
  const { locale, setLocale, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);

  const translateNavigation = (key: string) =>
    navigationTranslations[key]?.[locale] ?? key;

  const handleLocaleChange = (nextLocale: Locale) => {
    setLocale(nextLocale);
    setLanguageOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/80 bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link
          href="/"
          className="shrink-0"
          onClick={() => setMenuOpen(false)}
        >
          <div>
            <h1 className="text-xl font-bold tracking-[0.08em] text-blue-950">
              MAGOMENI
            </h1>
            <p className="text-[9px] font-semibold tracking-[0.16em] text-gray-500 sm:text-[10px]">
              ALL NATIONS CHRISTIAN CENTRE
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-4 lg:flex xl:gap-5">
          {navigation.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className="text-sm font-medium text-gray-700 transition hover:text-blue-900"
            >
              {translateNavigation(item.key)}
            </Link>
          ))}

          <div className="relative">
            <button
              type="button"
              aria-haspopup="listbox"
              aria-expanded={languageOpen}
              onClick={() => setLanguageOpen((open) => !open)}
              className="flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2 text-sm font-medium text-gray-700 transition hover:border-blue-300 hover:text-blue-900"
            >
              <span>{localeFlags[locale]}</span>
              <span>{localeLabels[locale]}</span>
              <ChevronDown
                className={`h-4 w-4 transition ${
                  languageOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {languageOpen && (
              <div
                role="listbox"
                className="absolute right-0 mt-2 w-44 overflow-hidden rounded-xl border border-gray-200 bg-white p-1 shadow-lg"
              >
                {locales.map((item) => (
                  <button
                    key={item}
                    type="button"
                    role="option"
                    aria-selected={locale === item}
                    onClick={() => handleLocaleChange(item)}
                    className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm transition ${
                      locale === item
                        ? "bg-blue-50 font-semibold text-blue-900"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    <span>{localeFlags[item]}</span>
                    <span>{localeLabels[item]}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/giving"
            className="rounded-lg bg-blue-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-800"
          >
            {t("giving")}
          </Link>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <div className="relative">
            <button
              type="button"
              aria-haspopup="listbox"
              aria-expanded={languageOpen}
              onClick={() => setLanguageOpen((open) => !open)}
              className="flex items-center gap-1 rounded-lg border border-gray-200 px-2.5 py-2 text-sm"
            >
              <span>{localeFlags[locale]}</span>
              <ChevronDown
                className={`h-4 w-4 transition ${
                  languageOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {languageOpen && (
              <div
                role="listbox"
                className="absolute right-0 mt-2 w-44 overflow-hidden rounded-xl border border-gray-200 bg-white p-1 shadow-lg"
              >
                {locales.map((item) => (
                  <button
                    key={item}
                    type="button"
                    role="option"
                    aria-selected={locale === item}
                    onClick={() => handleLocaleChange(item)}
                    className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm transition ${
                      locale === item
                        ? "bg-blue-50 font-semibold text-blue-900"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    <span>{localeFlags[item]}</span>
                    <span>{localeLabels[item]}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
            className="rounded-lg border border-gray-200 p-2 text-gray-700"
          >
            {menuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-gray-200 bg-white lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-6 py-4">
            {navigation.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-gray-100 py-3 text-sm font-medium text-gray-700 transition hover:text-blue-900"
              >
                {translateNavigation(item.key)}
              </Link>
            ))}

            <Link
              href="/giving"
              onClick={() => setMenuOpen(false)}
              className="mt-4 rounded-lg bg-blue-900 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-blue-800"
            >
              {t("giving")}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}


