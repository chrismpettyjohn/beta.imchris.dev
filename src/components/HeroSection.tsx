
import { Button } from '@/components/ui/button';
import { downloadFile } from '@/lib/utils';
import { Download, Github, Linkedin, Code, Zap, Rocket } from 'lucide-react';

const HeroSection = () => {
  const downloadResume = () => {
    downloadFile('/files/Christopher-Pettyjohn-Resume.pdf', 'Christopher-Pettyjohn-Resume.pdf');
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-ocean-sky">
      {/* Enhanced atmospheric depth elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sky-300/20 to-ocean-400/30"></div>
      <div className="absolute top-20 right-20 w-64 h-64 bg-mint-400/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-sky-400/20 rounded-full blur-3xl animate-float delay-1000"></div>
      
      {/* Tech icons floating background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Code className="absolute top-1/4 left-1/4 text-white/10 w-16 h-16 animate-float" />
        <Zap className="absolute top-1/3 right-1/3 text-mint-300/20 w-12 h-12 animate-float delay-500" />
        <Rocket className="absolute bottom-1/3 left-1/3 text-sky-300/20 w-14 h-14 animate-float delay-1000" />
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Enhanced Profile Image */}
          <div className="relative w-40 h-40 mx-auto mb-8 group">
            <div className="absolute inset-0 bg-gradient-to-br from-mint-400 to-ocean-600 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative w-full h-full bg-gradient-to-br from-navy-900 via-ocean-700 to-navy-800 rounded-full flex items-center justify-center text-white text-5xl font-playfair font-bold shadow-2xl border-4 border-white/40 backdrop-blur-sm transform group-hover:scale-105 transition-transform duration-300">
              <img src="/img/its-me.jpeg" alt="Christopher Pettyjohn" className="w-full h-full object-cover rounded-full" style={{ objectPosition: 'center', width: '100%', height: '100%' }} />
            </div>
            {/* Tech badge overlay */}
            <div className="absolute -bottom-2 -right-2 bg-mint-600 text-white rounded-full p-2 shadow-lg border-2 border-white/20">
              <Code className="w-4 h-4" />
            </div>
          </div>
          
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-navy-900 mb-6 text-balance drop-shadow-lg">
              <span className="bg-gradient-to-r from-navy-900 via-ocean-700 to-navy-800 bg-clip-text text-transparent">Technical Founder</span>
              <br />
              <span className="text-mint-600 drop-shadow-md">& Software Engineer</span>
            </h1>
            
            <div className="glass-card rounded-xl p-6 mb-8 max-w-2xl mx-auto border border-mint-200/30">
              <p className="text-xl md:text-2xl text-navy-700 font-semibold leading-relaxed">
                15+ Years Building Scalable Systems
                <br />
                <span className="text-mint-700">Former Apple Engineer • AI Development Expert</span>
              </p>
            </div>
            
            <div className="glass-card rounded-2xl p-8 mb-12 max-w-3xl mx-auto">
              <p className="text-lg text-navy-800 text-balance leading-relaxed">
                I help startups and enterprises build <span className="font-semibold text-mint-700">robust, scalable software solutions</span>. 
                From distributed systems at <span className="font-semibold text-navy-900">Apple</span> to founding AI-powered startups, 
                I bring deep technical expertise and business acumen to every project.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                onClick={downloadResume}
                size="lg"
                className="bg-gradient-to-r from-navy-900 to-ocean-800 hover:from-navy-800 hover:to-ocean-700 text-white px-8 py-4 text-lg backdrop-blur-sm border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
              >
                <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Download Resume
              </Button>
              
              <div className="flex gap-4">
                
                <a href="https://linkedin.com/in/chrismpettyjohn" target="_blank">
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="glass border-navy-400/50 text-navy-800 hover:bg-navy-100/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
                  >
                    <Github className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                    GitHub
                  </Button>
                </a>
                <a href="https://github.com/chrismpettyjohn" target="_blank">
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="glass border-navy-400/50 text-navy-800 hover:bg-navy-100/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
                  >
                    <Linkedin className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                    LinkedIn
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
