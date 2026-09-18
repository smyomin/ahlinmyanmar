"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Nav from "@/components/Nav";
import { navItems } from "@/lib/nav";

export default function Header({ locale }: { locale: "en" | "my" }) {
  const otherLocale = locale === "en" ? "my" : "en";
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-brand-blue text-brand-white px-6 py-4">
      <div className="flex items-center justify-between">
        <Link href={`/${locale}`} className="flex items-center gap-3">
          <Image src="/logo.png" alt="Ahlin Myanmar Aotearoa" width={100} height={100} />
          <span className="font-bold text-lg">Ahlin Myanmar Aotearoa</span>
        </Link>

        <Nav locale={locale} />

        <div className="flex items-center gap-4">
          <Link
            href={`/${otherLocale}`}
            className="border border-brand-gold text-brand-gold px-3 py-1 rounded"
          >
            {otherLocale === "en" ? "English" : "မြန်မာ"}
          </Link>

          <button
            className="md:hidden text-brand-white text-2xl"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-2">
          {navItems.map((item) => (
            <div key={item.href}>
              <Link
                href={`/${locale}${item.href}`}
                className="block py-2 text-brand-white hover:text-brand-gold"
                onClick={() => setMobileOpen(false)}
              >
                {item.label[locale]}
              </Link>
              {item.children && (
                <div className="pl-4 flex flex-col gap-1">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={`/${locale}${child.href}`}
                      className="block py-1 text-brand-gold text-sm"
                      onClick={() => setMobileOpen(false)}
                    >
                      {child.label[locale]}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}