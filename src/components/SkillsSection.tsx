
import { Code, Database, Cloud, Brain, Users, Zap } from 'lucide-react';

const skillsData = {
  'Frontend': {
    icon: Code,
    skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Vue.js', 'HTML5', 'CSS3', 'Tailwind CSS']
  },
  'Backend': {
    icon: Database,
    skills: ['Node.js', 'NestJS', 'PHP', 'Laravel', 'Python', 'Express.js', 'RESTful APIs', 'GraphQL']
  },
  'Databases': {
    icon: Database,
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch', 'DynamoDB']
  },
  'Cloud & DevOps': {
    icon: Cloud,
    skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform', 'Jenkins', 'GitHub Actions']
  },
  'AI': {
    icon: Brain,
    skills: [ 'AI Integration', 'LangChain', 'Vector Databases', 'Retrieval-Augmented Generation', 'Prompt Engineering', 'Embeddings & Semantic Search', 'Chatbot Development' ]
  },
  'Architecture & Leadership': {
    icon: Users,
    skills: ['Microservices', 'Event-Driven Architecture', 'System Design', 'Technical Leadership', 'Team Management', 'Agile/Scrum']
  }
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-sky-50 to-ocean-50 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6 drop-shadow-sm">
              Technical Expertise
            </h2>
            <p className="text-xl text-navy-700 max-w-3xl mx-auto">
              A comprehensive toolkit built over 15+ years of solving complex technical challenges 
              across diverse industries and scale requirements.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skillsData).map(([category, data]) => {
              const IconComponent = data.icon;
              return (
                <div 
                  key={category}
                  className="glass-card p-6 rounded-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-gradient-to-r from-mint-600 to-sky-600 rounded-full p-2 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-navy-900 border-b border-mint-200/50 pb-1">
                      {category}
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {data.skills.map((skill, index) => (
                      <div key={index} className="flex items-center group/skill">
                        <span className="w-2 h-2 bg-mint-600 rounded-full mr-3 flex-shrink-0 group-hover/skill:scale-125 transition-transform"></span>
                        <span className="text-navy-700 group-hover/skill:text-navy-900 transition-colors">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="mt-16 text-center">
            <div className="glass-card rounded-lg p-8 text-navy-900 max-w-4xl mx-auto border border-mint-200/30">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Zap className="w-8 h-8 text-mint-600" />
                <h3 className="text-2xl font-semibold">
                  Ready to Build Something Amazing?
                </h3>
              </div>
              <p className="text-lg text-navy-700 mb-6 max-w-2xl mx-auto">
                Whether you need a technical co-founder, senior engineering leadership, 
                or just want to discuss your next big idea, I'm here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="mailto:chrismpettyjohn@gmail.com" target="_blank">
                  <button 
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="bg-gradient-to-r from-mint-600 to-sky-600 hover:from-mint-700 hover:to-sky-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl hover:scale-105 group"
                  >
                    <Zap className="inline-block w-5 h-5 mr-2 group-hover:animate-pulse" />
                    Get In Touch
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
