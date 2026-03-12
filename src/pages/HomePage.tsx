import { Footer } from "../widgets/layout/Footer";
import { Navbar } from "../widgets/layout/Navbar";
import { AboutSection } from "../widgets/sections/AboutSection";
import { ContactSection } from "../widgets/sections/ContactSection";
import { GallerySection } from "../widgets/sections/GallerySection";
import { HeroSection } from "../widgets/sections/HeroSection";
import { ProjectsSection } from "../widgets/sections/ProjectsSection";
import { SkillSection } from "../widgets/sections/SkillSection";

export function HomePage() {
  return (
    <div className="site-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillSection />
      <ProjectsSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </div>
  );
}
