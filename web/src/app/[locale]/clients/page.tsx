import { AnimatedSection } from "@/components/animated-section";
import { assertLocale, getContent } from "@/lib/content";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export default async function ClientsPage({ params }: PageProps) {
  const { locale } = await params;
  const copy = getContent(assertLocale(locale)).clients;

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-12 px-4 py-16 text-white">
      <AnimatedSection className="space-y-6">
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
          FinBridge
        </span>
        <h1 className="text-4xl font-semibold leading-tight">{copy.title}</h1>
        <p className="text-lg text-white/75">{copy.intro}</p>
      </AnimatedSection>

      <AnimatedSection className="grid gap-6 md:grid-cols-2">
        {copy.entries.map((entry) => (
          <div
            key={entry.name}
            className="flex flex-col gap-4 rounded-3xl border border-white/5 bg-white/5 p-6"
          >
            <div>
              <h2 className="text-xl font-semibold text-white">
                {entry.name}
              </h2>
              <p className="mt-2 text-sm leading-6 text-white/70">
                {entry.description}
              </p>
            </div>
            <ul className="space-y-2 text-sm text-white/75">
              {entry.focus.map((focus) => (
                <li key={focus} className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-cyan-400" />
                  <span>{focus}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </AnimatedSection>
    </div>
  );
}
