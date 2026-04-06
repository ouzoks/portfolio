import { useEffect, useRef, useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Reveal } from "../../shared/ui/Reveal";

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

export function ContactSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [motion, setMotion] = useState({
    scaleX: 0.72,
    scaleY: 0.58,
    translateY: 84,
    letterSpacing: -0.18,
  });

  useEffect(() => {
    const updateMotion = () => {
      if (!sectionRef.current) {
        return;
      }

      const rect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 0;
      const rawProgress = (viewportHeight - rect.top) / (viewportHeight + rect.height * 0.35);
      const progress = clamp(rawProgress, 0, 1);
      const eased = 1 - (1 - progress) ** 3;

      setMotion({
        scaleX: 0.72 + eased * 0.44,
        scaleY: 0.58 + eased * 0.38,
        translateY: 84 - eased * 84,
        letterSpacing: -0.18 + eased * 0.1,
      });
    };

    updateMotion();
    window.addEventListener("scroll", updateMotion, { passive: true });
    window.addEventListener("resize", updateMotion);

    return () => {
      window.removeEventListener("scroll", updateMotion);
      window.removeEventListener("resize", updateMotion);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="shell relative pb-0 pt-24 md:pt-28"
      aria-labelledby="contact-heading"
    >
      <div className="pointer-events-none absolute left-[12%] top-8 h-32 w-32 rounded-full bg-tealBrand-500/10 blur-3xl" />
      <div className="pointer-events-none absolute right-[12%] top-20 h-36 w-36 rounded-full bg-tealBrand-500/10 blur-3xl" />

      <div className="relative border-t border-tealBrand-500/18 pt-10">
        <Reveal className="mx-auto max-w-4xl">
          <div className="mt-4 flex items-center justify-center gap-6 text-sm font-semibold uppercase tracking-[0.14em] text-mist-100 md:gap-8 md:text-base">
            <a
              href="https://www.linkedin.com/in/o%C4%9Fuz-%C3%B6ks%C3%BCz%C3%B6mer-020780242/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 transition hover:text-tealBrand-600"
            >
              <FaLinkedinIn className="text-base text-tealBrand-600 md:text-lg" aria-hidden="true" />
              LinkedIn
            </a>
            <a
              href="https://github.com/ouzoks"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 transition hover:text-tealBrand-600"
            >
              <FaGithub className="text-base text-tealBrand-600 md:text-lg" aria-hidden="true" />
              GitHub
            </a>
          </div>
          <div className="mt-4 text-center text-sm font-semibold uppercase tracking-[0.14em] text-mist-100 md:text-base">
            <a
              href="mailto:ouzoks2@gmail.com"
              className="transition hover:text-tealBrand-600"
            >
              ouzoks2@gmail.com
            </a>
          </div>

          <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-7 text-mist-300 md:text-base">
            Yeni bir urun, arayuz iyilestirmesi ya da frontend odakli bir gelistirme sureci icin
            iletisime gecebilirsin.
          </p>
        </Reveal>

        <Reveal className="mt-14 overflow-hidden text-center md:mt-16" delayMs={120}>
          <h2
            id="contact-heading"
            className="contact-word font-serif text-[clamp(4.5rem,18vw,12rem)] font-semibold uppercase leading-[0.82] tracking-[-0.065em] text-tealBrand-600"
            style={{
              transform: `translateY(${motion.translateY}px) scaleX(${motion.scaleX}) scaleY(${motion.scaleY})`,
              letterSpacing: `${motion.letterSpacing}em`,
            }}
          >
            İLETİŞİM
          </h2>
        </Reveal>
      </div>
    </section>
  );
}
