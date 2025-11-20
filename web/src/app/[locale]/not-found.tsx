import Link from "next/link";
import { locales, type Locale } from "@/lib/content";

const labels: Record<Locale, { title: string; action: string }> = {
  ru: {
    title: "Страница не найдена",
    action: "Вернуться на главную",
  },
  en: {
    title: "Page not found",
    action: "Back to homepage",
  },
  uz: {
    title: "Sahifa topilmadi",
    action: "Bosh sahifaga qaytish",
  },
};

type NotFoundProps = {
  params?: Promise<{ locale: string }>;
};

export default async function NotFound({ params }: NotFoundProps) {
  const resolved = params ? await params : { locale: "ru" };
  const valid = locales.includes(resolved.locale as Locale)
    ? (resolved.locale as Locale)
    : "ru";
  const copy = labels[valid];

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6 px-4 text-center text-white">
      <span className="rounded-full border border-white/10 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
        404
      </span>
      <h1 className="text-3xl font-semibold">{copy.title}</h1>
      <Link
        href={`/${valid}`}
        className="inline-flex items-center gap-2 rounded-full bg-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/25"
      >
        {copy.action}
      </Link>
    </div>
  );
}
