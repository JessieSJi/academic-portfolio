import { useLocale } from "../i18n/LocaleContext";

export function Footer() {
  const { profile } = useLocale();
  const year = new Date().getFullYear();

  return (
    <footer className="mt-2 border-t border-[color:var(--border-soft)]/70 bg-[color:var(--surface-card)]/80 py-5 sm:py-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 text-sm text-[color:var(--text-secondary)] min-[390px]:px-5 sm:flex-row md:px-8 xl:px-10">
        <p>
          © {year} {profile.name}
        </p>
        <p className="text-xs tracking-wide text-[color:var(--text-muted)]">{profile.footer}</p>
      </div>
    </footer>
  );
}
