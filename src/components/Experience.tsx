import Image from "next/image";
import { experience } from "@/data/portfolio";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20 sm:px-6">
      <p className="section-label">Experience</p>
      <h2 className="section-title">My Professional Journey</h2>

      <ol className="relative mt-12 ml-1.5 border-l border-accent/40">
        {experience.map((job) => (
          <li key={`${job.company}-${job.period}`} className="relative pb-12 pl-8 last:pb-0 sm:pl-10">
            <span className="absolute -left-[7px] top-2 size-3.5 rounded-full bg-accent shadow-[0_0_12px_2px_rgb(74_222_128/0.6)]" />
            <div className="flex flex-col gap-5 sm:flex-row">
              <div
                className={`relative size-14 shrink-0 overflow-hidden rounded-xl border border-line ${
                  job.logoFill ? "bg-black" : "bg-white"
                }`}
              >
                <Image
                  src={job.logo}
                  alt={`${job.company} logo`}
                  fill
                  sizes="56px"
                  className={job.logoFill ? "object-cover" : "object-contain p-1"}
                />
              </div>
              <div className="flex-1">
                <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                  <h3 className="text-lg font-semibold">{job.company}</h3>
                  <span className="text-sm text-muted">{job.period}</span>
                </div>
                <p className="text-accent">{job.role}</p>
                <p className="mt-0.5 text-sm text-muted">{job.meta}</p>
                <ul className="mt-3 list-disc space-y-1.5 pl-5 text-white/80 marker:text-white/50">
                  {job.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
