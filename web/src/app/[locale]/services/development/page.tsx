import { AnimatedSection } from "@/components/animated-section";
import { assertLocale, getContent } from "@/lib/content";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export default async function DevelopmentPage({ params }: PageProps) {
  const { locale } = await params;
  const dev = getContent(assertLocale(locale)).development;

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-12 px-4 py-16 text-white">
      <AnimatedSection className="space-y-6">
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
          FinBridge
        </span>
        <h1 className="text-4xl font-semibold leading-tight">{dev.title}</h1>
        <p className="text-lg text-white/75">{dev.tagline}</p>
        <p className="text-sm leading-7 text-white/70">{dev.focus}</p>
        <p className="text-sm leading-7 text-white/70">{dev.specialization}</p>
      </AnimatedSection>

      <AnimatedSection className="grid gap-6 md:grid-cols-3">
        {dev.highlights.map((item) => (
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

      <AnimatedSection className="rounded-3xl border border-white/5 bg-white/5 p-6">
        <h2 className="text-2xl font-semibold text-white">
          {dev.servicesTitle}
        </h2>
        <ul className="mt-4 space-y-3 text-sm text-white/75">
          {dev.services.map((service) => (
            <li key={service} className="flex gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-cyan-400" />
              <span>{service}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-white/70">{dev.modernization}</p>
      </AnimatedSection>

      <AnimatedSection className="grid gap-6 md:grid-cols-3">
        {dev.stack.map((item) => (
          <div
            key={item}
            className="rounded-3xl border border-white/5 bg-gradient-to-br from-white/10 via-transparent to-white/5 p-5 text-sm text-white/75"
          >
            {item}
          </div>
        ))}
      </AnimatedSection>

      <AnimatedSection className="space-y-6 rounded-3xl border border-white/5 bg-white/5 p-6">
        <h2 className="text-2xl font-semibold text-white">{dev.offerTitle}</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {dev.offer.map((item) => (
            <div key={item.title} className="space-y-2">
              <h3 className="text-lg font-semibold text-white">
                {item.title}
              </h3>
              <p className="text-sm leading-6 text-white/75">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
}
