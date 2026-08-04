import React from 'react';
import { Mic, Calendar, MapPin, Users, Presentation, ExternalLink, Download } from 'lucide-react';

interface Talk {
  title: string;
  event: string;
  location: string;
  date: string;
  description: string;
  audience: string;
  image: string;
  slides?: string;
}

const talks: Talk[] = [
  {
    title: "Unlocking the power of JAMstack",
    event: "Code on JVM TechMeetup 2025",
    location: "Chennai, India",
    date: "June 2025",
    description: "The future of frontend architecture and headless CMS integrations. Practical strategies for building fast, decoupled, and secure web applications.",
    audience: "150+ Developers & Engineers",
    image: "/uploads/jamstack.jpg",
    slides: "/uploads/jamstack.ppt"
  }
];

export const Talks: React.FC = () => {
  return (
    <section id="talks" className="py-24 relative px-4 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-semibold">
            <Mic className="w-3.5 h-3.5" />
            <span>Community & Tech Talks</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Speaking <span className="text-gradient-cyan">Engagements</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Sharing tech insights on modern JAMstack architecture, Next.js, and headless CMS ecosystems.
          </p>
        </div>

        {/* Talks Grid */}
        <div className="max-w-3xl mx-auto">
          {talks.map((talk, idx) => (
            <div
              key={idx}
              className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 glass-card-hover grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
            >
              {/* Left Image Banner */}
              <div className="md:col-span-5 relative rounded-2xl overflow-hidden aspect-video md:aspect-square bg-slate-900 border border-white/10 group">
                <img
                  src={talk.image}
                  alt={talk.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/uploads/placeholder.svg';
                  }}
                />
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Mic className="w-8 h-8 text-cyan-400 animate-pulse" />
                </div>
              </div>

              {/* Right Content */}
              <div className="md:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{talk.date}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-100">
                  {talk.title}
                </h3>

                <div className="space-y-1.5 text-xs text-slate-300">
                  <div className="flex items-center gap-2 font-medium">
                    <Presentation className="w-4 h-4 text-cyan-400" />
                    <span>{talk.event}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400">
                    <MapPin className="w-4 h-4 text-slate-500" />
                    <span>{talk.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400">
                    <Users className="w-4 h-4 text-slate-500" />
                    <span>{talk.audience}</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {talk.description}
                </p>

                {talk.slides && (
                  <div className="pt-2">
                    <a
                      href={talk.slides}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-slate-200 hover:text-cyan-400 transition-colors"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download Presentation (.PPT)</span>
                    </a>
                  </div>
                )}

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Talks;