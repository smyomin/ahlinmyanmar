import Link from "next/link";
import { getDictionary } from "@/dictionaries";

export default async function ProgrammesPage({
  params,
}: {
  params: Promise<{ locale: "en" | "my" }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  const links = [
    { label: dict.programmes.youth, href: "youth" },
    { label: dict.programmes.women, href: "women" },
    { label: dict.programmes.professionals, href: "professionals" },
  ];

  return (
    <main className="px-6 py-16 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-brand-blue-dark mb-4">{dict.programmes.title}</h1>
      <p className="mb-8 text-gray-700">{dict.programmes.intro}</p>

      <div className="flex flex-col gap-3">
        {links.map((link) => (
          <Link
            key={link.href}
            href={`/${locale}/programmes/${link.href}`}
            className="border border-brand-gold text-brand-blue px-4 py-3 rounded hover:bg-brand-gold hover:text-brand-blue-dark"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </main>
  );
}