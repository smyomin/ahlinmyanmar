import Link from "next/link";
import { getDictionary } from "@/dictionaries";

export default async function ProfessionalsPage({
  params,
}: {
  params: Promise<{ locale: "en" | "my" }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <main className="px-6 py-16 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-brand-blue-dark mb-4">{dict.programmes.professionals}</h1>
      <p className="text-gray-700 mb-8">{dict.programmes.professionalsBody}</p>

      <Link
        href={`/${locale}/programmes/professionals/job-board`}
        className="inline-block border border-brand-gold text-brand-blue px-4 py-3 rounded hover:bg-brand-gold hover:text-brand-blue-dark"
      >
        {locale === "en" ? "View Job Board →" : "အလုပ်အကိုင်သတင်းဘုတ် ကြည့်ရန် →"}
      </Link>
    </main>
  );
}