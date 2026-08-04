import React from 'react';
import { ExternalLink, Github, FolderGit2, Zap, ArrowUpRight } from 'lucide-react';

interface Project {
  title: string;
  category: string;
  tagline: string;
  description: string;
  image: string;
  techStack: string[];
  github?: string;
  live?: string;
  highlights: string[];
  featured: boolean;
}

const projects: Project[] = [
  {
    title: 'CR7 Menswear',
    category: 'Fullstack E-Commerce',
    tagline: 'Production E-Commerce & Admin Platform',
    description: 'Production-ready e-commerce platform and admin management suite built for a retail clothing business with inventory management, RBAC, and serverless workflows.',
    image: '/uploads/cr7menswear.png',
    techStack: ['React.js', 'Vite', 'Tailwind CSS', 'Firebase Firestore', 'Cloudinary', 'Vercel Serverless', 'REST APIs'],
    live: 'https://cr7-menswear.vercel.app/',
    highlights: [
      'Firebase Firestore with Role-Based Access Control (RBAC)',
      'Vercel Serverless APIs for dynamic OpenGraph metadata & media cleanup',
      'Structured data & SEO optimization'
    ],
    featured: true
  },
  {
    title: 'CODESENSEI',
    category: 'AI Learning Platform',
    tagline: 'Real-Time AI Voice Assistant for CS Concepts',
    description: 'Conversational AI learning assistant designed to explain computer science topics like DSA, DBMS, OS, and System Design through real-time voice and text interactions.',
    image: '/uploads/codesensei.png',
    techStack: ['Next.js', 'React.js', 'TypeScript', 'Supabase', 'Vapi AI', 'Clerk Auth', 'Sentry', 'Tailwind CSS', 'Shadcn UI'],
    github: 'https://github.com/haritech005/codesensei',
    live: 'https://code-sensei-ai.vercel.app',
    highlights: [
      'Conversational AI explanations powered by Vapi and OpenAI',
      'Clerk authentication & Supabase database integration',
      'Sentry real-time error monitoring'
    ],
    featured: true
  }
];

export const Projects: React.FC = () => {
  const handleCardClick = (project: Project) => {
    const targetUrl = project.live && project.live !== '#' ? project.live : project.github;
    if (targetUrl) {
      window.open(targetUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="projects" className="py-24 relative px-4 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-semibold">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Spotlight <span className="text-gradient-cyan">Projects</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Production fullstack applications and real-time platforms. Click any card to launch the live application.
          </p>
        </div>

        {/* Projects Spotlight Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              onClick={() => handleCardClick(project)}
              className={`glass-card p-6 sm:p-8 rounded-3xl border border-white/10 glass-card-hover flex flex-col justify-between space-y-6 relative overflow-hidden cursor-pointer group`}
            >
              {/* Top Meta Bar */}
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-cyan-950/80 text-cyan-300 border border-cyan-500/30">
                  {project.category}
                </span>
                <div className="flex items-center gap-2">
                  {project.github && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.github, '_blank', 'noopener,noreferrer');
                      }}
                      className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-cyan-400 border border-white/10 transition-colors"
                      title="View GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </button>
                  )}
                  {project.live && (
                    <span
                      className="p-2 rounded-xl bg-cyan-950 text-cyan-400 border border-cyan-500/40 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors shadow-sm"
                      title="Launch Live App"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </span>
                  )}
                </div>
              </div>

              {/* Title & Tagline */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-slate-100 group-hover:text-cyan-300 transition-colors flex items-center gap-2">
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-5 h-5 text-cyan-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </h3>
                </div>
                <p className="text-xs font-semibold text-cyan-400">{project.tagline}</p>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-1">
                  {project.description}
                </p>
              </div>

              {/* Project Image Banner */}
              <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-[16/9] bg-slate-950 flex items-center justify-center p-1 group-hover:border-cyan-500/40 transition-colors">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain object-center rounded-xl group-hover:scale-[1.03] transition-transform duration-500"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/uploads/placeholder.svg';
                  }}
                />
              </div>

              {/* Feature Highlights */}
              <div className="space-y-2">
                <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                  Key Accomplishments
                </div>
                <ul className="space-y-1.5">
                  {project.highlights.map((item, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <Zap className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Pills & Click Prompt */}
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-white/5 border border-white/10 text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="text-[11px] font-semibold text-cyan-400 flex items-center gap-1 group-hover:underline shrink-0">
                  <span>Visit Live App</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
