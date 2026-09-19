import { getDictionary } from "@/dictionaries";

export default async function SponsorshipPage({
  params,
}: {
  params: Promise<{ locale: "en" | "my" }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <main className="px-6 py-16 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-brand-blue-dark mb-4">{dict.getInvolved.sponsorship}</h1>
      <p className="text-gray-700">{dict.getInvolved.sponsorshipBody}</p>
    </main>
  );
}