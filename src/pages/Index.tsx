
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ExperienceSection from '@/components/ExperienceSection';
import SureStepsSection from '@/components/SureStepsSection';
import SkillsSection from '@/components/SkillsSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ExperienceSection />
      <SureStepsSection />
      <SkillsSection />
      <ContactSection />
    </div>
  );
};

export default Index;
