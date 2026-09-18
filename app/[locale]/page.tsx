import { getDictionary } from "@/dictionaries";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: "en" | "my" }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <main className="bg-brand-blue text-brand-white" style={{ padding: "2rem", textAlign: "center" }}>
      <h1>{dict.home.title}</h1>
      <p>{dict.home.tagline}</p>
    </main>
  );
}