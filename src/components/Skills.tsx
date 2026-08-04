import React from 'react';
import { Code2, Cpu, Database, Layers, Terminal, Sparkles } from 'lucide-react';

interface SkillItem {
  name: string;
  isPrimary?: boolean;
}

interface SkillCategory {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  primarySkills: SkillItem[];
  secondarySkills: SkillItem[];
  familiarFooter?: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend & UI Engineering',
    icon: Layers,
    primarySkills: [
      { name: 'React.js', isPrimary: true },
      { name: 'Next.js', isPrimary: true },
      { name: 'TypeScript', isPrimary: true },
    ],
    secondarySkills: [
      { name: 'JavaScript (ES6+)' },
      { name: 'Tailwind CSS' },
      { name: 'Shadcn UI' },
      { name: 'HTML5 & CSS3' },
      { name: 'Redux' },
    ]
  },
  {
    title: 'Backend & Content Systems',
    icon: Database,
    primarySkills: [
      { name: 'Node.js', isPrimary: true },
      { name: 'Strapi CMS', isPrimary: true },
      { name: 'Supabase', isPrimary: true },
      { name: 'REST & GraphQL APIs', isPrimary: true },
    ],
    secondarySkills: [
      { name: 'Express.js' },
      { name: 'Koa.js' },
      { name: 'Vercel Serverless' },
    ]
  },
  {
    title: 'Languages & Databases',
    icon: Terminal,
    primarySkills: [
      { name: 'JavaScript', isPrimary: true },
      { name: 'Java (DSA)', isPrimary: true },
      { name: 'SQL', isPrimary: true },
      { name: 'PostgreSQL', isPrimary: true },
    ],
    secondarySkills: [
      { name: 'MySQL' },
      { name: 'Firebase Firestore' },
    ]
  },
  {
    title: 'Developer Tools & AI Stack',
    icon: Cpu,
    primarySkills: [
      { name: 'Git & GitHub', isPrimary: true },
      { name: 'GitHub Packages', isPrimary: true },
      { name: 'Cursor AI', isPrimary: true },
      { name: 'Claude AI', isPrimary: true },
      { name: 'GitHub Copilot', isPrimary: true },
      { name: 'Vapi AI', isPrimary: true },
    ],
    secondarySkills: [],
    familiarFooter: 'Also familiar with: Postman, VS Code, IntelliJ IDEA, Power BI'
  }
];

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 relative px-4 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-semibold">
            <Code2 className="w-3.5 h-3.5" />
            <span>Tech Stack Matrix</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Technical <span className="text-gradient-cyan">Expertise</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Modern frontend frameworks, headless CMS integrations, cloud services, and AI developer tooling.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 glass-card-hover flex flex-col justify-start space-y-5"
              >
                {/* Header */}
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 shadow-md">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-100">{cat.title}</h3>
                </div>

                {/* Primary & Secondary Skill Pills */}
                <div className="space-y-4">
                  
                  {/* Primary Highlighted Pills */}
                  <div className="flex flex-wrap gap-2">
                    {cat.primarySkills.map((skill, pIdx) => (
                      <div
                        key={pIdx}
                        className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-cyan-950/80 border border-cyan-500/50 text-cyan-300 shadow-sm flex items-center gap-1.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                        <span>{skill.name}</span>
                      </div>
                    ))}

                    {/* Secondary Outlined Pills */}
                    {cat.secondarySkills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="px-3 py-1.5 rounded-xl text-xs font-medium bg-slate-900/80 border border-white/10 text-slate-300 hover:border-cyan-500/30 transition-colors"
                      >
                        <span>{skill.name}</span>
                      </div>
                    ))}
                  </div>

                  {/* Familiar Footer Row for Dev Tools */}
                  {cat.familiarFooter && (
                    <div className="pt-3 border-t border-white/10 text-xs font-mono text-slate-400">
                      {cat.familiarFooter}
                    </div>
                  )}

                </div>
              </div>
            );
          })}
        </div>

        {/* Modern Developer Workflow Callout Bento */}
        <div className="glass-card p-6 sm:p-8 rounded-3xl border border-indigo-500/30 bg-gradient-to-r from-indigo-950/40 via-slate-900/60 to-cyan-950/40 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>High-Velocity Engineering Workflow</span>
            </div>
            <h4 className="text-lg font-bold text-slate-100">
              Modern Engineering Practices & Rapid Feature Delivery
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Utilizing modern developer tools, reusable npm packages, clean Git workflows, and AI coding assistants (Cursor AI, Copilot) to deliver production-ready features quickly and reliably.
            </p>
          </div>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs transition-colors shrink-0 shadow-lg shadow-indigo-500/20"
          >
            Let's Collaborate
          </a>
        </div>

      </div>
    </section>
  );
};

export default Skills;