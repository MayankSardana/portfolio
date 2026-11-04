import type { SVGProps } from "react";

const paths: Record<string, React.ReactNode> = {
  code: <path d="m16 18 6-6-6-6M8 6l-6 6 6 6" />,
  arrowRight: <path d="M5 12h14m-6-6 6 6-6 6" />,
  arrowUpRight: <path d="M7 17 17 7M7 7h10v10" />,
  download: <path d="M12 3v12m-5-5 5 5 5-5M5 21h14" />,
  external: (
    <path d="M14 4h6v6m0-6L10 14M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  github: (
    <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
  ),
  linkedin: (
    <>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </>
  ),
  leetcode: (
    <path d="M13.5 3 6 10.6a2 2 0 0 0 0 2.8l5 5.1a2 2 0 0 0 2.8 0L16 16.3M8 12h10M13.5 3 16 5.5" />
  ),
  server: (
    <>
      <rect x="3" y="4" width="18" height="7" rx="1.5" />
      <rect x="3" y="13" width="18" height="7" rx="1.5" />
      <path d="M7 7.5h.01M7 16.5h.01M11 7.5h6M11 16.5h6" />
    </>
  ),
  sparkles: (
    <path d="M10 3 11.8 8.2 17 10l-5.2 1.8L10 17l-1.8-5.2L3 10l5.2-1.8zM18 15l.9 2.1L21 18l-2.1.9L18 21l-.9-2.1L15 18l2.1-.9zM18 2l.6 1.4L20 4l-1.4.6L18 6l-.6-1.4L16 4l1.4-.6z" />
  ),
  rocket: (
    <>
      <path d="M4.5 16.5c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.7-.8.7-2.1-.1-2.9a2.2 2.2 0 0 0-2.9-.1z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-4A12.9 12.9 0 0 1 22 2c0 2.7-.8 7.5-6 11a22.4 22.4 0 0 1-4 2z" />
      <path d="M9 12H4s.6-3 2-4c1.6-1.1 5 0 5 0M12 15v5s3-.6 4-2c1.1-1.6 0-5 0-5" />
    </>
  ),
  bot: (
    <>
      <rect x="4" y="8" width="16" height="12" rx="3" />
      <path d="M12 4v4M9 13v1M15 13v1M2 13v3M22 13v3" />
      <circle cx="12" cy="3.5" r="1" />
    </>
  ),
  cart: (
    <>
      <circle cx="9" cy="20" r="1.3" />
      <circle cx="18" cy="20" r="1.3" />
      <path d="M2 3h3l2.7 12.4a2 2 0 0 0 2 1.6h8.6a2 2 0 0 0 2-1.5L22 8H6" />
    </>
  ),
  layers: (
    <path d="m12 2 10 5-10 5L2 7zM2 12l10 5 10-5M2 17l10 5 10-5" />
  ),
  leaf: (
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.2 2 8 0 5.5-4.8 10-10 10zM2 21c0-3 1.9-5.4 5.1-6C9.5 14.5 12 13 13 12" />
  ),
  cube: (
    <path d="m12 2 9 5v10l-9 5-9-5V7zM3 7l9 5 9-5M12 12v10M7.5 4.5l9 5" />
  ),
  database: (
    <>
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v14c0 1.7 4 3 9 3s9-1.3 9-3V5M3 12c0 1.7 4 3 9 3s9-1.3 9-3" />
    </>
  ),
  graph: (
    <>
      <circle cx="12" cy="5" r="2.5" />
      <circle cx="5" cy="19" r="2.5" />
      <circle cx="19" cy="19" r="2.5" />
      <path d="m10.8 7.2-4.6 9.6M13.2 7.2l4.6 9.6M7.5 19h9" />
    </>
  ),
  java: (
    <path d="M8.5 17.5s-1 .6.7.8c2 .2 3.1.2 5.3-.2 0 0 .6.4 1.4.7-5 2.1-11.3-.1-7.4-1.3zM7.9 15s-1.1.8.6 1c2.2.2 4 .2 7-.3 0 0 .4.4 1.1.7-6.3 1.8-13.2.1-8.7-1.4zM13 10.3c1.2 1.4-.3 2.7-.3 2.7s3.1-1.6 1.7-3.6c-1.3-1.9-2.4-2.8 3.2-6.1 0 0-8.8 2.2-4.6 7zM17.7 20.4s.7.6-.8 1c-2.9.9-12 1.1-14.5 0-.9-.4.8-.9 1.3-1h.8c-1-.7-6.3 1.3-2.7 1.9 9.8 1.6 17.9-.7 15.9-1.9zM9.4 12.3s-4.5 1.1-1.6 1.5c1.2.2 3.7.1 5.9-.1 1.9-.2 3.7-.5 3.7-.5l-1.1.6c-4.5 1.2-13.3.6-10.8-.6 2.1-1 3.9-.9 3.9-.9zM16.5 16.2c4.6-2.4 2.5-4.7 1-4.4-.4.1-.5.1-.5.1s.1-.2.4-.3c2.9-1 5.2 3.1-1 4.7l.1-.1zM14.2 1s2.6 2.6-2.5 6.6c-4.1 3.2-.9 5.1 0 7.2-2.4-2.1-4.1-4-3-5.7 1.7-2.5 6.3-3.7 5.5-8.1z" />
  ),
  spring: (
    <>
      <path d="M20.5 3.5C21 9 20 13 17 16.5s-8 4.5-11.5 3C2 18 2 13 4.5 9.5S12 4 20.5 3.5z" />
      <path d="M6 18c2-4 6-8 11-10" />
    </>
  ),
  docker: (
    <>
      <path d="M2 12h17c1.2 0 2-.6 2.5-1.5.5.3 1 .8 1 1.5-1 .2-1.6.6-2 1.5C19 18 15 20 10 20c-4.5 0-7.5-2.5-8-8z" />
      <path d="M5 9h3v3H5zM8 9h3v3H8zM11 9h3v3h-3zM8 6h3v3H8zM11 6h3v3h-3zM14 9h3v3h-3zM11 3h3v3h-3z" />
    </>
  ),
  react: (
    <>
      <circle cx="12" cy="12" r="1.8" />
      <ellipse cx="12" cy="12" rx="10" ry="4" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
    </>
  ),
  aws: (
    <>
      <path d="M3 15c5 3.5 13 3.5 18 0M18 13.5l3 1.5-1.5 3" />
      <text x="12" y="11" textAnchor="middle" fontSize="8.5" fontWeight="700" fill="currentColor" stroke="none" fontFamily="sans-serif">aws</text>
    </>
  ),
  x: (
    <path
      fill="currentColor"
      stroke="none"
      d="M17.75 3h3.07l-6.7 7.66L22 21h-6.17l-4.83-6.32L5.47 21H2.4l7.17-8.2L2 3h6.33l4.37 5.78zm-1.08 16.17h1.7L7.4 4.73H5.58z"
    />
  ),
  phone: (
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
  ),
  mapPin: (
    <>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
      <circle cx="12" cy="10" r="3" />
    </>
  ),
  menu:<path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
};

export type IconName = keyof typeof paths;

export function Icon({ name, ...props }: { name: string } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}
