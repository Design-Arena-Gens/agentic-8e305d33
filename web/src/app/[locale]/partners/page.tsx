import Link from "next/link";
import { AnimatedSection } from "@/components/animated-section";
import { assertLocale, getContent, type Locale } from "@/lib/content";
import { createHref } from "@/lib/routing";

type PageProps = {
  params: Promise<{ locale: string }>;
};

const joinLabels: Record<Locale, string> = {
  ru: "Стать партнёром",
  en: "Become a partner",
  uz: "Hamkor bo‘lish",
};

export default async function PartnersPage({ params }: PageProps) {
  const { locale } = await params;
  const currentLocale = assertLocale(locale);
  const copy = getContent(currentLocale).partners;

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-10 px-4 py-16 text-white">
      <AnimatedSection className="space-y-5 text-center">
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-white/60">
          FinBridge
        </span>
        <h1 className="text-4xl font-semibold">{copy.title}</h1>
        <p className="text-sm text-white/70">{copy.placeholder}</p>
      </AnimatedSection>

      <AnimatedSection className="flex justify-center">
        <Link
          href={createHref(currentLocale as Locale, "/contact")}
          className="inline-flex items-center gap-2 rounded-full bg-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/25"
        >
          {joinLabels[currentLocale]}
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
              d="m9 6 6 6-6 6"
            />
          </svg>
        </Link>
      </AnimatedSection>
    </div>
  );
}
