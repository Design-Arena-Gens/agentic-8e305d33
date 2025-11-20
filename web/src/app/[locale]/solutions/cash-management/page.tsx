import { AnimatedSection } from "@/components/animated-section";
import { assertLocale, getContent, type Locale } from "@/lib/content";
import { createHref } from "@/lib/routing";
import Link from "next/link";

type PageProps = {
  params: Promise<{ locale: string }>;
};

const contactLabels: Record<Locale, string> = {
  ru: "Связаться с FinBridge",
  en: "Talk to FinBridge",
  uz: "FinBridge bilan bog‘lanish",
};

export default async function CashManagementPage({ params }: PageProps) {
  const { locale } = await params;
  const currentLocale = assertLocale(locale);
  const copy = getContent(currentLocale);
  const cash = copy.cashManagement;

  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-12 px-4 py-16 text-white">
      <AnimatedSection className="space-y-6">
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
          FinBridge
        </span>
        <h1 className="text-4xl font-semibold leading-tight">{cash.title}</h1>
        <p className="text-lg text-white/75">{cash.summary}</p>
      </AnimatedSection>

      <AnimatedSection className="space-y-6 rounded-3xl border border-white/5 bg-white/5 p-6">
        <h2 className="text-2xl font-semibold">{cash.analysisTitle}</h2>
        <p className="text-sm leading-6 text-white/70">{cash.analysisIntro}</p>
        <ul className="space-y-3 text-sm leading-6 text-white/80">
          {cash.steps.map((step) => (
            <li key={step} className="flex gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-cyan-400" />
              <span>{step}</span>
            </li>
          ))}
        </ul>
        <p className="text-sm font-semibold text-white/85">{cash.total}</p>
        <p className="text-sm text-white/70">{cash.impact}</p>
      </AnimatedSection>

      <AnimatedSection className="grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-white/5 bg-white/5 p-6">
          <h3 className="text-xl font-semibold text-white">
            {cash.upliftTitle}
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-white/75">
            {cash.upliftPoints.map((point) => (
              <li key={point} className="flex gap-3">
                <svg
                  className="h-5 w-5 text-cyan-300"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m5 13 4 4L19 7"
                  />
                </svg>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border border-white/5 bg-white/5 p-6">
          <h3 className="text-xl font-semibold text-white">
            {cash.experienceTitle}
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-white/75">
            {cash.experiencePoints.map((point) => (
              <li key={point} className="flex gap-3">
                <svg
                  className="h-5 w-5 text-purple-300"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m-6-6h12"
                  />
                </svg>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </AnimatedSection>

      <AnimatedSection className="space-y-6 rounded-3xl border border-white/5 bg-white/5 p-6">
        <h3 className="text-xl font-semibold text-white">
          {cash.efficiencyTitle}
        </h3>
        <ul className="space-y-3 text-sm text-white/75">
          {cash.efficiencyPoints.map((point) => (
            <li key={point} className="flex gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-indigo-400" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </AnimatedSection>

      <AnimatedSection className="space-y-6 rounded-3xl border border-white/5 bg-white/5 p-6">
        <h3 className="text-xl font-semibold text-white">
          {cash.architectureTitle}
        </h3>
        <ul className="space-y-3 text-sm text-white/75">
          {cash.architecturePoints.map((point) => (
            <li key={point} className="flex gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-fuchsia-400" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </AnimatedSection>

      <AnimatedSection className="space-y-6 rounded-3xl border border-white/5 bg-white/10 p-6">
        <h3 className="text-xl font-semibold text-white">
          {cash.advantagesTitle}
        </h3>
        <ul className="space-y-3 text-sm text-white/80">
          {cash.advantagesPoints.map((point) => (
            <li key={point} className="flex gap-3">
              <svg
                className="h-5 w-5 text-emerald-300"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v12m6-6H6"
                />
              </svg>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </AnimatedSection>

      <AnimatedSection className="flex justify-center">
        <Link
          href={createHref(currentLocale as Locale, "/contact")}
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110"
        >
          {contactLabels[currentLocale]}
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
