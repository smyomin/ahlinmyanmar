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
      <section className="relative text-brand-white text-center px-6 py-24 overflow-hidden">
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: "url('/hero-bg.jpg')" }}
  />
  <div className="absolute inset-0 bg-brand-blue-dark/70" />

  <div className="relative z-10">
    <h1 className="text-4xl md:text-5xl font-bold mb-4">{dict.home.title}</h1>
    <p className="text-xl text-brand-gold mb-6">{dict.home.tagline}</p>
    <p className="max-w-2xl mx-auto mb-8">{dict.home.intro}</p>
    <Link
      href={`/${locale}/get-involved`}
      className="bg-brand-gold text-brand-blue-dark px-6 py-3 rounded font-bold hover:opacity-90 inline-block"
    >
      {dict.home.cta}
    </Link>
  </div>
</section>
<section className="bg-brand-blue px-6 py-12">
  <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-brand-white">
    <div>
      <div className="text-4xl font-bold text-brand-gold">{dict.stats.yearsValue}</div>
      <div className="text-sm mt-1">{dict.stats.years}</div>
    </div>
    <div>
      <div className="text-4xl font-bold text-brand-gold">{dict.stats.membersValue}</div>
      <div className="text-sm mt-1">{dict.stats.members}</div>
    </div>
    <div>
      <div className="text-4xl font-bold text-brand-gold">{dict.stats.eventsValue}</div>
      <div className="text-sm mt-1">{dict.stats.events}</div>
    </div>
    <div>
      <div className="text-4xl font-bold text-brand-gold">{dict.stats.volunteersValue}</div>
      <div className="text-sm mt-1">{dict.stats.volunteers}</div>
    </div>
  </div>
</section>
<section className="px-6 py-16 bg-gray-50">
  <div className="max-w-5xl mx-auto">
    <h2 className="text-3xl font-bold text-brand-blue-dark text-center mb-10">
      {dict.gallery.title}
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <img src="/gallery-1.jpg" alt="Community event" className="w-full h-64 object-cover rounded-lg" />
      <img src="/gallery-2.jpg" alt="Community event" className="w-full h-64 object-cover rounded-lg" />
      <img src="/gallery-3.jpg" alt="Community event" className="w-full h-64 object-cover rounded-lg" />
    </div>
  </div>
</section>
    </main>
  );
}