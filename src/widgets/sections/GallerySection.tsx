import { PhotoPlaceholder } from "../../shared/ui/PhotoPlaceholder";

export function GallerySection() {
  return (
    <section id="gallery" className="shell py-16">
      <p className="section-eyebrow">Gallery</p>
      <h2 className="section-title">Marka ve proje gorselleri</h2>
      <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <PhotoPlaceholder key={index} label="Gallery Photo Placeholder" className="min-h-[220px]" />
        ))}
      </div>
    </section>
  );
}
