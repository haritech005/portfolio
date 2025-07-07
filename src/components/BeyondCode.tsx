import { Card, CardContent } from '@/components/ui/card';
import { useState } from 'react';

const BeyondCode = () => {
  const [activeCard, setActiveCard] = useState(null);

  const interests = [
    {
      emoji: "✍️",
      title: "Content Creation",
      description: "I regularly post on LinkedIn to share insights on tech, learning, and developer life. Building a personal brand helps me grow and inspire others in the tech community."
    },
    {
      emoji: "🎤", 
      title: "Community & Events",
      description: "I actively attend tech meetups and recently spoke at Code on JVM – Chennai on JAMstack. I love being part of conversations that move tech forward."
    },
    {
      emoji: "💻",
      title: "Tinkering with Code", 
      description: "From API projects to fun side builds, I experiment with new tools and ideas regularly. For me, learning never stops at tutorials."
    },
    {
      emoji: "💬",
      title: "Learning in Public",
      description: "I document my journey — the wins, bugs, and lessons — so others can learn from it too. It keeps me accountable and helps the community grow."
    }
  ];

  return (
    <section className="py-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-foreground">🌟 Beyond Code — What Fuels My Passion</h2>
          <p className="text-muted-foreground text-sm sm:text-base">The human side of my developer journey</p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {interests.map((interest, index) => (
              <Card 
                key={index} 
                className={`group hover:shadow-lg transition-all duration-300 hover:scale-105 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-sm ${
                  activeCard === index ? 'ring-2 ring-purple-400 scale-105' : ''
                }`}
                onClick={() => setActiveCard(activeCard === index ? null : index)}
              >
                <CardContent className="p-4 text-center h-full flex flex-col">
                  <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                    {interest.emoji}
                  </div>
                  
                  <h3 className="text-base sm:text-lg font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {interest.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed flex-1">
                    {interest.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-6">
            <div className="inline-block bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl p-4 shadow-sm">
              <p className="text-muted-foreground text-xs sm:text-sm mb-2">
                These passions drive my growth as a developer and community member
              </p>
              <div className="flex justify-center space-x-2">
                <span className="animate-bounce">🚀</span>
                <span className="text-xs sm:text-sm font-medium">Always learning, always sharing</span>
                <span className="animate-bounce delay-100">✨</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeyondCode;