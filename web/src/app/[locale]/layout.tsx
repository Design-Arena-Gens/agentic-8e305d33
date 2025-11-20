import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { assertLocale, getContent, locales } from "@/lib/content";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

type LayoutProps = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

type MetadataProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: MetadataProps): Promise<Metadata> {
  const { locale } = await params;
  const validLocale = assertLocale(locale);
  const copy = getContent(validLocale);

  return {
    title: copy.meta.title,
    description: copy.meta.description,
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps) {
  const { locale } = await params;
  const validLocale = assertLocale(locale);
  const copy = getContent(validLocale);

  return (
    <div className="relative flex min-h-screen flex-col bg-[#040815] text-slate-50">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[620px] w-full bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.4),_rgba(15,23,42,0)_60%)]" />
      <Navbar locale={validLocale} nav={copy.nav} tagline={copy.footer.tagline} />
      <main className="flex-1">{children}</main>
      <Footer locale={validLocale} footer={copy.footer} />
    </div>
  );
}
