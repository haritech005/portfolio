import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const HeroSection = () => {
  return (
    <section className="min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 relative overflow-hidden px-4 py-6 sm:py-8">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute top-20 right-10 w-32 h-32 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-10 left-1/2 w-32 h-32 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-5xl">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-10">
          <Card className="w-full max-w-xs sm:max-w-sm bg-card/80 backdrop-blur-sm border-2 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 animate-fade-in">
            <CardContent className="p-5 sm:p-9">
              <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl sm:text-3xl font-bold shadow-lg">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden ring-2 ring-gradient-to-br mx-auto">
                  <img src="/uploads/hariharan.jpg" alt="Profile" />
                </div>
              </div>
              <div className="text-center space-y-2">
                <h1 className="text-lg sm:text-xl font-bold text-foreground">Hariharan J</h1>
                <p className="text-primary font-semibold text-sm">Web Developer</p>
                <div className="bg-muted/50 rounded-lg p-2">
                  <p className="text-xs text-muted-foreground italic">
                    "From Curiosity to Code My Developer Journey"
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground mt-3">
                  <div>ID: DEV001</div>
                  <div>Level: Junior</div>
                  <div>Exp: 0-1 Years</div>
                  <div>Status: Active</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-col gap-3 w-full max-w-xs animate-slide-in-right">
            <a href="/uploads/resume.pdf" target="_blank" rel="noopener noreferrer" className="w-full">
              <Button variant="outline" size="lg" className="w-full text-sm py-3">
                📄 View Resume
              </Button>
            </a>
            <Button variant="outline" size="lg" className="w-full text-sm py-3">
              <a href="https://github.com/haritech005/" target='blank'>
                ⚡ GitHub Profile
              </a>
            </Button>
              <Button variant="outline" size="lg" className="w-full text-sm py-3">
              <a href="https://www.linkedin.com/in/hariharan001/" target='blank'>
                💼 Linkedin Profile
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
