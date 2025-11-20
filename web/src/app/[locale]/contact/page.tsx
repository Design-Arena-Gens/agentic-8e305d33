import { AnimatedSection } from "@/components/animated-section";
import { assertLocale, getContent } from "@/lib/content";

type PageProps = {
  params: Promise<{ locale: string }>;
};

const formLabels = {
  ru: {
    name: "Имя",
    email: "Электронная почта",
    company: "Компания",
    message: "Сообщение",
    submit: "Отправить",
  },
  en: {
    name: "Name",
    email: "Email",
    company: "Company",
    message: "Message",
    submit: "Send",
  },
  uz: {
    name: "Ism",
    email: "E-pochta",
    company: "Kompaniya",
    message: "Xabar",
    submit: "Yuborish",
  },
} as const;

export default async function ContactPage({ params }: PageProps) {
  const { locale } = await params;
  const currentLocale = assertLocale(locale);
  const contact = getContent(currentLocale).contact;
  const labels = formLabels[currentLocale];

  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-12 px-4 py-16 text-white">
      <AnimatedSection className="space-y-6">
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
          FinBridge
        </span>
        <h1 className="text-4xl font-semibold leading-tight">
          {contact.title}
        </h1>
        <p className="text-lg text-white/75">{contact.intro}</p>
      </AnimatedSection>

      <AnimatedSection className="grid gap-6 text-sm text-white/75 md:grid-cols-2">
        <div className="space-y-3 rounded-3xl border border-white/5 bg-white/5 p-6">
          <div>{contact.address}</div>
          <div>{contact.email}</div>
          <div className="flex flex-col gap-1">
            {contact.phones.map((phone) => (
              <a
                key={phone}
                href={`tel:${phone.replace(/[^+\d]/g, "")}`}
                className="text-white/70 hover:text-white"
              >
                {phone}
              </a>
            ))}
          </div>
        </div>
        <div className="rounded-3xl border border-white/5 bg-white/5 p-6">
          <h2 className="text-lg font-semibold text-white">
            {contact.formTitle}
          </h2>
          <form
            className="mt-4 space-y-4"
            method="post"
            action="mailto:mail@finbridge.uz"
            encType="text/plain"
          >
            <label className="block text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
              {labels.name}
              <input
                type="text"
                name="name"
                required
                className="mt-2 w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400"
              />
            </label>
            <label className="block text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
              {labels.email}
              <input
                type="email"
                name="email"
                required
                className="mt-2 w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400"
              />
            </label>
            <label className="block text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
              {labels.company}
              <input
                type="text"
                name="company"
                className="mt-2 w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400"
              />
            </label>
            <label className="block text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
              {labels.message}
              <textarea
                name="message"
                rows={4}
                required
                className="mt-2 w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400"
              />
            </label>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 px-5 py-3 text-sm font-semibold text-white transition hover:brightness-110"
            >
              {labels.submit}
            </button>
          </form>
        </div>
      </AnimatedSection>
    </div>
  );
}
