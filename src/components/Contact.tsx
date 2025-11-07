import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch('https://resend-backend-theta.vercel.app/api/send-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (result.success) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Failed to send message. Please try again later.');
      }
    } catch (error) {
      console.error(error);
      alert('Something went wrong. Please try again.');
    }
  };


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id='contact' className="py-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 sm:w-48 h-32 sm:h-48 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-32 sm:w-48 h-32 sm:h-48 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">Let's Connect</h2>
          <p className="text-muted-foreground text-sm sm:text-base">Drop me a message in a bottle 💌</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
            <Card className="bg-gradient-to-br from-amber-100 to-amber-200 dark:from-amber-900/20 dark:to-amber-800/20 border-amber-300 shadow-lg rotate-2 hover:rotate-0 transition-transform duration-300">
              <CardContent className="p-4 sm:p-6">
                <div className="text-center mb-4">
                  <div className="text-4xl sm:text-5xl mb-2 animate-float">🍾</div>
                  <h3 className="text-base sm:text-lg font-bold text-amber-800 dark:text-amber-200">Message in a Bottle</h3>
                </div>
                <div className="space-y-3 text-amber-700 dark:text-amber-300">
                  <p className="italic text-xs sm:text-sm text-center">
                    "Cast your message into the digital sea..."
                  </p>
                  <div className="border-t border-amber-300 pt-3">
                    <p className="text-xs sm:text-sm text-center font-medium">
                      Let's build something great together 📩
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm shadow-lg">
              <CardContent className="p-4 sm:p-6">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-xs sm:text-sm font-medium mb-1">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                      className="w-full text-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs sm:text-sm font-medium mb-1">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      required
                      className="w-full text-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs sm:text-sm font-medium mb-1">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or just say hello!"
                      rows={4}
                      required
                      className="w-full resize-none text-sm"
                    />
                  </div>

                  <Button
                    onClick={handleSubmit}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-md hover:shadow-lg transition-all duration-300 text-sm"
                  >
                    <span className="mr-1">🚀</span> Send Message
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <h3 className="text-base sm:text-lg font-bold mb-4">Find me around the web</h3>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              <Button
                variant="outline"
                size="sm"
                className="hover:bg-gray-900 hover:text-white transition-colors text-xs sm:text-sm"
                onClick={() => window.open('https://github.com/haritech005/', '_blank')}
              >
                <span className="mr-1">⚡</span> GitHub
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="hover:bg-blue-600 hover:text-white transition-colors text-xs sm:text-sm"
                onClick={() => window.open('https://www.linkedin.com/in/hariharan001/', '_blank')}
              >
                <span className="mr-1">💼</span> LinkedIn
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="hover:bg-red-500 hover:text-white transition-colors text-xs sm:text-sm"
                onClick={() => window.open('mailto:j.hariharan005@gmail.com')}
              >
                <span className="mr-1">✉️</span> Email
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="hover:bg-red-500 hover:text-white transition-colors text-xs sm:text-sm"
                onClick={() => window.open('https://medium.com/@j.hariharan005')}
              >
                <span className="mr-1">📖</span> Medium
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;