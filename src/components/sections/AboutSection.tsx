import React from 'react';
import { Section, Card } from '@/components/ui';
import { skills } from '@/data/skills';

export const AboutSection: React.FC = () => {
  return (
    <Section id="about" className="bg-slate-800/50">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16 gradient-text">
        About UniAxis
      </h2>
      <div className="max-w-4xl mx-auto">
        <div className="text-base sm:text-lg text-gray-300 mb-8 sm:mb-12 leading-relaxed">
          <p className="mb-4 sm:mb-6">
            UniAxis is a technology consulting company specializing in complex software solutions for enterprise 
            and educational organizations. We bring deep technical expertise to challenging projects that require 
            robust, scalable systems and innovative problem-solving approaches.
          </p>
          <p className="mb-4 sm:mb-6">
            We focus on creating modern solutions using cutting-edge technologies like .NET, React, Angular, and TypeScript, 
            with specialized expertise in OAuth implementations, microservices architecture, and containerization with Kubernetes. 
            Our approach emphasizes thoughtful engineering that delivers reliable, maintainable systems.
          </p>
          <p>
            Our particular strength lies in educational technology, where we've developed comprehensive LTI (Learning Tools 
            Interoperability) solutions that seamlessly integrate with platforms like Canvas and Blackboard. We understand 
            the unique challenges of university systems and academic workflows.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {skills.map((skill, index) => (
            <Card key={index}>
              <div className="text-primary-400 mb-3 sm:mb-4">{skill.icon}</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">{skill.title}</h3>
              <p className="text-sm sm:text-base text-gray-400">{skill.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
};
