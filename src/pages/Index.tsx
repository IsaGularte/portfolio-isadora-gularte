import Background3DGrid from "@/components/Background3DGrid";
import FloatingParticles from "@/components/FloatingParticles";
import HeroSection from "@/components/HeroSection";
import JourneySection from "@/components/JourneySection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-[hsl(var(--gradient-start))] to-[hsl(var(--gradient-end))] overflow-x-hidden">
      <Background3DGrid />
      <FloatingParticles />
      
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
