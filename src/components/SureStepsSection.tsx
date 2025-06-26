
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Zap, Brain, Video, BookOpen } from 'lucide-react';

const SureStepsSection = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-ocean-100 to-sky-100 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6 drop-shadow-sm">
              Featured Project
            </h2>
            <p className="text-xl text-navy-700">
              SureSteps - AI-Powered Training Documentation Platform
            </p>
          </div>
          
          <Card className="glass-card border-0 shadow-2xl hover:shadow-3xl transition-all duration-500">
            <CardHeader className="text-center pb-8">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="bg-gradient-to-r from-mint-600 to-sky-600 rounded-full p-4">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-3xl md:text-4xl font-bold text-navy-900">
                  SureSteps
                </CardTitle>
              </div>
              <p className="text-xl text-mint-700 font-semibold">
                Founder & Technical Lead
              </p>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="glass rounded-lg p-6 border border-mint-200/30">
                  <div className="flex items-center gap-3 mb-4">
                    <Zap className="w-6 h-6 text-mint-600" />
                    <h3 className="text-2xl font-semibold text-navy-900">
                      The Challenge
                    </h3>
                  </div>
                  <p className="text-navy-700 leading-relaxed">
                    Companies struggle to create comprehensive, up-to-date training documentation 
                    that effectively onboards new employees and maintains institutional knowledge. 
                    Traditional methods are time-consuming and quickly become outdated.
                  </p>
                </div>
                
                <div className="glass rounded-lg p-6 border border-mint-200/30">
                  <div className="flex items-center gap-3 mb-4">
                    <Brain className="w-6 h-6 text-mint-600" />
                    <h3 className="text-2xl font-semibold text-navy-900">
                      The Solution
                    </h3>
                  </div>
                  <p className="text-navy-700 leading-relaxed">
                    SureSteps uses AI to automatically generate step-by-step training documentation 
                    by analyzing business data, integrating with video calls, and creating 
                    interactive guides that adapt to individual learning needs.
                  </p>
                </div>
              </div>
              
              <div className="glass-card rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <BookOpen className="w-6 h-6 text-mint-600" />
                  <h3 className="text-2xl font-semibold text-navy-900">
                    Key Features & Technical Highlights
                  </h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Brain className="w-4 h-4 text-mint-600 mt-1 flex-shrink-0" />
                      <span className="text-navy-700">AI-powered content generation from business data</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Video className="w-4 h-4 text-mint-600 mt-1 flex-shrink-0" />
                      <span className="text-navy-700">Real-time video call integration and analysis</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <BookOpen className="w-4 h-4 text-mint-600 mt-1 flex-shrink-0" />
                      <span className="text-navy-700">Interactive step-by-step documentation</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Zap className="w-4 h-4 text-mint-600 mt-1 flex-shrink-0" />
                      <span className="text-navy-700">Automated knowledge base updates</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Brain className="w-4 h-4 text-mint-600 mt-1 flex-shrink-0" />
                      <span className="text-navy-700">Personalized learning paths</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <BookOpen className="w-4 h-4 text-mint-600 mt-1 flex-shrink-0" />
                      <span className="text-navy-700">Analytics and progress tracking</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold text-navy-900 mb-4">
                  Technical Stack
                </h3>
                <div className="flex flex-wrap gap-3">
                  {['NodeJS', 'Typescript', 'NestJS', 'NextJS', 'React', 'AWS', 'AI', 'SQL', 'Docker', 'PHP', 'Dev Ops'].map((tech) => (
                    <span 
                      key={tech}
                      className="px-4 py-2 bg-gradient-to-r from-navy-100/80 to-sky-100/80 text-navy-800 rounded-full font-medium backdrop-blur-sm border border-navy-200/50 hover:scale-105 transition-transform cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="text-center pt-4">
                <a href="https://suresteps.io/" target="_blank">
                  <Button className="bg-gradient-to-r from-mint-600 to-sky-600 hover:from-mint-700 hover:to-sky-700 text-white px-8 py-3 text-lg backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                    <Zap className="w-5 h-5 mr-2 group-hover:animate-spin" />
                    Learn More About SureSteps.io
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SureStepsSection;
