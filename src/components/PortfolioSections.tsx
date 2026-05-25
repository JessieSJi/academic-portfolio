import { motion } from "framer-motion";
import { useState, type ReactNode } from "react";
import { useLocale } from "../i18n/LocaleContext";

function SectionShell({
  id,
  title,
  subtitle,
  showDivider = true,
  children,
}: {
  id: string;
  title: string;
  subtitle: string;
  showDivider?: boolean;
  children: ReactNode;
}) {
  return (
    <section id={id} className="section-anchor py-6 md:py-7 xl:py-8">
      <div className="mx-auto max-w-6xl px-4 min-[390px]:px-5 md:px-8 xl:px-10">
        <div
          className={`flex items-end justify-between gap-4 ${
            showDivider
              ? "mb-3 border-b border-[color:var(--border-soft)]/65 pb-2 md:mb-4"
              : "mb-1 pb-0 md:mb-1.5"
          }`}
        >
          <div>
            <p className="text-[11px] font-medium tracking-[0.18em] text-[color:var(--accent)] uppercase">
              {title}
            </p>
            {subtitle ? (
              <h2 className="mt-1 text-2xl font-semibold leading-tight text-[color:var(--text-primary)] sm:text-3xl">
                {subtitle}
              </h2>
            ) : null}
          </div>
        </div>
        {children}
      </div>
    </section>
  );
}

