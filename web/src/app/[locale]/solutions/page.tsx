import Link from "next/link";
import { AnimatedSection } from "@/components/animated-section";
import { assertLocale, getContent, type Locale } from "@/lib/content";
import { createHref } from "@/lib/routing";

type PageProps = {
  params: Promise<{ locale: string }>;
};

const detailMap: Record<number, string> = {
  0: "/solutions/adm",
  3: "/solutions/cash-management",
  4: "/import-substitution",
  5: "/services/development",
};

const learnMoreLabels: Record<Locale, string> = {
  ru: "Подробнее",
  en: "Learn more",
  uz: "Batafsil",
};

export default async function SolutionsPage({ params }: PageProps) {
  const { locale } = await params;
  const currentLocale = assertLocale(locale);
  const copy = getContent(currentLocale);
  const { title, overview, categories } = copy.solutions;
  const learnMore = learnMoreLabels[currentLocale];

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-16">
      <AnimatedSection className="space-y-6 text-white">
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
          FinBridge
        </span>
        <h1 className="text-4xl font-semibold tracking-tight">{title}</h1>
        <p className="max-w-3xl text-lg text-white/75">{overview}</p>
      </AnimatedSection>

      <AnimatedSection className="grid gap-6 md:grid-cols-2">
        {categories.map((item, index) => {
          const slug = detailMap[index];
          return (
            <div
              key={item.title}
              className="relative flex flex-col gap-4 rounded-3xl border border-white/5 bg-white/5 p-6 transition hover:border-cyan-400/40 hover:bg-white/10"
            >
              <div className="pointer-events-none absolute inset-0 rounded-3xl border border-white/5 opacity-0 transition hover:opacity-100" />
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-white">
                  {item.title}
                </h2>
                <span className="text-sm font-semibold text-white/60">
                  {index + 1 < 10 ? `0${index + 1}` : index + 1}
                </span>
              </div>
              <p className="flex-1 text-sm leading-6 text-white/70">
                {item.description}
              </p>
              {slug && (
                <Link
                  href={createHref(currentLocale as Locale, slug)}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition hover:text-cyan-100"
                >
                  <span>{learnMore}</span>
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
              )}
            </div>
          );
        })}
      </AnimatedSection>
    </div>
  );
}
