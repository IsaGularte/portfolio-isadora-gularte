import StarField from "@/components/StarField";
import HeroSection from "@/components/HeroSection";
import TechStackSection from "@/components/TechStackSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import ProjectsSection from "@/components/ProjectsSection";
import EventsSection from "@/components/EventsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <StarField />

      <div className="relative z-10">
        <HeroSection />
        <TechStackSection />
        <ExperienceSection />
        <EducationSection />
        <ProjectsSection />
        <EventsSection />
        <ContactSection />
      </div>
    </main>
  );
};

export default Index;
