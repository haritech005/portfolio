import { Card, CardContent } from '@/components/ui/card';
import { useState } from 'react';

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState(null);

  const skills = [
    { name: "React", icon: "⚛️", level: 95, description: "Building dynamic UIs with hooks and state management", projects: "15+ Projects", category: "Frontend" },
    { name: "Next.js", icon: "🪄", level: 95, description: "Crafted fast, SEO-friendly web apps using routing, SSR, and API routes", projects: "15+ Projects", category: "Frontend" },
    { name: "JavaScript", icon: "🟨", level: 90, description: "ES6+, async programming, and modern JS features", projects: "Daily Use", category: "Language" },
    { name: "TypeScript", icon: "🔷", level: 85, description: "Type-safe development for scalable applications", projects: "10+ Projects", category: "Language" },
    { name: "Node.js", icon: "🟢", level: 50, description: "Server-side JavaScript and API development", projects: "8+ APIs", category: "Backend" },
    { name: "Tailwind CSS", icon: "🎨", level: 90, description: "Utility-first CSS framework for rapid styling", projects: "12+ Projects", category: "Frontend" },
    { name: "Strapi js ", icon: "⚙️", level: 80, description: "NoSQL database design and optimization", projects: "6+ Databases", category: "Database" },
    { name: "Git", icon: "📋", level: 85, description: "Version control and collaborative development", projects: "Daily Use", category: "Tools" },
    { name: "Express.js", icon: "🚀", level: 50, description: "RESTful APIs and middleware development", projects: "8+ APIs", category: "Backend" },
    { name: "Java", icon: "☕", level: 50, description: "Solved DSA problems using Java with focus on logic, OOP, and clean code",projects: "100+ DSA Problems",category: "Backend"}
  ];

  const getCategoryColor = (category) => {
    switch (category) {
      case "Frontend": return "from-blue-500 to-cyan-500";
      case "Backend": return "from-green-500 to-emerald-500";
      case "Language": return "from-purple-500 to-violet-500";
      case "Database": return "from-orange-500 to-red-500";
      case "Tools": return "from-pink-500 to-rose-500";
      default: return "from-gray-500 to-slate-500";
    }
  };

  return (
    <section className="py-8 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-400/20 via-purple-400/20 to-pink-400/20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-6">
          <h2 className="text-xl font-bold text-foreground">Skills & Expertise</h2>
          <p className="text-muted-foreground text-sm">Interactive skill showcase</p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
            {skills.map((skill, index) => (
              <Card
                key={index}
                className={`group cursor-pointer transition-all duration-300 hover:scale-105 bg-card/80 backdrop-blur-sm border-border/50 hover:border-border/70 relative overflow-hidden ${activeSkill === index ? 'ring-2 ring-purple-400 scale-105' : ''
                  }`}
                onClick={() => setActiveSkill(activeSkill === index ? null : index)}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${getCategoryColor(skill.category)} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                <CardContent className="p-3 relative z-10">
                  <div className="text-center">
                    <div className="text-2xl mb-1 transform group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>

                    <h3 className="text-sm font-bold text-foreground mb-1">
                      {skill.name}
                    </h3>

                    <div className="w-full bg-muted rounded-full h-1.5">
                      <div
                        className={`h-1.5 rounded-full bg-gradient-to-r ${getCategoryColor(skill.category)} transition-all duration-1000 ease-out`}
                        style={{ width: activeSkill === index ? `${skill.level}%` : '0%' }}
                      ></div>
                    </div>

                    <div className={`overflow-hidden transition-all duration-500 ${activeSkill === index ? 'max-h-16 opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                      <p className="text-xs text-muted-foreground leading-tight mt-1">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-6 text-center">
            <div className="inline-block bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl p-3">
              <p className="text-xs text-muted-foreground mb-2">
                💡 <span className="font-semibold text-foreground">Pro Tip:</span> Click cards to see details!
              </p>
              <div className="flex flex-wrap justify-center gap-2 text-xs">
                <span className="flex items-center gap-1 text-blue-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                  Frontend
                </span>
                <span className="flex items-center gap-1 text-green-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                  Backend
                </span>
                <span className="flex items-center gap-1 text-purple-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                  Languages
                </span>
                <span className="flex items-center gap-1 text-orange-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                  Database
                </span>
                <span className="flex items-center gap-1 text-pink-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-pink-500"></div>
                  Tools
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;