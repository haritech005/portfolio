import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight, Building2, Package, Sparkles } from 'lucide-react';

const experiences = [
  {
    company: 'Lumel Technologies',
    location: 'Chennai, India',
    role: 'Web Developer',
    timeline: 'March 2025 – Present',
    status: 'Current Role',
    description: 'Developing scalable frontend applications and internal package ecosystems.',
    bullets: [
      'Developed and maintained scalable frontend applications using Next.js, React.js, and TypeScript, delivering responsive, cross-browser UIs with high performance.',
      'Built reusable UI components and integrated REST & GraphQL APIs using Strapi CMS, resolving integration friction and streamlining data delivery.',
      'Authored and published reusable frontend packages via GitHub Packages, enforcing architectural consistency and code reuse across multiple internal projects.',
      'Collaborated with designers, marketers, and engineering leads using Git/GitHub to ship production-ready features on tight schedules.'
    ],
    skills: ['Next.js', 'React.js', 'TypeScript', 'Strapi CMS', 'GraphQL', 'REST APIs', 'GitHub Packages', 'Tailwind CSS']
  },
  {
    company: 'Lumel Technologies',
    location: 'Chennai, India',
    role: 'Product Developer Intern',
    timeline: 'Sept 2024 – Feb 2025',
    status: 'Completed',
    description: 'Worked on Microsoft Power BI decision intelligence products (ValQ, xViz, Inforiver).',
    bullets: [
      'Contributed to ValQ, a business modeling and decision intelligence product for Microsoft Power BI enabling advanced scenario simulation.',
      'Developed and optimized interactive user interfaces using React.js and TypeScript, significantly improving component rendering performance.',
      'Collaborated with engineering leads to ensure seamless UI integration, scalability, and cross-product compatibility across xViz and Inforiver BI products.'
    ],
    skills: ['React.js', 'TypeScript', 'Power BI Ecosystem', 'ValQ', 'xViz', 'Inforiver', 'UI Performance']
  }
];

export const WorkExperience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative px-4 sm:px-6">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-400 text-xs font-semibold">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career History</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Professional <span className="text-gradient-indigo">Experience</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Proven track record of delivering enterprise-grade React, Next.js, and Power BI tools at Lumel Technologies.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative group">
              
              {/* Timeline Dot Indicator */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-5 h-5 rounded-full bg-slate-950 border-2 border-cyan-400 flex items-center justify-center group-hover:scale-125 group-hover:bg-cyan-400 transition-all duration-300 shadow-md shadow-cyan-500/30">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 group-hover:bg-slate-950" />
              </div>

              {/* Bento Experience Card */}
              <div className="glass-card p-6 sm:p-8 rounded-2xl border border-white/10 glass-card-hover space-y-6">
                
                {/* Top Info Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-5">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-bold text-slate-100">{exp.role}</h3>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-cyan-950 text-cyan-400 border border-cyan-500/30">
                        {exp.status}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-slate-400 mt-1 font-medium">
                      <span className="flex items-center gap-1 text-slate-300">
                        <Building2 className="w-3.5 h-3.5 text-cyan-400" />
                        {exp.company}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-500" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-cyan-300 self-start sm:self-auto">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.timeline}</span>
                  </div>
                </div>

                {/* Bullets */}
                <ul className="space-y-3">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Badges */}
                <div className="pt-4 border-t border-white/10">
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2.5">
                    Technologies Used
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-900/80 border border-white/10 text-slate-300 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WorkExperience;