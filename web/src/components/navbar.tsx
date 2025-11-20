"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import clsx from "clsx";
import type { Locale } from "@/lib/content";
import type { NavItem } from "@/lib/content";
import { createHref } from "@/lib/routing";
import { LanguageSwitcher } from "./language-switcher";

type NavbarProps = {
  locale: Locale;
  nav: NavItem[];
  tagline: string;
};

export function Navbar({ locale, nav, tagline }: NavbarProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-slate-900/70 border-b border-white/5">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3"
        >
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-indigo-400 via-sky-500 to-purple-500 text-lg font-semibold text-white shadow-[0_0_25px_rgba(99,102,241,0.35)]">
            FB
          </span>
          <div className="flex flex-col">
            <Link
              href={`/${locale}`}
              className="text-lg font-semibold tracking-tight text-white"
            >
              FinBridge
            </Link>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/60">
              {tagline}
            </span>
          </div>
        </motion.div>

        <nav className="hidden items-center gap-6 text-sm font-medium text-white/80 lg:flex">
          {nav.map((item) => (
            <div key={item.label} className="group relative">
              <Link
                href={createHref(locale, item.slug)}
                className={clsx(
                  "rounded-full px-4 py-2 transition-colors",
                  item.children
                    ? "bg-white/5 hover:bg-white/15"
                    : "hover:bg-white/10"
                )}
              >
                {item.label}
              </Link>
              {item.children && (
                <div className="pointer-events-none absolute left-1/2 top-12 hidden w-56 -translate-x-1/2 flex-col gap-1 rounded-2xl bg-slate-900/95 p-3 text-sm opacity-0 shadow-2xl ring-1 ring-white/10 transition-all group-hover:pointer-events-auto group-hover:block group-hover:opacity-100">
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      href={createHref(locale, child.slug)}
                      className="rounded-xl px-3 py-2 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <LanguageSwitcher locale={locale} />
        </nav>

        <div className="flex items-center gap-3 lg:hidden">
          <LanguageSwitcher locale={locale} compact />
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            aria-label="Toggle menu"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      <motion.div
        className="lg:hidden"
        initial={false}
        animate={open ? "open" : "closed"}
        variants={{
          open: { height: "auto", opacity: 1 },
          closed: { height: 0, opacity: 0 },
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col gap-3 border-t border-white/5 bg-slate-900/90 px-4 pb-6 pt-4 text-white/80">
          {nav.map((item) => (
            <div key={item.label} className="flex flex-col gap-2">
              <Link
                href={createHref(locale, item.slug)}
                onClick={() => setOpen(false)}
                className="rounded-2xl bg-white/5 px-4 py-3 text-base font-semibold text-white"
              >
                {item.label}
              </Link>
              {item.children && (
                <div className="ml-3 flex flex-col gap-2">
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      href={createHref(locale, child.slug)}
                      onClick={() => setOpen(false)}
                      className="rounded-xl bg-white/5 px-4 py-2 text-sm text-white/80"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </header>
  );
}
