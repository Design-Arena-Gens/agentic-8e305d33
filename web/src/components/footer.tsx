import type { Locale, SiteCopy } from "@/lib/content";
import { createHref } from "@/lib/routing";
import Link from "next/link";

type FooterProps = {
  locale: Locale;
  footer: SiteCopy["footer"];
};

export function Footer({ locale, footer }: FooterProps) {
  return (
    <footer className="relative mt-16 border-t border-white/5 bg-slate-900/80">
      <div className="pointer-events-none absolute inset-x-0 -top-24 mx-auto h-36 w-[70%] rounded-full bg-gradient-to-r from-cyan-400/30 via-indigo-400/20 to-purple-500/25 blur-3xl" />
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-12 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl space-y-3">
          <h2 className="text-lg font-semibold tracking-tight text-white">
            {footer.tagline}
          </h2>
          <p className="text-sm text-white/70">{footer.address}</p>
          <p className="text-sm text-white/70">
            <Link href={`mailto:${footer.email.replace("mailto:", "")}`}>
              {footer.email}
            </Link>
          </p>
          <div className="flex flex-wrap gap-3 text-sm text-white/70">
            {footer.phones.map((phone) => (
              <Link key={phone} href={`tel:${phone.replace(/[^+\d]/g, "")}`}>
                {phone}
              </Link>
            ))}
          </div>
        </div>
        <div className="space-y-4 text-sm text-white/60">
          <Link
            href={createHref(locale, "/contact")}
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 font-semibold text-white transition hover:bg-white/20"
          >
            <span>Contact FinBridge</span>
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m7.5 7.5 9 9m0-9v9h-9"
              />
            </svg>
          </Link>
          <p className="text-xs text-white/40">{footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}
