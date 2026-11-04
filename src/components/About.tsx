import Image from "next/image";
import { Icon } from "./Icon";
import { highlights, profile } from "@/data/portfolio";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20 sm:px-6">
      <div className="grid items-center gap-12 lg:grid-cols-[1.6fr_1fr]">
        <div>
          <p className="section-label">About me</p>
          <h2 className="section-title">A bit about me</h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/80">{profile.about}</p>

          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            {highlights.map((h) => (
              <div key={h.title} className="flex gap-4">
                <Icon name={h.icon} className="size-8 shrink-0 text-accent" />
                <div>
                  <h3 className="font-semibold">{h.title}</h3>
                  <p className="mt-1 text-sm text-muted">{h.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xs lg:max-w-none">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent/40 to-transparent blur-2xl" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-accent/30 bg-gradient-to-br from-emerald-900/60 to-surface">
            <Image
              src={profile.photo}
              alt={profile.name}
              fill
              unoptimized={profile.photo.endsWith(".svg")}
              sizes="(min-width: 1024px) 320px, 80vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
