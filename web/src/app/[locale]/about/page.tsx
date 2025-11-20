import { AnimatedSection } from "@/components/animated-section";
import { assertLocale, getContent } from "@/lib/content";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export default async function AboutPage({ params }: PageProps) {
  const { locale } = await params;
  const copy = getContent(assertLocale(locale)).about;

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-12 px-4 py-16 text-white">
      <AnimatedSection className="space-y-6">
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
          FinBridge
        </span>
        <h1 className="text-4xl font-semibold leading-tight">{copy.title}</h1>
        <p className="text-lg text-white/75">{copy.intro}</p>
        <p className="text-sm leading-7 text-white/70">{copy.body}</p>
      </AnimatedSection>

      <AnimatedSection className="grid gap-6 md:grid-cols-3">
        {copy.qualities.map((item) => (
          <div
            key={item.title}
            className="rounded-3xl border border-white/5 bg-white/5 p-6"
          >
            <h2 className="text-xl font-semibold text-white">{item.title}</h2>
            <p className="mt-3 text-sm leading-6 text-white/70">
              {item.description}
            </p>
          </div>
        ))}
      </AnimatedSection>

      <AnimatedSection className="space-y-4 rounded-3xl border border-white/5 bg-gradient-to-br from-white/10 via-transparent to-white/5 p-6">
        <h2 className="text-2xl font-semibold text-white">{copy.mission}</h2>
      </AnimatedSection>

      <AnimatedSection className="grid gap-6 md:grid-cols-2">
        {copy.values.map((item) => (
          <div
            key={item.title}
            className="rounded-3xl border border-white/5 bg-white/5 p-6"
          >
            <h3 className="text-lg font-semibold text-white">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-white/70">
              {item.description}
            </p>
          </div>
        ))}
      </AnimatedSection>
    </div>
  );
}
