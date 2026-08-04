import React, { useState } from 'react';
import { ArrowRight, Github, Linkedin, FileText, CheckCircle2, Mic } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section id="hero" className="min-h-screen pt-28 pb-16 flex items-center justify-center relative overflow-hidden px-4 sm:px-6">
      {/* Background Ambient Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-tr from-cyan-500/10 to-indigo-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

        {/* Left Column: Headline & Bio */}
        <div className="lg:col-span-7 space-y-4 text-center lg:text-left">

          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-400 text-xs font-medium backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span className="w-2 h-2 rounded-full bg-cyan-400 -ml-4" />
            <span>Web Developer @ Lumel Technologies</span>
          </div>

          {/* Main Title (Clean 2-Line Layout) */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-100 leading-[1.2] lg:leading-[1.15]">
            Engineering <span className="text-gradient-cyan">Scalable Web Apps</span> <br className="hidden sm:inline" />
            & Modern Interfaces.
          </h1>

          {/* Bio */}
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed mx-auto lg:mx-0 pt-1">
            Frontend & Fullstack Engineer with <span className="text-slate-200 font-semibold">1+ years of experience</span> crafting responsive React/Next.js platforms, publishing reusable npm packages, and integrating robust backend APIs.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-3">
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-400 text-slate-950 font-semibold text-sm flex items-center gap-2 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] transition-all duration-300"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="/uploads/HariharanResume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 text-sm font-semibold flex items-center gap-2 transition-all duration-300 hover:border-cyan-500/30"
            >
              <FileText className="w-4 h-4 text-cyan-400" />
              <span>Download CV</span>
            </a>

            {/* Social Links */}
            <div className="flex items-center gap-2 pl-2">
              <a
                href="https://github.com/haritech005/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-cyan-400 border border-white/10 transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/hariharan001/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-cyan-400 border border-white/10 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Right Column: Code-Editor Style Card */}
        <div className="lg:col-span-5 flex justify-center">
          <div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
              transition: 'transform 0.15s ease-out',
            }}
            className="relative max-w-sm w-full p-6 rounded-3xl glass-card border border-white/15 shadow-2xl shadow-cyan-500/10 group"
          >
            {/* Top Bar inside Card */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-[10px] font-mono text-slate-400 tracking-wider">HARIHARAN_DEV.TS</span>
            </div>

            {/* Avatar Image Frame with Face Alignment */}
            <div className="relative w-48 h-48 sm:w-52 sm:h-52 mx-auto mb-6">

              {/* Outer Pulsing Aura */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500 to-indigo-500 opacity-30 blur-md group-hover:opacity-60 transition-opacity duration-500 animate-pulse" />
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-400 via-emerald-400 to-indigo-500 p-[2px] opacity-80 shadow-lg shadow-cyan-500/30">
                <div className="w-full h-full bg-slate-950 rounded-full" />
              </div>

              {/* Photo Image Frame */}
              <div className="relative z-10 w-full h-full rounded-full overflow-hidden p-1 bg-slate-900">
                <img
                  src="/uploads/hariharan.jpg"
                  alt="Hariharan J - Web Developer & Speaker"
                  className="w-full h-full object-cover object-top rounded-full transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/uploads/hariharan.jpg';
                  }}
                />
              </div>

              {/* Speaker Badge */}
              <div className="absolute -top-1 -right-1 z-20 p-2 rounded-full bg-slate-900 border border-cyan-500/40 text-cyan-400 shadow-md">
                <Mic className="w-3.5 h-3.5" />
              </div>

              {/* Status Badge Tag */}
              <div className="absolute -bottom-2 inset-x-0 mx-auto w-max z-20 px-3 py-1 rounded-full bg-slate-900/90 border border-emerald-500/40 text-[11px] font-medium text-emerald-400 flex items-center gap-1.5 shadow-lg backdrop-blur-md">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Open for Opportunities</span>
              </div>
            </div>

            {/* Title & Info inside Card */}
            <div className="text-center space-y-2">
              <h2 className="text-xl font-bold text-slate-100">Hariharan J</h2>
              <p className="text-xs text-cyan-400 font-medium">Web Developer @ Lumel Technologies</p>

              {/* Stack Pills (Top 4 Relevant Tags) */}
              <div className="flex flex-wrap justify-center gap-1.5 pt-3">
                {['Next.js', 'React.js', 'TypeScript', 'Supabase'].map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-white/5 border border-white/10 text-slate-300 hover:border-cyan-500/30 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
