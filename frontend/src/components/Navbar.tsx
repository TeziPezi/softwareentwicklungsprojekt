"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/ueber-uns", label: "Über uns" },
    { href: "/massagen", label: "Massagen" },
    { href: "/angebote", label: "Infos & Angebote" },
    { href: "/faq", label: "Wirkung und FAQ" },
    { href: "/kontakt", label: "Kontakt" },
    { href: "/impressum", label: "Impressum" },
    { href: "/agb", label: "AGB" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-cover bg-center bg-no-repeat backdrop-blur-sm" style={{ backgroundImage: 'url(bg_menu.png)' }}>
      <nav className="flex flex-col items-center py-4 px-6" style={{ fontFamily: '"tahoma", "Times New Roman", verdana, helvetica, arial, sans-serif' }}>
        {/* Hamburger */}
        <button
          className="block md:hidden text-white focus:outline-none mb-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path stroke="currentColor" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path stroke="currentColor" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex space-x-6 justify-center w-full">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white font-semibold hover:text-gray-300 px-3 py-1 rounded-md transition"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile menu im normalen Flow */}
        {isOpen && (
          <div className="md:hidden flex flex-col items-center p-4 space-y-2 w-full bg-white border-t border-green-700">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="w-full text-center px-4 py-2 rounded-md font-semibold text-gray-500 hover:text-black transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Trennlinie unter dem Header */}
      <div className="w-full border-t border-black"></div>
    </header>
  );
}
