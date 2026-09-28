export const locales = ["sw", "en", "fr", "es"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "sw";

export const localeLabels: Record<Locale, string> = {
  sw: "Kiswahili",
  en: "English",
  fr: "Français",
  es: "Español",
};

export const localeFlags: Record<Locale, string> = {
  sw: "🇹🇿",
  en: "🇬🇧",
  fr: "🇫🇷",
  es: "🇪🇸",
};
