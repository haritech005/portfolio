
import ThemeToggle from '@/components/ThemeToggle';
import HeroSection from '@/components/HeroSection';
import TechJourney from '@/components/TechJourney';
import WorkExperience from '@/components/WorkExperience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Talks from '@/components/Talks';
import BeyondCode from '@/components/BeyondCode';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen">
      <ThemeToggle />
      <HeroSection />
      <TechJourney />
      <WorkExperience />
      <Skills />
      <Projects />
      <Talks />
      <BeyondCode />
      <Contact />
    </div>
  );
};

export default Index;
