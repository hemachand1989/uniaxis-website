import React from 'react';
import { User, Users, Briefcase, ExternalLink } from 'lucide-react';
import { Section, Card } from '@/components/ui';

export const TeamSection: React.FC = () => {
  return (
    <Section id="team" className="bg-slate-800/50">
      <h2 className="text-4xl font-bold text-center mb-16 gradient-text">
        Meet the Team
      </h2>
      <div className="max-w-6xl mx-auto">
        {/* About Hem Paruchuri */}
        <div className="text-center mb-16">
          <div className="w-32 h-32 bg-gradient-to-r from-primary-600 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <User className="w-16 h-16 text-white" />
          </div>
          <a
            href="https://www.linkedin.com/in/hem-paruchuri-075b65105/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center hover:text-primary-300 transition-colors"
          >
            <h3 className="text-3xl font-bold mb-4 text-white">Hem Paruchuri</h3>
            <ExternalLink className="w-5 h-5 ml-2 text-primary-400" />
          </a>
          <p className="text-xl text-primary-400 mb-6">Principal Full Stack Engineer & Founder</p>
          <p className="text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto mb-8">
            With over 15 years of experience in software development, I specialize in creating robust, 
            scalable solutions for complex technical challenges. As an independent technology consultant, 
            I lead UniAxis to deliver exceptional results through modern development practices, 
            enterprise-grade architecture, and innovative problem-solving approaches.
          </p>

          {/* University & Educational Technology Expertise */}
          <div className="bg-gradient-to-r from-slate-700 to-slate-600 p-6 rounded-xl border border-slate-500 mb-8">
            <h4 className="text-xl font-bold mb-4 text-primary-300">University & Educational Technology Expertise</h4>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h5 className="font-semibold text-white mb-2">🎓 LTI Template Library</h5>
                <p className="text-gray-300 text-sm">
                  Created comprehensive LTI template library supporting multiple versions (1.1, 1.3, Advantage) 
                  for seamless LMS integration with Canvas, Blackboard, and other educational platforms.
                </p>
              </div>
              <div>
                <h5 className="font-semibold text-white mb-2">🏫 Student Information Systems</h5>
                <p className="text-gray-300 text-sm">
                  Specialized in integrating with university SIS systems, student portals, and academic 
                  management platforms with secure data exchange and real-time synchronization.
                </p>
              </div>
              <div>
                <h5 className="font-semibold text-white mb-2">🔗 Integration Translation Layers</h5>
                <p className="text-gray-300 text-sm">
                  Developed custom integration layers that handle complex data translations between 
                  disparate university systems, ensuring seamless communication and data integrity.
                </p>
              </div>
              <div>
                <h5 className="font-semibold text-white mb-2">📚 Academic Workflow Automation</h5>
                <p className="text-gray-300 text-sm">
                  Built automated workflows for academic processes including enrollment, grading, 
                  assessment delivery, and reporting across multiple institutional systems.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Working Models */}
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center p-8">
            <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <User className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-white">Independent Projects</h3>
            <p className="text-gray-300">
              Direct collaboration on focused projects where I handle the full development lifecycle, 
              from architecture design to deployment and maintenance.
            </p>
          </Card>

          <Card className="text-center p-8">
            <div className="w-16 h-16 bg-secondary-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-white">Team Collaboration</h3>
            <p className="text-gray-300">
              Seamless integration with your existing development teams, providing technical leadership, 
              mentoring, and specialized expertise to accelerate project delivery.
            </p>
          </Card>

          <Card className="text-center p-8">
            <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Briefcase className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-white">Scalable Solutions</h3>
            <p className="text-gray-300">
              For larger projects, I can assemble and manage teams of skilled engineers, 
              ensuring the right expertise is applied at every stage of development.
            </p>
          </Card>
        </div>

        {/* Core Expertise */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8 text-white">Core Technical Expertise</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              '.NET & C#', 'React & TypeScript', 'Microservices Architecture', 
              'LTI Integrations', 'OAuth & Security', 'PostgreSQL & SQL Server',
              'Docker & Kubernetes', 'Azure & AWS', 'Canvas & Blackboard',
              'Student Information Systems', 'Academic Workflows', 'API Design'
            ].map((skill) => (
              <span key={skill} className="px-4 py-2 bg-primary-600 text-white rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};
