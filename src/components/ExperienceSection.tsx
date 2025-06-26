
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const experienceData = [
  {
    title: 'Co Founder & CTO',
    company: 'SureSteps AI',
    period: 'Present',
    logo: <img src="/img/sure.png" alt="SureSteps" width={80} height={80} />,
    description: 'Overseeing all technical operations and innovation at SureSteps AI. Driving the architecture of scalable AI-driven systems to enhance enterprise productivity.',
    achievements: [
      'Led development of AI-first automation platform',
      'Scaled engineering org from 0 to 10+ across 3 countries',
      'Implemented ML pipelines for real-time data intelligence'
    ],
    tech: ['TypeScript', 'Python', 'Next.js', 'Node.js', 'AWS', 'PostgreSQL']
  },
  {
    title: 'Lead Engineer',
    company: 'Nike',
    period: 'Present',
    logo: <img src="/img/nike.png" alt="Nike" width={80} height={80} />,
    description: 'Architected high-performance APIs and frontends using modern web stacks, enabling scalable commerce and logistics at Nike.',
    achievements: [
      'Deployed real-time inventory services using Node.js and DynamoDB',
      'Streamlined CI/CD pipelines reducing release cycles by 30%',
      'Integrated NATS for distributed event-driven workflows'
    ],
    tech: ['Node.js', 'React', 'TypeScript', 'DynamoDB', 'NATS']
  },
  {
    title: 'Lead Engineer',
    company: 'Mars (mms.com)',
    period: '2023 - Present',
    logo: <img src="/img/mms.png" alt="Nike" width={80} height={80} />,
    description: 'Led mission-critical e-commerce features and services for global consumer brand Mars. Built scalable solutions supporting millions of users.',
    achievements: [
      'Built services reducing packaging processing time by 85%',
      'Improved uptime to 99.9% across digital storefronts',
      'Architected delivery ETA engine with sub-40ms response'
    ],
    tech: ['Node.js', 'Java', 'Python', 'React', 'AWS']
  },
  {
    title: 'Senior Engineer',
    company: 'Apple',
    period: '2022 - 2023',
    logo: <img src="/img/apple.png" alt="Apple" width={80} height={80} />,
    description: 'Owned performance-critical frontend systems for internal Apple tools. Delivered component libraries used org-wide across hundreds of teams.',
    achievements: [
      'Reduced render time by 40% via virtualized components',
      'Built shared UI kit used by 200+ apps',
      'Boosted simulation platform UX through async optimization'
    ],
    tech: ['TypeScript', 'React', 'Node.js']
  },
  {
    title: 'Senior Engineer',
    company: 'Nike',
    period: '2021 - 2022',
    logo: <img src="/img/nike.png" alt="Nike" width={80} height={80} />,
    description: 'Engineered backend services for warehouse management and supply chain automation, improving fulfillment speed and reliability.',
    achievements: [
      'Reduced stock outages by 25% through intelligent reordering',
      'Improved data throughput 35% with DynamoDB optimization',
      'Enhanced MySQL query performance by 30%'
    ],
    tech: ['Node.js', 'Java', 'DynamoDB', 'MySQL']
  },
  {
    title: 'Software Engineer',
    company: 'Drive Social Media',
    period: '2018 - 2021',
    logo: <img src="/img/drive.png" alt="Nike" width={80} height={80} style={{background: '#131618'}}/>,
    description: 'Delivered key features that contributed to acquiring 1,000 new clients, generating an estimated $25 million in annual revenue',
    achievements: [
      'Led team of 5 engineers building core SaaS platform',
      'Improved platform performance by 800%',
      'Shaped strategy with executive leadership',
      
    ],
    tech: ['Laravel', 'PHP', 'Node.js', 'React', 'AWS']
  },
  {
    title: 'Founding Engineer',
    company: 'Impending Success LLC',
    period: '2015 - 2019',
    logo: '💼',
    description: 'Founded consultancy delivering full-stack web and mobile apps. Delivered e-commerce and content platforms for multiple clients.',
    achievements: [
      'Launched e-commerce platforms increasing sales by 40%',
      'Maintained 99.9% uptime on all client platforms',
      'Grew mobile engagement by 60%'
    ],
    tech: ['Angular', 'React', 'Laravel', 'Node.js']
  }
];


const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-sky-50 to-ocean-50 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6 drop-shadow-sm">
              Professional Experience
            </h2>
            <p className="text-xl text-navy-700 max-w-3xl mx-auto">
              Over 15 years of building scalable systems, leading technical teams, 
              and driving business growth through innovative software solutions.
            </p>
          </div>
          
          <div className="space-y-8">
            {experienceData.map((exp, index) => (
              <Card 
                key={index} 
                className="glass-card border-l-4 border-l-mint-600 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:border-l-mint-500 group"
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex items-center gap-4">
                      <div className="text-4xl bg-white/20 rounded-full p-3 backdrop-blur-sm border border-white/30 group-hover:scale-110 transition-transform">
                        {exp.logo}
                      </div>
                      <div>
                        <CardTitle className="text-2xl text-navy-900 mb-2">
                          {exp.title}
                        </CardTitle>
                        <div className="flex items-center gap-2 text-mint-700 font-semibold">
                          <span className="text-lg">{exp.company}</span>
                          <span>•</span>
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-navy-700 mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-navy-900 mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <span className="w-2 h-2 bg-mint-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-navy-700">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-navy-900 mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 bg-gradient-to-r from-mint-100/80 to-sky-100/80 text-mint-800 rounded-full text-sm font-medium backdrop-blur-sm border border-mint-200/50 hover:scale-105 transition-transform cursor-default"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
