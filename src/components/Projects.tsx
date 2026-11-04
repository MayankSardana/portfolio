import { Icon } from "./Icon";
import { projects } from "@/data/portfolio";

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20 sm:px-6">
      <p className="section-label">Featured projects</p>
      <h2 className="section-title">Things I&apos;ve Built</h2>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {projects.map((p) => (
          <a
            key={p.name}
            href={p.url}
            target="_blank"
            rel="noreferrer"
            className="card group flex gap-5 p-6 transition md:last:odd:col-span-2 hover:-translate-y-0.5 hover:border-accent/50"
          >
            <div className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-surface text-accent">
              <Icon name={p.icon} className="size-7" />
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <Icon
                  name="external"
                  className="size-4 shrink-0 text-white/70 transition group-hover:text-accent"
                />
              </div>
              <p className="mt-1 text-sm leading-relaxed text-muted">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-line bg-surface px-3 py-1 text-xs text-white/85"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
