import Link from "next/link";
import { AnimatedSection } from "@/components/animated-section";
import { assertLocale, getContent, type Locale } from "@/lib/content";
import { createHref } from "@/lib/routing";

type PageProps = {
  params: Promise<{ locale: string }>;
};

const exploreLabels: Record<Locale, string> = {
  ru: "Связаться с FinBridge",
  en: "Connect with FinBridge",
  uz: "FinBridge bilan bog‘laning",
};

export default async function AdmPage({ params }: PageProps) {
  const { locale } = await params;
  const currentLocale = assertLocale(locale);
  const copy = getContent(currentLocale);
  const adm = copy.adm;

  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-10 px-4 py-16 text-white">
      <AnimatedSection className="space-y-6">
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
          FinBridge
        </span>
        <h1 className="text-4xl font-semibold">{adm.title}</h1>
        <p className="text-lg text-white/75">{adm.description}</p>
      </AnimatedSection>

      <AnimatedSection className="rounded-3xl border border-white/5 bg-white/5 p-6 text-sm leading-6 text-white/70">
        <p>
          {copy.cashManagement.upliftPoints[0]}
          {" "}
          {copy.cashManagement.upliftPoints[1]}
        </p>
      </AnimatedSection>

      <AnimatedSection>
        <Link
          href={createHref(currentLocale as Locale, "/contact")}
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500 via-indigo-500 to-sky-500 px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110"
        >
          {exploreLabels[currentLocale]}
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
              d="M13.5 6H18m0 0v4.5M18 6l-9 9"
            />
          </svg>
        </Link>
      </AnimatedSection>
    </div>
  );
}