function AboutSection() {
  const { profile } = useLocale();
  const displayName = profile.name;

  return (
    <SectionShell
      id="关于我"
      title={profile.locale === "zh" ? "关于我" : "About"}
      subtitle={profile.about.heading}
      showDivider={false}
    >
      <div className="grid grid-cols-[minmax(0,1fr)_84px] items-center gap-3 min-[390px]:grid-cols-[minmax(0,1fr)_96px] min-[390px]:gap-4 md:grid-cols-[minmax(0,1fr)_132px] md:gap-5 xl:grid-cols-[minmax(0,1fr)_148px] xl:gap-6">
        <div>
          <h1 className="text-3xl font-semibold leading-[1.08] tracking-tight text-[color:var(--text-primary)] sm:text-4xl">
            <span className="inline-flex flex-wrap items-baseline gap-x-2 gap-y-1 sm:gap-x-2.5">
              <span className={profile.locale === "zh" ? "name-spaced-zh" : "name-spaced-en"}>
                {displayName}
              </span>
              <span className="text-sm font-medium text-[color:var(--text-primary)] sm:text-base">
                {profile.role}
              </span>
            </span>
          </h1>
          <div className="mt-1">
            <p className="text-xs text-[color:var(--text-secondary)] sm:text-sm">
              {profile.affiliation}
            </p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.45 }}
          className="relative mt-0.5 w-[84px] justify-self-end min-[390px]:mr-3 min-[390px]:w-24 md:mt-0 md:mr-5 md:w-32 xl:mr-6 xl:w-36"
        >
          <div className="pointer-events-none absolute -inset-1.5 rounded-full bg-linear-to-br from-cyan-300/40 via-violet-200/44 to-fuchsia-200/58 blur-[6px]" />
          <div className="relative aspect-square overflow-hidden rounded-full bg-[color:var(--surface-card)] shadow-[0_12px_26px_rgba(3,8,16,0.44)]">
            <img
              src="/profile.jpg"
              alt={profile.about.portraitAlt}
              className="h-full w-full object-cover object-[center_16%]"
              loading="eager"
              decoding="async"
            />
            <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-slate-900/10 via-transparent to-white/15" />
          </div>
        </motion.div>
      </div>

      <div className="mt-3.5 grid items-start gap-4 md:gap-5 lg:grid-cols-[minmax(0,1fr)_220px]">
        <div>
          <p className="text-sm leading-7 text-[color:var(--text-secondary)] sm:text-base">
            {profile.locale === "zh"
              ? `${profile.tagline}${profile.about.summary}`
              : `${profile.tagline} ${profile.about.summary}`}
          </p>
          <ul className="mt-3.5 space-y-2">
            {profile.about.highlights.map((item) => (
              <li key={item} className="flex gap-2.5 text-sm leading-6 text-[color:var(--text-secondary)]">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--accent-violet)]" />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-wrap gap-2">
            {profile.about.skillTags.map((tag) => (
              <div key={tag} className="skill-outline-chip rounded-full px-3 py-1.5 text-xs">
                {tag}
              </div>
            ))}
          </div>
        </div>
        <div className="grid gap-2.5 sm:grid-cols-1">
          {profile.about.stats.map((stat) => (
            <div key={stat.label} className="surface-card px-3.5 py-2.5">
              <p className="text-lg font-semibold text-[color:var(--accent-strong)]">{stat.value}</p>
              <p className="mt-0.5 text-xs text-[color:var(--text-muted)]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

function EducationSection() {
  const { profile } = useLocale();

  return (
    <SectionShell
      id="教育背景"
      title="教育背景"
      subtitle={profile.locale === "zh" ? "科研训练路径" : "Academic Path"}
    >
      <article className="surface-card px-4 py-3.5 sm:px-5 sm:py-4">
        <div className="grid gap-3 md:grid-cols-3 md:gap-4">
          {profile.education.map((item) => (
            <div key={item.id} className="rounded-lg bg-[color:var(--surface-soft)]/78 px-3 py-2.5 sm:py-3">
              <span className="text-xs tracking-wide text-[color:var(--accent)]">{item.period}</span>
              <h3 className="mt-1 text-base font-semibold text-[color:var(--text-primary)] sm:text-[17px]">
                {item.degree}
              </h3>
              <p className="mt-0.5 text-sm text-[color:var(--text-secondary)]">
                {item.school} · {item.location}
              </p>
              {item.detail && (
                <p className="mt-1.5 text-sm leading-5 text-[color:var(--text-secondary)]">{item.detail}</p>
              )}
            </div>
          ))}
        </div>
      </article>
    </SectionShell>
  );
}

function WorkSection() {
  const { profile } = useLocale();

  return (
    <SectionShell
      id="工作经历"
      title="工作经历"
      subtitle={profile.locale === "zh" ? "产业化工程实践" : "Industry Experience"}
    >
      <div className="space-y-3.5">
        {profile.work.map((item) => (
          <article key={item.id} className="surface-card p-4 sm:p-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="text-lg font-semibold text-[color:var(--text-primary)] sm:text-xl">{item.role}</h3>
              <span className="accent-chip rounded-full px-3 py-1 text-xs">
                {item.period}
              </span>
            </div>
            <p className="mt-1 text-sm text-[color:var(--text-secondary)]">
              {item.organization} · {item.location}
            </p>
            <p className="mt-3 text-sm leading-6 text-[color:var(--text-secondary)]">{item.summary}</p>
            <ul className="mt-3.5 space-y-2">
              {item.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-2.5 text-sm leading-6 text-[color:var(--text-secondary)]">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--accent-violet)]" />
                  {bullet}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}

function ProjectsSection() {
  const { profile } = useLocale();

  return (
    <SectionShell
      id="项目经历"
      title="项目经历"
      subtitle={profile.locale === "zh" ? "代表性项目" : "Selected Projects"}
    >
      <div className="grid gap-3.5 lg:grid-cols-3">
        {profile.projects.map((item) => (
          <article
            key={item.id}
            className="surface-card p-4 transition hover:-translate-y-0.5 hover:bg-[color:var(--surface-soft)]/82 sm:p-5"
          >
            <h3 className="text-base font-semibold text-[color:var(--text-primary)] sm:text-lg">
              {item.title}
            </h3>
            <p className="mt-1 text-sm text-[color:var(--text-muted)]">{item.role}</p>
            <p className="mt-2.5 text-sm leading-6 text-[color:var(--text-secondary)]">{item.summary}</p>
            <div className="mt-3.5 flex flex-wrap gap-2">
              {item.outcomes.map((outcome) => (
                <span key={outcome} className="surface-chip px-2.5 py-1 text-[11px]">
                  {outcome}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}

function PublicationsSection() {
  const { profile } = useLocale();
  const [showAllConference, setShowAllConference] = useState(false);
  const hasRealHref = (href?: string) =>
    typeof href === "string" &&
    href.trim().length > 0 &&
    /^https?:\/\//i.test(href) &&
    !href.includes("PLACEHOLDER");

  return (
    <SectionShell
      id="论文成果"
      title="论文成果"
      subtitle={profile.locale === "zh" ? "期刊与学术论文" : "Journal & Conference Papers"}
    >
      <div className="grid items-start gap-3.5 md:grid-cols-2">
        {(["期刊", "会议"] as const).map((kind) => (
          <article key={kind} className="surface-card flex h-full flex-col p-4 sm:p-5">
            {(() => {
              const entries = profile.publicationsPatents.filter((entry) => entry.type === kind);
              const visibleEntries =
                kind === "会议" && !showAllConference ? entries.slice(0, 3) : entries;
              const canToggleConference = kind === "会议" && entries.length > 3;

              return (
                <>
                  <div className="mb-3 flex items-center justify-between">
                    <h3 className="text-base font-semibold text-[color:var(--text-primary)]">{kind}</h3>
                    <span className="accent-chip rounded-full px-2.5 py-0.5 text-[11px]">
                      {entries.length}
                    </span>
                  </div>
                  <div className="space-y-2.5">
                    {visibleEntries.map((item, index) => (
                      <div
                        key={item.id}
                        className={`rounded-lg bg-[color:var(--surface-soft)]/74 px-2.5 py-2 ${
                          index > 0 ? "mt-1.5" : ""
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-xs tracking-wide text-[color:var(--accent)]">{item.year}</span>
                          <div className="flex flex-wrap justify-end gap-1.5">
                            {item.tags.map((tag) => (
                              <span
                                key={tag}
                                className="rounded-full bg-[color:var(--surface-chip)] px-2 py-0.5 text-[11px] text-[color:var(--text-muted)] shadow-[inset_0_0_0_1px_rgba(100,116,139,0.22)]"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                        <h4 className="mt-1.5 text-sm font-semibold leading-6 text-[color:var(--text-primary)]">
                          {hasRealHref(item.href) ? (
                            <a
                              href={item.href as string}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="transition hover:text-[color:var(--accent-strong)]"
                            >
                              {item.title}
                            </a>
                          ) : (
                            item.title
                          )}
                        </h4>
                        <p className="mt-1 text-xs text-[color:var(--text-secondary)]">{item.venue}</p>
                        <p className="mt-0.5 text-xs text-[color:var(--text-muted)]">{item.contributors}</p>
                      </div>
                    ))}
                    {entries.length === 0 && (
                      <p className="text-sm text-[color:var(--text-muted)]">
                        {profile.locale === "zh" ? "暂无条目" : "No entries yet"}
                      </p>
                    )}
                  </div>
                  {canToggleConference && (
                    <div className="mt-3.5 pt-1.5">
                      <button
                        type="button"
                        onClick={() => setShowAllConference((current) => !current)}
                        className="accent-link text-xs font-medium transition"
                      >
                        {showAllConference
                          ? profile.locale === "zh"
                            ? "收起"
                            : "Show less"
                          : profile.locale === "zh"
                            ? `展开更多（+${entries.length - 3}）`
                            : `Show more (+${entries.length - 3})`}
                      </button>
                    </div>
                  )}
                </>
              );
            })()}
          </article>
        ))}
      </div>
    </SectionShell>
  );
}

function ServiceSection() {
  const { profile } = useLocale();
  const categoryLabels = ["行业荣誉", "学术荣誉", "学术服务"] as const;

  return (
    <SectionShell
      id="服务与荣誉"
      title="服务与荣誉"
      subtitle={profile.locale === "zh" ? "行业认可" : "Industry Recognition"}
    >
      <article className="surface-card p-4 sm:p-5">
        <div className="grid gap-4 md:grid-cols-3 md:gap-5">
          {categoryLabels.map((label) => {
            const groupItems = profile.serviceHonors.filter((item) => item.category === label);

            return (
              <section key={label} className="min-w-0">
                <div className="mb-2.5 flex items-center justify-between gap-2 pb-0.5">
                  <h3 className="text-sm font-semibold text-[color:var(--text-primary)]">{label}</h3>
                  <span className="rounded-full bg-[color:var(--surface-chip)] px-2 py-0.5 text-[11px] text-[color:var(--text-muted)]">
                    {groupItems.length}
                  </span>
                </div>
                <ul>
                  {groupItems.map((item, index) => (
                    <li
                      key={item.id}
                      className={`rounded-lg px-2 py-1.5 text-xs leading-5 text-[color:var(--text-secondary)] ${
                        index > 0 ? "mt-1.5" : ""
                      }`}
                    >
                      <div className="flex items-start gap-2">
                        <span className="mt-0.5 shrink-0 rounded-full bg-[color:var(--surface-chip)] px-2 py-0.5 text-[11px] text-[color:var(--accent-strong)] shadow-[inset_0_0_0_1px_rgba(92,130,175,0.18)]">
                          {item.year}
                        </span>
                        <div className="min-w-0">
                          <p className="font-medium text-[color:var(--text-primary)]">{item.title}</p>
                          <p className="text-[color:var(--text-muted)]">{item.organization}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                  {groupItems.length === 0 && (
                    <li className="text-xs text-[color:var(--text-muted)]">
                      {profile.locale === "zh" ? "暂无条目" : "No entries yet"}
                    </li>
                  )}
                </ul>
              </section>
            );
          })}
        </div>
      </article>
    </SectionShell>
  );
}

function LinksSection() {
  const { profile } = useLocale();

  return (
    <SectionShell
      id="学术链接"
      title="学术链接"
      subtitle={profile.locale === "zh" ? "公开学术档案" : "Academic Links"}
    >
      <article className="surface-card p-3 sm:p-3.5">
        <div className="flex flex-wrap gap-2">
          {profile.links.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-w-[220px] grow items-center justify-between gap-2 rounded-lg bg-[color:var(--surface-soft)]/72 px-2.5 py-1.5 transition hover:-translate-y-0.5 hover:bg-[color:var(--surface-soft)]/92 hover:shadow-[0_0_0_1px_rgba(56,189,248,0.26),0_0_14px_rgba(56,189,248,0.14)] sm:min-w-[240px] md:grow-0"
            >
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-[color:var(--text-primary)] group-hover:text-[color:var(--accent-strong)] sm:text-base">
                  {item.label}
                </p>
                <p className="truncate text-[11px] text-[color:var(--text-muted)] sm:text-xs">{item.note}</p>
              </div>
              <span className="shrink-0 text-xs text-[color:var(--accent-violet-strong)]">
                {profile.locale === "zh" ? "打开 →" : "Open →"}
              </span>
            </a>
          ))}
        </div>
      </article>
    </SectionShell>
  );
}

export function PortfolioSections() {
  return (
    <>
      <AboutSection />
      <EducationSection />
      <WorkSection />
      <ProjectsSection />
      <PublicationsSection />
      <ServiceSection />
      <LinksSection />
    </>
  );
}
