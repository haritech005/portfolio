
import { Card, CardContent } from '@/components/ui/card';

const TechJourney = () => {
  const journeySteps = [
    {
      level: 1,
      title: "College Beginnings",
      emoji: "🎓",
      description: "Learned the fundamentals, but more importantly, found my love for code. Every semester pushed me one step closer to real-world building.",
      year: "B.Sc Computer Science | 2021 – 2024  ",
      color: "from-green-400 to-green-600"
    },
    {
      level: 2,
      title: "Web Developer Trainee Intern",
      emoji: "👨‍💻",
      description: "At Marcello Tech, I wasn’t just learning - I was teaching. Led sessions on HTML, CSS, JavaScript, and MySQL while building front-end projects that enhanced real UI experiences.",
      year: "May 2023 - August 2023",
      color: "from-blue-400 to-blue-600"
    },
    {
      level: 3,
      title: "Product Developer Intern",
      emoji: "🚀",
      description: "Contributed to building ValQ, a Power BI product for business modeling and decision-making. Worked with React.js and TypeScript to develop interactive UIs and integrated BI tools like xViz and Inforiver.",
      year: "Sep 2024 - Mar 2025",
      color: "from-purple-400 to-purple-600"
    },

    {
      level: 4,
      title: "Web Developer Trainee",
      emoji: "💼",
      description: "Built responsive web apps using Next.js, React.js, and Strapi with API integration. Created an internal npm package and collaborated with teams to deliver user-focused features.",
      year: "March 2025 - Present",
      color: "from-orange-400 to-orange-600"
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            My Tech Journey
          </h2>
          <p className="text-muted-foreground text-lg">Level up through experience</p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-green-400 via-blue-400 via-purple-400 via-pink-400 to-orange-400 hidden lg:block"></div>

          <div className="space-y-12">
            {journeySteps.map((step, index) => (
              <div key={step.level} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col lg:gap-8 gap-4`}>
                {/* Level badge */}
                <div className="lg:w-1/2 flex justify-center lg:justify-end">
                  <div className={`relative ${index % 2 === 0 ? 'lg:mr-8' : 'lg:ml-8'}`}>
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white text-2xl font-bold shadow-lg animate-glow`}>
                      {step.level}
                    </div>
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center text-xs">
                      ⭐
                    </div>
                  </div>
                </div>

                {/* Content card */}
                <div className="lg:w-1/2">
                  <Card className="hover:shadow-xl transition-all duration-300 bg-card/80 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-3xl">{step.emoji}</span>
                        <div>
                          <h3 className="text-md font-bold">{step.title}</h3>
                          <span className="text-sm text-muted-foreground">{step.year}</span>
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm">{step.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechJourney;
