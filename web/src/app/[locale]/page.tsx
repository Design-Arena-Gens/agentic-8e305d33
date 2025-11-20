import Link from "next/link";
import { AnimatedSection } from "@/components/animated-section";
import { BackgroundGradient } from "@/components/background-gradient";
import { assertLocale, getContent, type Locale } from "@/lib/content";
import { createHref } from "@/lib/routing";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;
  const currentLocale = assertLocale(locale);
  const copy = getContent(currentLocale);
  const { hero, solutions, why, blueprint, pillars } = copy.home;
  return (
    <div className="relative">
      <BackgroundGradient className="px-4 pt-12 pb-24">
        <AnimatedSection className="mx-auto flex max-w-5xl flex-col items-start gap-8">
          <span className="rounded-full border border-white/10 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
            {hero.subtitle}
          </span>
          <div className="space-y-6">
            <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
              {hero.title}
            </h1>
            <p className="text-lg text-white/80 sm:text-xl">{hero.mission}</p>
          </div>
          <div className="flex flex-wrap gap-4">
            {hero.ctas.map((cta) => (
              <Link
                key={cta.label}
                href={createHref(currentLocale as Locale, cta.href)}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_40px_rgba(79,70,229,0.35)] transition hover:brightness-110"
              >
                {cta.label}
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
            ))}
          </div>
        </AnimatedSection>
      </BackgroundGradient>

      <div className="mx-auto mt-12 flex max-w-6xl flex-col gap-16 px-4 pb-24">
        <AnimatedSection className="grid gap-6 lg:grid-cols-3">
        {solutions.items.map((item, index) => (
            <div
              key={item.title}
              className="relative overflow-hidden rounded-3xl border border-white/5 bg-white/5 p-6 backdrop-blur transition hover:border-cyan-400/40 hover:bg-white/10"
            >
              <div className="pointer-events-none absolute -right-10 -top-14 h-36 w-36 rounded-full bg-gradient-to-br from-cyan-400/30 to-indigo-500/20 blur-2xl" />
              <span className="text-sm font-semibold text-cyan-300/80">
                {index + 1 < 10 ? `0${index + 1}` : index + 1}
              </span>
              <h3 className="mt-3 text-xl font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-white/70">
                {item.description}
              </p>
            </div>
          ))}
        </AnimatedSection>

        <AnimatedSection className="grid gap-10 rounded-3xl border border-white/5 bg-gradient-to-br from-white/10 via-transparent to-white/5 p-8 md:grid-cols-[1.1fr_1fr]">
          <div>
            <h2 className="text-3xl font-semibold text-white">{why.title}</h2>
            <p className="mt-4 text-base text-white/70">{why.description}</p>
          </div>
          <ul className="space-y-4 text-sm text-white/80">
            {why.bullets.map((bullet) => (
              <li
                key={bullet}
                className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4"
              >
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-400" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </AnimatedSection>

        <AnimatedSection className="space-y-10">
          <h2 className="text-3xl font-semibold text-white">
            {blueprint.title}
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {blueprint.items.map((item, index) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/5 bg-white/5 p-6"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-sm font-semibold text-white/70">
                    {index + 1}
                  </span>
                  <h3 className="text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-6 text-white/70">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection className="space-y-8">
          <h2 className="text-3xl font-semibold text-white">
            {pillars.title}
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {pillars.items.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/5 bg-gradient-to-tr from-white/5 via-white/0 to-white/10 p-6"
              >
                <h3 className="text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-white/70">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
