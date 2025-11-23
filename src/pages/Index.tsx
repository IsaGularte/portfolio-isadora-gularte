import StarField from "@/components/StarField";
import HeroSection from "@/components/HeroSection";
import JourneySection from "@/components/JourneySection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <StarField />
      
      <div className="relative z-10">
        <HeroSection />
        <JourneySection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </div>
    </main>
  );
};

export default Index;
