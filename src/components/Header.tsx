import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useLocale } from "../i18n/LocaleContext";
import { useActiveSection } from "../hooks/useActiveSection";

export function Header() {
  const { profile, locale, toggleLocale } = useLocale();
  const active = useActiveSection(profile.navItems.map((n) => n.id));
  const [open, setOpen] = useState(false);
  const homeSection = profile.navItems[0]?.id;

  return (
    <motion.header
      initial={{ y: -12, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 border-b border-[color:var(--border-soft)]/70 bg-white/88 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 min-[390px]:px-5 md:h-15 md:px-8 xl:px-10">
        <a
          href={homeSection ? `#${homeSection}` : "#"}
          className="inline-flex items-center rounded-md transition hover:opacity-90 focus-visible:outline-none"
          onClick={() => setOpen(false)}
          aria-label={`${profile.name} home`}
        >
          <img
            src="/logo.svg"
            alt="Shuang Ji RF Academic logo"
            className="h-8 w-auto min-[390px]:h-8.5 md:h-9"
          />
          <span className="sr-only">{profile.name}</span>
        </a>
        <nav className="hidden items-center gap-1 md:flex" aria-label="主导航">
          {profile.navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`rounded-full px-3 py-1.5 text-xs tracking-wide transition ${
                active === item.id
                  ? "bg-[color:var(--accent-soft)] text-[color:var(--accent-strong)]"
                  : "text-[color:var(--text-secondary)] hover:bg-[color:var(--surface-soft)] hover:text-[color:var(--accent-strong)]"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={toggleLocale}
            className="rounded-full bg-[color:var(--surface-chip)] px-3 py-1 text-[11px] font-semibold tracking-[0.12em] text-[color:var(--accent-strong)] transition hover:bg-[color:var(--accent-soft)]"
            aria-label={locale === "zh" ? "Switch to English" : "切换中文"}
          >
            {locale === "zh" ? "EN" : "中文"}
          </button>
          <button
            type="button"
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-[color:var(--surface-chip)] text-[color:var(--text-secondary)] transition hover:bg-[color:var(--surface-soft)] hover:text-[color:var(--accent-strong)] md:hidden"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
              aria-hidden
            >
              {open ? (
                <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="overflow-hidden border-t border-[color:var(--border-soft)]/70 bg-white/96 md:hidden"
            aria-label="Mobile"
          >
            <ul className="flex flex-col gap-1 px-4 py-3 min-[390px]:px-5">
              {profile.navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={`block rounded-xl px-3 py-2.5 text-sm ${
                      active === item.id
                        ? "bg-[color:var(--accent-soft)] text-[color:var(--accent-strong)]"
                        : "text-[color:var(--text-secondary)] hover:bg-[color:var(--surface-soft)] hover:text-[color:var(--accent-strong)]"
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
