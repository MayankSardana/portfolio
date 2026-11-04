import { Icon } from "./Icon";
import { profile } from "@/data/portfolio";

const strip = (url: string) => url.replace(/^https?:\/\//, "");

const channels = [
  { icon: "mail", label: profile.email, href: `mailto:${profile.email}` },
  { icon: "phone", label: profile.phone, href: `tel:${profile.phone.replace(/-/g, "")}` },
  { icon: "linkedin", label: strip(profile.links.linkedin).replace(/^www\./, ""), href: profile.links.linkedin },
  { icon: "github", label: strip(profile.links.github), href: profile.links.github },
  { icon: "x", label: strip(profile.links.x), href: profile.links.x },
  {
    icon: "leetcode",
    label: strip(profile.links.leetcode).replace(/\/$/, ""),
    href: profile.links.leetcode,
  },
  { icon: "mapPin", label: profile.location },
];

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20 sm:px-6">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <p className="section-label">Get in touch</p>
          <h2 className="section-title">Let&apos;s Work Together</h2>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-white/80">
            I&apos;m open to backend, platform, and AI engineering opportunities. Feel free to
            reach out!
          </p>
        </div>

        <ul className="space-y-3">
          {channels.map((c) => (
            <li key={c.icon}>
              {c.href ? (
                <a
                  href={c.href}
                  target="_blank"
                  rel="noreferrer"
                  className="card flex items-center gap-4 px-5 py-3 transition hover:border-accent/50"
                >
                  <Icon name={c.icon} className="size-5 shrink-0 text-accent" />
                  <span className="truncate font-medium">{c.label}</span>
                </a>
              ) : (
                <div className="card flex items-center gap-4 px-5 py-3">
                  <Icon name={c.icon} className="size-5 shrink-0 text-accent" />
                  <span className="truncate font-medium">{c.label}</span>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
