import { getDictionary } from "@/dictionaries";

export default async function MembershipPage({
  params,
}: {
  params: Promise<{ locale: "en" | "my" }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <main className="px-6 py-16 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-brand-blue-dark mb-4">{dict.getInvolved.membership}</h1>
      <p className="text-gray-700 mb-8">{dict.getInvolved.membershipBody}</p>

      <div className="w-full overflow-hidden rounded-lg border border-gray-200">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSdEdDSUe9M_0nuPyU5ZCIBLBplLqAZqfZA7Wyz4juxwMsJwTQ/viewform?embedded=true"
          title="Membership Sign-up Form"
          width="100%"
          height="730"
          loading="lazy"
          className="w-full"
        >
          Loading…
        </iframe>
      </div>
    </main>
  );
}