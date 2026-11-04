import { Icon } from "./Icon";
import { skills } from "@/data/portfolio";

const iconColors: Record<string, string> = {
  java: "text-white",
  spring: "text-accent",
  code: "text-accent",
  database: "text-indigo-300",
  aws: "text-white",
  layers: "text-orange-300",
  sparkles: "text-violet-400",
  graph: "text-accent",
};

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20 sm:px-6">
      <p className="section-label">Technical skills</p>
      <h2 className="section-title">My Toolkit</h2>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((group) => (
          <div
            key={group.title}
            className="card p-5 transition hover:-translate-y-0.5 hover:border-accent/50"
          >
            <div className="flex items-center gap-3">
              <Icon name={group.icon} className={`size-7 shrink-0 ${iconColors[group.icon]}`} />
              <h3 className="font-semibold">{group.title}</h3>
            </div>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-line bg-surface px-3 py-1 text-sm text-white/85"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
