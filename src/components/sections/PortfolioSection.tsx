import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Section, Card } from '@/components/ui';
import { projects } from '@/data/projects';

export const PortfolioSection: React.FC = () => {
  return (
    <Section id="portfolio" className="bg-slate-800/50">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16 gradient-text">
        Featured Work
      </h2>
      <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
        {projects.map((project, index) => (
          <Card key={index} className="p-6 sm:p-8">
            <div className="mb-4 sm:mb-6">
              <div className="flex items-center mb-2 flex-wrap">
                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center hover:text-primary-300 transition-colors cursor-pointer"
                  >
                    <h3 className="text-xl sm:text-2xl font-bold">{project.title}</h3>
                    <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 ml-2 text-primary-400 flex-shrink-0" />
                  </a>
                ) : (
                  <h3 className="text-xl sm:text-2xl font-bold">{project.title}</h3>
                )}
              </div>
              <p className="text-sm sm:text-base text-primary-400 mb-3 sm:mb-4">{project.subtitle}</p>
            </div>
            <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
              {project.technologies.map((tech) => (
                <span key={tech} className="px-2 sm:px-3 py-1 bg-primary-600 text-white rounded-full text-xs sm:text-sm">
                  {tech}
                </span>
              ))}
            </div>
            <div className="text-sm sm:text-base text-gray-400">
              <p className="mb-2">
                <strong className="text-white">Key Features:</strong> {project.features.map(f => f.title).join(', ')}
              </p>
              <p>
                <strong className="text-white">Purpose:</strong> Demonstrates full-stack capabilities 
                and serves as a portfolio piece showcasing technical expertise.
              </p>
            </div>
            {project.url && (
              <div className="mt-4 sm:mt-6">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3 sm:px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors cursor-pointer text-sm sm:text-base"
                >
                  Visit Website
                  <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 ml-2" />
                </a>
              </div>
            )}
          </Card>
        ))}
      </div>
    </Section>
  );
};
