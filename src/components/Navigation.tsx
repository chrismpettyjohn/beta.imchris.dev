
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { downloadFile } from '@/lib/utils';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
      downloadFile('/files/Christopher-Pettyjohn-Resume.pdf', 'Christopher-Pettyjohn-Resume.pdf');
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'glass-nav shadow-2xl' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="font-playfair text-xl font-semibold text-navy-900">
            Christopher Pettyjohn
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-navy-700 hover:text-navy-900 transition-colors font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className="text-navy-700 hover:text-navy-900 transition-colors font-medium"
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-navy-700 hover:text-navy-900 transition-colors font-medium"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="text-navy-700 hover:text-navy-900 transition-colors font-medium"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-navy-700 hover:text-navy-900 transition-colors font-medium"
            >
              Contact
            </button>
            
            <Button 
              onClick={downloadResume}
              className="bg-navy-900/90 hover:bg-navy-800 text-white backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Download className="w-4 h-4 mr-2" />
              Resume
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
