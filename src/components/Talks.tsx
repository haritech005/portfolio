import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Talks = () => {
  const talks = [
    {
      title: "Unlocking the power of JAMStack",
      event: "Code on JVM TechMeetup 2025",
      location: "Chennai",
      date: "June 2025",
      description: "Unlocking the power of JAMStack: THE FUTURE OF FRONTEND AND HEADLESS CMS.",
      audience: "150+ developers",
      image: "/uploads/jamstack.jpg",
      slides: "/uploads/jamstack.ppt"
    },
  ];

  // // Function to handle slides viewing without downloading
  // const viewSlides = (slidesUrl) => {
  //   // Open in new tab/window to view, not download
  //   window.open(slidesUrl, '_blank', 'noopener,noreferrer');
  // };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-14 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">Speaking Engagements</h2>
          <p className="text-muted-foreground text-base sm:text-lg">Sharing knowledge with the community 🎤</p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Dynamic grid that centers single item on desktop */}
          <div className={`grid gap-6 sm:gap-8 ${talks.length === 1
              ? 'grid-cols-1 lg:flex lg:justify-center'
              : 'grid-cols-1 lg:grid-cols-2'
            }`}>
            {talks.map((talk, index) => (
              <Card
                key={index}
                className={`overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 group bg-card/80 backdrop-blur-sm ${talks.length === 1 ? 'lg:max-w-lg' : ''
                  }`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={talk.image}
                    alt={talk.title}
                    className="w-full h-40 sm:h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-3xl sm:text-4xl animate-bounce">🎤</div>
                  </div>
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-primary text-primary-foreground px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                    {talk.date}
                  </div>
                </div>

                <CardContent className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {talk.title}
                  </h3>
                  <div className="space-y-1 sm:space-y-2 mb-3 sm:mb-4 text-xs sm:text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <span>🏛️</span>
                      <span>{talk.event}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>📍</span>
                      <span>{talk.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>👥</span>
                      <span>{talk.audience}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
                    {talk.description}
                  </p>

                  {/* <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors text-sm"
                    onClick={() => viewSlides(talk.slides)}
                  >
                    <span className="mr-2">📊</span> View Slides
                  </Button> */}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10 sm:mt-12">
            <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/50 dark:to-purple-950/50 border-none">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Interested in having me speak?</h3>
                <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base">
                  I love sharing knowledge about web development, React, and developer productivity.
                </p>
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-sm sm:text-base">
                  <span className="mr-2">✉️</span><a href="#contact"> Get in Touch</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Talks;