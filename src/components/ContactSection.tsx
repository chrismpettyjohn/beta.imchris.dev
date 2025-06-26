
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-deep-ocean text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-ocean-800 to-ocean-600"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
            Let's Build Something Great Together
          </h2>
          <p className="text-xl text-sky-100 mb-12 max-w-2xl mx-auto">
            Whether you're looking for a technical co-founder, senior engineering leadership, 
            or consulting on your next project, I'd love to hear from you.
          </p>
          
          <Card className="glass-card bg-white/5 backdrop-blur-xl border-white/10">
            <CardHeader>
              <div className="flex items-center justify-center gap-3 mb-2">
                <Mail className="w-8 h-8 text-mint-400" />
                <CardTitle className="text-2xl text-white">
                  Ready to Connect?
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="mailto:chrismpettyjohn@gmail.com" target="_blank">
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-mint-600 to-sky-600 hover:from-mint-700 hover:to-sky-700 text-white border-0 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
                  >
                    <Mail className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                    Send Email
                  </Button>
                </a>
                
                <a href="https://linkedin.com/in/chrismpettyjohn" target="_blank">
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="glass border-white/30 text-white hover:bg-white/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
                  >
                    <Linkedin className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                    LinkedIn
                  </Button>
                </a>
                
                
                <a href="https://github.com/chrismpettyjohn" target="_blank">
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="glass border-white/30 text-white hover:bg-white/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
                  >
                    <Github className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                    GitHub
                  </Button>
                </a>
              </div>
              
              <div className="pt-4 border-t border-white/20">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Mail className="w-5 h-5 text-mint-400" />
                  <p className="text-sky-200">
                    <strong>chrismpettyjohn@gmail.com</strong>
                  </p>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <MapPin className="w-4 h-4 text-sky-400" />
                  <p className="text-sky-300 text-sm">
                    Based in Detroit • Available for remote collaboration worldwide
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="mt-12 text-center">
            <p className="text-sky-300">
              © 2025 Christopher Pettyjohn. Built with passion for great software.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
