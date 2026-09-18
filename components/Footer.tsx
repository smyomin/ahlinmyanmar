import Link from "next/link";
import { getDictionary } from "@/dictionaries";
import { navItems } from "@/lib/nav";

export default async function Footer({ locale }: { locale: "en" | "my" }) {
  const dict = await getDictionary(locale);
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-blue-dark text-brand-white px-6 py-12 mt-auto">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-bold text-brand-gold mb-3">Ahlin Myanmar Aotearoa</h3>
          <p className="text-sm">{dict.footer.about}</p>
        </div>

        <div>
          <h3 className="font-bold text-brand-gold mb-3">{dict.footer.quickLinks}</h3>
          <ul className="text-sm space-y-1">
            {navItems.slice(0, 5).map((item) => (
              <li key={item.href}>
                <Link href={`/${locale}${item.href}`} className="hover:text-brand-gold">
                  {item.label[locale]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-brand-gold mb-3">{dict.footer.contact}</h3>
          <p className="text-sm">{dict.footer.email}</p>
          <p className="text-sm">{dict.footer.location}</p>
        </div>
      </div>

      <div className="text-center text-xs mt-8 border-t border-brand-blue pt-4">
        © {year} Ahlin Myanmar Aotearoa. {dict.footer.rights}
      </div>
    </footer>
  );
}