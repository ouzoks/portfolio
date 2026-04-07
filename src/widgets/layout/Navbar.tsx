import { useState } from "react";
import { getNavItems } from "../../shared/config/site";
import { useI18n } from "../../shared/i18n/I18nProvider";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { dictionary, locale, setLocale, t } = useI18n();
  const navItems = getNavItems(dictionary);
  const localeSwitcher = (
    <div className="inline-flex items-center rounded-full border border-white/10 bg-night-900/55 p-1 shadow-[0_16px_34px_-24px_rgba(0,0,0,0.65)] backdrop-blur-xl">
      {(["tr", "en"] as const).map((value) => {
        const isActive = locale === value;

        return (
          <button
            key={value}
            type="button"
            onClick={() => setLocale(value)}
            className={`rounded-full px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] transition ${
              isActive
                ? "bg-tealBrand-500/16 text-tealBrand-400"
                : "text-mist-300 hover:text-mist-50"
            }`}
          >
            {value}
          </button>
        );
      })}
    </div>
  );

  return (
    <header className="shell fixed left-1/2 top-0 z-40 flex -translate-x-1/2 items-center justify-between py-5">
      <div className="flex items-center gap-3">
        <a href="#home" className="text-sm font-bold uppercase tracking-[0.12em] text-mist-50">
          {t("hero.name")}
        </a>
        <div className="hidden min-[1101px]:flex">{localeSwitcher}</div>
      </div>

      <div className="flex items-center gap-3">
        <div className="min-[1101px]:hidden">{localeSwitcher}</div>

        <button
          type="button"
          aria-label={t("nav.menuButton")}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/12 bg-white/5 text-mist-50 backdrop-blur min-[1101px]:hidden"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" />
          </svg>
        </button>

        <nav
          className="hidden flex-wrap gap-2 rounded-full border border-white/10 bg-night-900/55 px-2 py-1.5 shadow-[0_16px_34px_-24px_rgba(0,0,0,0.65)] backdrop-blur-xl min-[1101px]:flex"
          aria-label={t("nav.mainMenu")}
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm font-semibold text-mist-100 transition hover:bg-white/5 hover:text-tealBrand-500"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      <nav
        aria-label={t("nav.mobileMenu")}
        className={`absolute right-0 top-full z-20 mt-2 grid w-[min(22rem,100%)] gap-2 rounded-2xl border border-white/12 bg-night-900/90 p-3 shadow-lg backdrop-blur-xl transition-all duration-300 ease-out min-[1101px]:hidden ${
          isOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        {navItems.map((item) => (
          <a
            key={`mobile-${item.href}`}
            href={item.href}
            className="rounded-lg px-3 py-2 text-sm font-semibold text-mist-100 transition hover:bg-white/5 hover:text-tealBrand-500"
            onClick={() => setIsOpen(false)}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
