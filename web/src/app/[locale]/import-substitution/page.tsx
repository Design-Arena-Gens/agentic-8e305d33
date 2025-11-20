import Link from "next/link";
import { AnimatedSection } from "@/components/animated-section";
import { assertLocale, getContent, type Locale } from "@/lib/content";
import { createHref } from "@/lib/routing";

type PageProps = {
  params: Promise<{ locale: string }>;
};

const contactLabels: Record<Locale, string> = {
  ru: "Получить консультацию",
  en: "Request a consultation",
  uz: "Konsultatsiya so‘rash",
};

export default async function ImportSubstitutionPage({ params }: PageProps) {
  const { locale } = await params;
  const currentLocale = assertLocale(locale);
  const copy = getContent(currentLocale);
  const data = copy.importSubstitution;

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-12 px-4 py-16 text-white">
      <AnimatedSection className="space-y-5">
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
          FinBridge
        </span>
        <h1 className="text-4xl font-semibold leading-tight">{data.title}</h1>
        <p className="text-lg text-white/75">{data.overview}</p>
      </AnimatedSection>

      <AnimatedSection className="rounded-3xl border border-white/5 bg-white/5 p-6">
        <h2 className="text-2xl font-semibold text-white">
          {data.reasonsTitle}
        </h2>
        <ul className="mt-4 space-y-3 text-sm text-white/75">
          {data.reasons.map((reason) => (
            <li key={reason} className="flex gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-indigo-400" />
              <span>{reason}</span>
            </li>
          ))}
        </ul>
      </AnimatedSection>

      <AnimatedSection className="space-y-6">
        <h2 className="text-2xl font-semibold text-white">
          {data.productsTitle}
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {data.products.map((product) => (
            <div
              key={product.title}
              className="rounded-3xl border border-white/5 bg-white/5 p-5"
            >
              <h3 className="text-lg font-semibold text-white">
                {product.title}
              </h3>
              <p className="mt-3 text-sm text-white/70">
                {product.description}
              </p>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="rounded-3xl border border-white/5 bg-white/5 p-6 text-sm text-white/75">
        <h3 className="text-xl font-semibold text-white">{data.casesTitle}</h3>
        <p className="mt-3 leading-6">{data.cases}</p>
      </AnimatedSection>

      <AnimatedSection className="grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-white/5 bg-white/5 p-6">
          <h3 className="text-xl font-semibold text-white">
            {data.supportTitle}
          </h3>
          <p className="mt-3 text-sm leading-6 text-white/75">{data.support}</p>
        </div>
        <div className="rounded-3xl border border-white/5 bg-gradient-to-br from-cyan-500/20 via-transparent to-purple-500/20 p-6">
          <h3 className="text-xl font-semibold text-white">
            {data.contactTitle}
          </h3>
          <p className="mt-3 text-sm leading-6 text-white/75">
            {data.contactNote}
          </p>
          <Link
            href={createHref(currentLocale as Locale, "/contact")}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/25"
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
        </div>
      </AnimatedSection>
    </div>
  );
}
