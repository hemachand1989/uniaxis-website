import React from 'react';
import { User, Users, Briefcase } from 'lucide-react';
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
          <h3 className="text-3xl font-bold mb-4 text-white">Hem Paruchuri</h3>
          <p className="text-xl text-primary-400 mb-6">Principal Full Stack Engineer & Founder</p>
          <p className="text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto">
            With over 15 years of experience in software development, I specialize in creating robust, 
            scalable solutions for complex technical challenges. As an independent technology consultant, 
            I lead UniAxis to deliver exceptional results through modern development practices, 
            enterprise-grade architecture, and innovative problem-solving approaches.
          </p>
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
          <h3 className="text-2xl font-bold mb-8 text-white">Core Expertise</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              '.NET & C#', 'React & TypeScript', 'Microservices Architecture', 
              'LTI Integrations', 'OAuth & Security', 'PostgreSQL & SQL Server',
              'Docker & Kubernetes', 'Azure & AWS', 'Canvas & Blackboard'
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
