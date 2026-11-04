import { Icon } from "./Icon";
import { profile } from "@/data/portfolio";

const socials = [
  { icon: "github", href: profile.links.github, label: "GitHub" },
  { icon: "linkedin", href: profile.links.linkedin, label: "LinkedIn" },
  { icon: "mail", href: `mailto:${profile.email}`, label: "Email" },
  { icon: "x", href: profile.links.x, label: "X" },
  { icon: "leetcode", href: profile.links.leetcode, label: "LeetCode" },
];

const currentFocus = {
  building: [
    "Scalable Backend Systems",
    "AI-Based Applications"
  ],
  exploring: ["AI Agents", "System Design", "LangGraph", "LangChain"],
};

export function Hero() {
  return (
    <section
      id="top"
      className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.25fr_1fr] lg:py-28"
    >
      <div>
        <span className="inline-block rounded-full border border-line bg-surface px-3 py-1 text-xs text-white/85">
          {profile.role}
        </span>
        <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl xl:text-[3.4rem]">
          Hi, I&apos;m <span className="text-accent">{profile.name}</span>
        </h1>
        <p className="mt-4 text-lg font-medium sm:text-xl">{profile.tagline}</p>
        <p className="mt-4 max-w-xl leading-relaxed text-muted">{profile.intro}</p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-black transition hover:bg-accent-strong"
          >
            View Projects <Icon name="arrowRight" className="size-4" />
          </a>
          <a
            href={profile.resumeUrl}
            download
            className="flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 font-medium transition hover:border-accent hover:text-accent"
          >
            Download Resume <Icon name="download" className="size-4" />
          </a>
        </div>

        <div className="mt-8 flex gap-5">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className="text-white/80 transition hover:text-accent"
            >
              <Icon name={s.icon} className="size-5" />
            </a>
          ))}
        </div>
      </div>

      <div className="relative">
        <div className="absolute -inset-6 rounded-[2rem] bg-accent/10 blur-3xl" />
        <div className="glow relative overflow-hidden rounded-2xl bg-surface">
          <div className="flex gap-2 border-b border-line px-4 py-3">
            <span className="size-3 rounded-full bg-red-500" />
            <span className="size-3 rounded-full bg-yellow-400" />
            <span className="size-3 rounded-full bg-accent" />
          </div>
          <pre className="overflow-x-auto p-6 font-mono text-[13px] leading-7 text-white/90">
            <span className="text-accent/70">{"// Currently focused on"}</span>
            {"\n{\n"}
            {Object.entries(currentFocus).map(([key, values], i, all) => (
              <span key={key}>
                {"  "}
                <Key>&quot;{key}&quot;</Key>
                {": [\n"}
                {values.map((v, j) => (
                  <span key={v}>
                    {"    "}
                    <Str>&quot;{v}&quot;</Str>
                    {j < values.length - 1 ? ",\n" : "\n"}
                  </span>
                ))}
                {i < all.length - 1 ? "  ],\n" : "  ]\n"}
              </span>
            ))}
            {"}"}
          </pre>
        </div>
      </div>
    </section>
  );
}

function Key({ children }: { children: React.ReactNode }) {
  return <span className="text-accent">{children}</span>;
}

function Str({ children }: { children: React.ReactNode }) {
  return <span className="text-emerald-200">{children}</span>;
}
