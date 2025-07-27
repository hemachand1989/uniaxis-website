import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Section, Card } from '@/components/ui';
import { projects } from '@/data/projects';

export const PortfolioSection: React.FC = () => {
  return (
    <Section id="portfolio" className="bg-slate-800/50">
      <h2 className="text-4xl font-bold text-center mb-16 gradient-text">
        Featured Work
      </h2>
      <div className="max-w-4xl mx-auto">
        {projects.map((project, index) => (
          <Card key={index} className="p-8">
            <div className="mb-6">
              <div className="flex items-center mb-2">
                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center hover:text-primary-300 transition-colors cursor-pointer"
                  >
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                    <ExternalLink className="w-5 h-5 ml-2 text-primary-400" />
                  </a>
                ) : (
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                )}
              </div>
              <p className="text-primary-400 mb-4">{project.subtitle}</p>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech) => (
                <span key={tech} className="px-3 py-1 bg-primary-600 text-white rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
            <div className="text-gray-400">
              <p className="mb-2">
                <strong className="text-white">Key Features:</strong> {project.features.map(f => f.title).join(', ')}
              </p>
              <p>
                <strong className="text-white">Purpose:</strong> Demonstrates full-stack capabilities 
                and serves as a portfolio piece showcasing technical expertise.
              </p>
            </div>
            {project.url && (
              <div className="mt-6">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors cursor-pointer"
                >
                  Visit Website
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
            )}
          </Card>
        ))}
      </div>
    </Section>
  );
};
