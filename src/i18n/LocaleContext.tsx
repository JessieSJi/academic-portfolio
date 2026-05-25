import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { profileEn, profileZh, type Profile } from "../data/profile";

export type Locale = "zh" | "en";

const STORAGE_KEY = "portfolio-locale";

function readInitialLocale(): Locale {
  if (typeof window === "undefined") return "zh";
  const params = new URLSearchParams(window.location.search);
  const q = params.get("lang");
  if (q === "en" || q === "zh") return q;
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === "en" || stored === "zh") return stored;
  return "zh";
}

interface LocaleContextValue {
  locale: Locale;
  profile: Profile;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(readInitialLocale);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    localStorage.setItem(STORAGE_KEY, next);
    document.documentElement.lang = next === "zh" ? "zh-CN" : "en";
    document.title =
      next === "zh"
        ? "季爽 · 学术主页"
        : "Shuang Ji · Academic Portfolio";
  }, []);

  useEffect(() => {
    setLocale(locale);
  }, [locale, setLocale]);

  const profile = locale === "zh" ? profileZh : profileEn;

  const value = useMemo(
    () => ({
      locale,
      profile,
      setLocale,
      toggleLocale: () => setLocale(locale === "zh" ? "en" : "zh"),
    }),
    [locale, profile, setLocale],
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useLocale must be used within LocaleProvider");
  }
  return ctx;
}
