import Image from "next/image";
import Link from "next/link";

export default function Header({ locale }: { locale: "en" | "my" }) {
  const otherLocale = locale === "en" ? "my" : "en";

  return (
    <header className="bg-brand-blue text-brand-white flex items-center justify-between px-6 py-4">
      <Link href={`/${locale}`} className="flex items-center gap-3">
        <Image src="/logo.png" alt="Ahlin Myanmar Aotearoa" width={48} height={48} />
        <span className="font-bold text-lg">Ahlin Myanmar Aotearoa</span>
      </Link>

      <Link
        href={`/${otherLocale}`}
        className="border border-brand-gold text-brand-gold px-3 py-1 rounded"
      >
        {otherLocale === "en" ? "English" : "မြန်မာ"}
      </Link>
    </header>
  );
}