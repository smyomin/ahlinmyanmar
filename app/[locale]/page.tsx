import { getDictionary } from "@/dictionaries";
import Link from "next/link";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: "en" | "my" }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <main>
      <section className="px-6 py-16 max-w-5xl mx-auto">
  <h2 className="text-3xl font-bold text-brand-blue-dark text-center mb-10">
    {dict.home.programmesTitle}
  </h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {dict.home.programmes.map((programme: { title: string; desc: string }) => (
      <div
        key={programme.title}
        className="border border-brand-gold rounded-lg p-6 text-center"
      >
        <h3 className="font-bold text-brand-blue mb-2">{programme.title}</h3>
        <p className="text-sm text-gray-700">{programme.desc}</p>
      </div>
    ))}
  </div>
</section>
    </main>
  );
}