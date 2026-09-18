"use client";

import Link from "next/link";
import { useState } from "react";
import { navItems } from "@/lib/nav";

export default function Nav({ locale }: { locale: "en" | "my" }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <nav className="hidden md:flex gap-6">
      {navItems.map((item, index) => (
        <div
          key={item.href}
          className="relative"
          onMouseEnter={() => setOpenIndex(index)}
          onMouseLeave={() => setOpenIndex(null)}
        >
          <Link
            href={`/${locale}${item.href}`}
            className="text-brand-white hover:text-brand-gold py-2 inline-block"
          >
            {item.label[locale]}
          </Link>

          {item.children && openIndex === index && (
            <div className="absolute left-0 top-full bg-brand-white text-brand-blue-dark shadow-lg rounded min-w-[200px] py-2 z-10">
              {item.children.map((child) => (
                <Link
                  key={child.href}
                  href={`/${locale}${child.href}`}
                  className="block px-4 py-2 hover:bg-gray-100 whitespace-nowrap"
                >
                  {child.label[locale]}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  );
}