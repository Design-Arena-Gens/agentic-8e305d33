"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import type { Locale } from "@/lib/content";
import { locales } from "@/lib/content";

type LanguageSwitcherProps = {
  locale: Locale;
  compact?: boolean;
};

export function LanguageSwitcher({
  locale,
  compact = false,
}: LanguageSwitcherProps) {
  const pathname = usePathname() || "/";
  const segments = pathname.split("/").filter(Boolean);
  const [, ...rest] = segments;
  const suffix = rest.length ? `/${rest.join("/")}` : "";

  return (
    <div
      className={clsx(
        "flex shrink-0 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/70",
        compact && "px-1.5 py-0.5 text-[10px]"
      )}
    >
      {locales.map((item) => {
        const target =
          item === segments[0] ? pathname : `/${item}${suffix || ""}`;

        return (
          <Link
            key={item}
            href={target || `/${item}`}
            className={clsx(
              "rounded-full px-2 py-1 transition-colors",
              item === locale
                ? "bg-white/20 text-white"
                : "text-white/60 hover:bg-white/10 hover:text-white"
            )}
          >
            {item.toUpperCase()}
          </Link>
        );
      })}
    </div>
  );
}
