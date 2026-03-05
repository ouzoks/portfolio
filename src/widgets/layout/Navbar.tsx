import { useState } from "react";
import { navItems } from "../../shared/config/site";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="shell absolute left-1/2 top-0 z-30 flex -translate-x-1/2 items-center justify-between py-5">
      <a href="#home" className="text-sm font-bold uppercase tracking-[0.12em] text-ink-800">
        Oguz Oksuzomer
      </a>
      <button
        type="button"
        aria-label="Menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-black/20 bg-white text-ink-800 md:hidden"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
          <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" />
        </svg>
      </button>
      <nav className="hidden flex-wrap gap-2 md:flex" aria-label="Ana menu">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="rounded-full px-3 py-2 text-sm font-semibold text-ink-800 transition hover:bg-tealBrand-500/10"
          >
            {item.label}
          </a>
        ))}
      </nav>
      {isOpen && (
        <nav
          aria-label="Mobil menu"
          className="absolute left-0 right-0 top-full z-20 mt-2 grid gap-2 rounded-2xl border border-black/20 bg-white p-3 shadow-lg md:hidden"
        >
          {navItems.map((item) => (
            <a
              key={`mobile-${item.href}`}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-semibold text-ink-800 transition hover:bg-tealBrand-500/10"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
