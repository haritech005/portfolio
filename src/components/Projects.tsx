import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const Projects = () => {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const projects = [
    {
      title: "Code Sensei AI",
      shortDesc: "AI Learning Companion for Students",
      techStack: ["React", "Node.js", "Next.js", "Supabase", "Vapi", "TailwindCSS", "TypeScript"],
      description: "A complete e-commerce solution with user authentication, payment processing, and admin dashboard. Features include cart management, order tracking, and responsive design.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
      github: "https://github.com/haritech005/codesensei",
      live: "#",
      status: "IN Progress"
    },
    {
      title: "AgriTalk AI",
      shortDesc: "AI Chatbot for Farmers",
      techStack: ["React.js", "TypeScript", "Supabase", "PostgreSQL"],
      description: "A team-based task management application with real-time updates, drag-and-drop functionality, and team collaboration features. Built with modern React patterns.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
      github: "https://github.com/haritech005/E-Learning",
      live: "#",
      status: "Completed"
    },
    {
      title: "E-Learning Platform",
      shortDesc: "E-Learning Platforms for Students",
      techStack: ["PHP", "MYSQL", "JavaScript"],
      description: "Interactive weather dashboard showing real-time data, historical trends, and forecasts. Features beautiful charts and responsive design for multiple device types.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=250&fit=crop",
      github: "https://github.com/haritech005/kissan-ai",
      live: "#",
      status: "Completed"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed": return "bg-green-500";
      case "In Progress": return "bg-yellow-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-14 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-base sm:text-lg">Things I've built along the way 🚀</p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <div key={index} className="relative h-80 sm:h-96 perspective-1000">
                <div
                  className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d cursor-pointer ${flippedCard === index ? 'rotate-y-180' : ''
                    }`}
                  onClick={() => setFlippedCard(flippedCard === index ? null : index)}
                >
                  <Card className="absolute inset-0 backface-hidden hover:shadow-xl transition-shadow duration-300">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-36 sm:h-48 object-cover transition-transform duration-300 hover:scale-110"
                      />
                      <div className={`absolute top-2 sm:top-3 right-2 sm:right-3 px-2 py-1 ${getStatusColor(project.status)} text-white text-xs rounded-full`}>
                        {project.status}
                      </div>
                    </div>
                    <CardContent className="p-4 sm:p-6">
                      <h3 className="text-lg sm:text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-muted-foreground mb-3 sm:mb-4 text-sm sm:text-base">{project.shortDesc}</p>
                      <div className="flex flex-wrap gap-1 sm:gap-2 mb-4">
                        {project.techStack.map((tech, techIndex) => (
                          <span key={techIndex} className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 text-muted-foreground text-xs sm:text-sm">
                        Click to flip 🔄
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="absolute inset-0 backface-hidden rotate-y-180 hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-4 sm:p-6 h-full flex flex-col justify-between">
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">{project.title}</h3>
                        <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
                          {project.description}
                        </p>
                      </div>
                      <div className="space-y-2 sm:space-y-3">
                        <Button
                          variant="outline"
                          className="w-full text-sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(project.github, '_blank');
                          }}
                        >
                          <span className="mr-2">⚡</span> View Code
                        </Button>
                        <Button
                          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(project.live, '_blank');
                          }}
                        >
                          <span className="mr-2">🌐</span> Live Demo
                        </Button>
                      </div>
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

export default Projects;