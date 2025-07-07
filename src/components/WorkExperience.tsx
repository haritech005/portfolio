import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Calendar } from 'lucide-react';

const WorkExperience = () => {
  const internships = [
    {
      company: "Lumel Technologies",
      role: "Product Developer Intern",
      timeline: "Sep 2024 - Mar 2025",
      achievements: [
        "Contributed to building ValQ, a Power BI product for business modeling and scenario simulation.",
        "Developed and optimized interactive UIs using React.js and TypeScript for better performance.", 
        "Worked with BI tools like xViz and Inforiver, focusing on integration, scalability, and compatibility.",
      ],
      techStack: ["React", "JavaScript", "Git", "PowerBI"]
    },
    {
      company: "Marcello Tech",
      role: "Web Developer Trainee Intern", 
      timeline: "May 2023 - August 2023",
      achievements: [
        "Taught HTML, CSS, JavaScript, and MySQL to students as part of web development training.",
        "Built and improved front-end projects, focusing on user interface design and functionality.",
        "Worked with senior developers to debug code and gained hands-on experience in web technologies.",
      ],
      techStack: ["HTML", "CSS", "JavaScript", "MySQL", "API", "Git"]
    }
  ];

  const fullTimeExperience = [
    {
      company: "Lumel Technologies",
      role: "Web Developer Trainee",
      timeline: "March 2025 - Present", 
      achievements: [
        "Built and maintained responsive frontend apps using Next.js, React.js, and TypeScript.",
        "Structured backend content with Strapi.js and integrated dynamic content via REST APIs.",
        "Published an internal npm package and worked with cross-functional teams to deliver user-friendly features.",
      ],
      techStack: ["React", "TypeScript", "Strapi.js", "REST API", "GraphQL", "Tailwind CSS" ,"ShadCN UI"]
    }
  ];

  const ExperienceCard = ({ experience }) => (
    <Card className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02] mb-4 sm:mb-6">
      <CardHeader className="pb-3 sm:pb-4">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
          <div className="flex-1">
            <CardTitle className="text-lg sm:text-xl font-bold text-primary mb-1">
              {experience.company}
            </CardTitle>
            <h3 className="text-base sm:text-lg font-semibold mb-2">{experience.role}</h3>
            <div className="flex items-center text-muted-foreground text-sm">
              <Calendar className="w-4 h-4 mr-2 flex-shrink-0" />
              <span className="break-words">{experience.timeline}</span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="mb-4 sm:mb-6">
          <h4 className="font-semibold mb-2 sm:mb-3 text-foreground text-sm sm:text-base">Key Achievements:</h4>
          <ul className="space-y-1 sm:space-y-2">
            {experience.achievements.map((achievement, index) => (
              <li key={index} className="flex items-start text-xs sm:text-sm">
                <span className="text-green-500 mr-2 mt-1 flex-shrink-0">✅</span>
                <span className="leading-relaxed">{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold mb-2 sm:mb-3 text-foreground text-sm sm:text-base">Tech Stack:</h4>
          <div className="flex flex-wrap gap-1 sm:gap-2">
            {experience.techStack.map((tech, index) => (
              <Badge key={index} variant="secondary" className="text-xs sm:text-sm px-2 py-1">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-4">Work Experience</h2>
          <p className="text-muted-foreground text-base sm:text-lg px-4">My professional journey in code</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="internships" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6 sm:mb-8 h-auto">
              <TabsTrigger value="internships" className="text-sm sm:text-base py-2 sm:py-3 px-2 sm:px-4">
                <span className="hidden sm:inline">🧪 </span>Internships
              </TabsTrigger>
              <TabsTrigger value="fulltime" className="text-sm sm:text-base py-2 sm:py-3 px-2 sm:px-4">
                <span className="hidden sm:inline">💼 </span>Full-Time
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="internships" className="space-y-4 sm:space-y-6">
              <div className="text-center mb-4 sm:mb-6">
                <p className="text-muted-foreground text-sm sm:text-base px-4">
                  Where I learned the fundamentals and built my foundation
                </p>
              </div>
              {internships.map((internship, index) => (
                <ExperienceCard key={index} experience={internship} />
              ))}
            </TabsContent>
            
            <TabsContent value="fulltime" className="space-y-4 sm:space-y-6">
              <div className="text-center mb-4 sm:mb-6">
                <p className="text-muted-foreground text-sm sm:text-base px-4">
                  Putting skills into practice and making real impact
                </p>
              </div>
              {fullTimeExperience.map((job, index) => (
                <ExperienceCard key={index} experience={job} />
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;