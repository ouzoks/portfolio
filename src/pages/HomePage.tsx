import { Footer } from "../widgets/layout/Footer";
import { Navbar } from "../widgets/layout/Navbar";
import { AboutSection } from "../widgets/sections/AboutSection";
import { ContactSection } from "../widgets/sections/ContactSection";
import { ExperiencesSection } from "../widgets/sections/ExperiencesSection";
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
      <ExperiencesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
