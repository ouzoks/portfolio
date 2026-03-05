import { PhotoPlaceholder } from "../../shared/ui/PhotoPlaceholder";

export function AboutSection() {
  return (
    <section id="about" className="shell py-16">
      <p className="section-eyebrow">About</p>
      <h2 className="section-title">Temiz kod, guclu hikaye, etkili arayuz.</h2>
      <div className="mt-7 grid gap-4 lg:grid-cols-3">
        <article className="rounded-3xl border border-black/20 bg-sand-50 p-6">
          <h3 className="text-2xl">Nasil Calisiyorum?</h3>
          <p className="mt-3 leading-7 text-ink-700">
            Her projede once bilgi mimarisini netlestirir, sonra component yapisini kurar ve son
            adimda performans odakli dokunuslarla urunu stabil hale getiririm.
          </p>
        </article>
        <article className="rounded-3xl border border-black/20 bg-sand-50 p-6">
          <h3 className="text-2xl">Odak Alanlarim</h3>
          <p className="mt-3 leading-7 text-ink-700">
            Design system kurulumu, reusable UI bilesenleri, responsive UX kararlar ve hiz
            optimizasyonu.
          </p>
        </article>
        <PhotoPlaceholder label="About Photo Placeholder" className="min-h-[280px]" />
      </div>
    </section>
  );
}
