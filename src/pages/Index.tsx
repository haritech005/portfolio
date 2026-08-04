import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import WorkExperience from '@/components/WorkExperience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Talks from '@/components/Talks';
import Blogs from '@/components/Blogs';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <WorkExperience />
        <Projects />
        <Skills />
        <Talks />
        <Blogs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
