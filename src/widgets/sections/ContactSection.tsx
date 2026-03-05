import { PhotoPlaceholder } from "../../shared/ui/PhotoPlaceholder";

export function ContactSection() {
  return (
    <section id="contact" className="shell py-16">
      <div className="grid items-center gap-4 rounded-3xl border border-black/20 bg-sand-50 p-5 lg:grid-cols-[1.2fr_0.8fr] lg:p-7">
        <div>
          <p className="section-eyebrow">Contact</p>
          <h2 className="section-title max-w-[16ch]">Bir sonraki urununu birlikte tasarlayalim.</h2>
          <p className="mt-5 max-w-2xl leading-7 text-ink-700">
            Iletisim icin e-posta veya LinkedIn uzerinden ulasabilirsin. Projene uygun hizli bir
            yol haritasi cikartabilirim.
          </p>
          <a
            className="mt-6 inline-flex rounded-full bg-tealBrand-500 px-5 py-3 text-sm font-bold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-tealBrand-600"
            href="mailto:mail@example.com"
          >
            mail@example.com
          </a>
        </div>
        <PhotoPlaceholder label="Contact Photo Placeholder" className="min-h-[270px]" />
      </div>
    </section>
  );
}
