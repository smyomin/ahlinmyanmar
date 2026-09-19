"use client";

import { useEffect, useState } from "react";
import { getDictionary } from "@/dictionaries";

export default function ContactPage({
  params,
}: {
  params: Promise<{ locale: "en" | "my" }>;
}) {
  const [locale, setLocale] = useState<"en" | "my">("en");
  const [dict, setDict] = useState<any>(null);

  useEffect(() => {
    params.then(async ({ locale }) => {
      setLocale(locale);
      setDict(await getDictionary(locale));
    });
  }, [params]);

  if (!dict) return null;

  return (
    <main className="px-6 py-16 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold text-brand-blue-dark mb-4">{dict.contact.title}</h1>
      <p className="mb-8 text-gray-700">{dict.contact.intro}</p>

      <form className="flex flex-col gap-4">
        <div>
          <label className="block mb-1 font-medium text-brand-blue-dark">{dict.contact.name}</label>
          <input type="text" className="w-full border border-gray-300 rounded px-3 py-2" required />
        </div>
        <div>
          <label className="block mb-1 font-medium text-brand-blue-dark">{dict.contact.email}</label>
          <input type="email" className="w-full border border-gray-300 rounded px-3 py-2" required />
        </div>
        <div>
          <label className="block mb-1 font-medium text-brand-blue-dark">{dict.contact.message}</label>
          <textarea rows={5} className="w-full border border-gray-300 rounded px-3 py-2" required />
        </div>
        <button
          type="submit"
          className="bg-brand-gold text-brand-blue-dark px-6 py-3 rounded font-bold hover:opacity-90"
        >
          {dict.contact.send}
        </button>
      </form>
    </main>
  );
}