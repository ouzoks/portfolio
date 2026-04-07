import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { en } from "./messages/en";
import { tr } from "./messages/tr";
import type { Messages } from "./types";

const dictionaries = {
  en,
  tr,
} as const;

export type Locale = keyof typeof dictionaries;

type I18nContextValue = {
  locale: Locale;
  dictionary: Messages;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
};

const I18nContext = createContext<I18nContextValue | null>(null);

function getByPath(source: Record<string, unknown>, key: string): string | undefined {
  const value = key.split(".").reduce<unknown>((acc, part) => {
    if (acc && typeof acc === "object" && part in acc) {
      return (acc as Record<string, unknown>)[part];
    }

    return undefined;
  }, source);

  return typeof value === "string" ? value : undefined;
}

type I18nProviderProps = {
  children: ReactNode;
  locale?: Locale;
};

export function I18nProvider({ children, locale = "tr" }: I18nProviderProps) {
  const [currentLocale, setCurrentLocale] = useState<Locale>(() => {
    if (typeof window === "undefined") {
      return locale;
    }

    const storedLocale = window.localStorage.getItem("portfolio-locale");
    return storedLocale === "tr" || storedLocale === "en" ? storedLocale : locale;
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("portfolio-locale", currentLocale);
      document.documentElement.lang = currentLocale;
    }
  }, [currentLocale]);

  const dictionary = dictionaries[currentLocale];
  const fallbackDictionary = dictionaries.tr;
  const value = useMemo<I18nContextValue>(
    () => ({
      locale: currentLocale,
      dictionary,
      setLocale: setCurrentLocale,
      t: (key) =>
        getByPath(dictionary as Record<string, unknown>, key) ??
        getByPath(fallbackDictionary as Record<string, unknown>, key) ??
        key,
    }),
    [currentLocale, dictionary, fallbackDictionary],
  );

  return (
    <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);

  if (!context) {
    throw new Error("useI18n must be used within I18nProvider");
  }

  return context;
}
