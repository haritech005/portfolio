import React, { useState, useEffect } from 'react';
import { Home, Briefcase, Code2, FolderGit2, Mic, BookOpen, Mail, FileText } from 'lucide-react';

const navItems = [
  { id: 'hero', label: 'Home', icon: Home },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'projects', label: 'Projects', icon: FolderGit2 },
  { id: 'skills', label: 'Skills', icon: Code2 },
  { id: 'talks', label: 'Talks', icon: Mic },
  { id: 'blogs', label: 'Blogs', icon: BookOpen },
  { id: 'contact', label: 'Contact', icon: Mail },
];

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-3 sm:top-5 inset-x-0 z-50 flex justify-center px-2 sm:px-4 transition-all duration-300">
      <nav className={`glass-dock px-2 sm:px-3 py-1.5 sm:py-2 rounded-full flex items-center gap-0.5 sm:gap-1.5 shadow-2xl transition-all duration-300 max-w-[95vw] overflow-x-auto scrollbar-none ${scrolled ? 'scale-95 shadow-cyan-500/10' : ''}`}>
        {/* Logo / Badge */}
        <div className="hidden lg:flex items-center gap-2 pl-2 pr-3 border-r border-white/10 mr-1">
          <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-cyan-500 to-indigo-500 flex items-center justify-center font-bold text-xs text-slate-950 shadow-md">
            H
          </div>
          <span className="text-xs font-semibold text-slate-200 tracking-wider">HARIHARAN</span>
        </div>

        {/* Nav Items */}
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`relative px-2.5 sm:px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-300 flex items-center gap-1.5 ${
                isActive
                  ? 'text-cyan-400 bg-cyan-950/60 border border-cyan-500/30 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
              }`}
            >
              <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-cyan-400' : 'text-slate-400'}`} />
              <span className="hidden md:inline">{item.label}</span>
            </button>
          );
        })}

        {/* Resume Download Action */}
        <div className="pl-1 border-l border-white/10 ml-1">
          <a
            href="/uploads/HariharanResume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 sm:px-3.5 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-cyan-500 to-indigo-500 text-slate-950 hover:opacity-95 transition-opacity flex items-center gap-1.5 shadow-md shadow-cyan-500/20"
          >
            <FileText className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Resume</span>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
