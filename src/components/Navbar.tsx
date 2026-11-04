"use client";

import { useState } from "react";
import { Icon } from "./Icon";
import { profile } from "@/data/portfolio";

const links = ["About", "Experience", "Projects", "Skills", "Contact"];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/60 bg-bg/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2 text-lg font-semibold">
          <Icon name="code" className="size-5 text-accent" />
          {profile.name}
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-sm text-white/80 transition hover:text-accent"
            >
              {l}
            </a>
          ))}
          <a
            href={profile.resumeUrl}
            download
            className="flex items-center gap-1.5 rounded-full border border-accent/70 px-4 py-1.5 text-sm font-medium text-accent transition hover:bg-accent/10"
          >
            Resume <Icon name="download" className="size-3.5" />
          </a>
        </div>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <Icon name={open ? "close" : "menu"} className="size-6" />
        </button>
      </nav>

      {open && (
        <div className="flex flex-col gap-1 border-t border-line px-4 pb-4 md:hidden">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="py-2 text-white/80 hover:text-accent"
            >
              {l}
            </a>
          ))}
          <a href={profile.resumeUrl} download className="py-2 text-accent">
            Download Resume
          </a>
        </div>
      )}
    </header>
  );
}
