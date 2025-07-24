import React from 'react';
import { Section, Card } from '@/components/ui';
import { skills } from '@/data/skills';

export const AboutSection: React.FC = () => {
  return (
    <Section id="about" className="bg-slate-800/50">
      <h2 className="text-4xl font-bold text-center mb-16 gradient-text">
        About UniAxis
      </h2>
      <div className="max-w-4xl mx-auto">
        <div className="text-lg text-gray-300 mb-12 leading-relaxed">
          <p className="mb-6">
            As an independent contractor and principal full stack engineer, I bring over 15 years of deep technical expertise 
            to complex software challenges. My journey spans enterprise-level applications, educational technology, and 
            cutting-edge cloud solutions.
          </p>
          <p className="mb-6">
            I specialize in creating robust, scalable systems using modern technologies like .NET, React, and TypeScript, 
            with particular expertise in OAuth implementations, microservices architecture, and containerization with Kubernetes.
          </p>
          <p>
            My passion for educational technology has led me to become an expert in LTI (Learning Tools Interoperability) 
            solutions, seamlessly integrating custom applications with platforms like Canvas and Blackboard.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <Card key={index}>
              <div className="text-primary-400 mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <p className="text-gray-400">{skill.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
};
