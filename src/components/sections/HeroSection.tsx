import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui';
import { scrollToSection } from '@/utils/navigation';

export const HeroSection: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-secondary-400/20 animate-pulse"></div>
      <div className="container-custom text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text animate-fade-in">
          UniAxis
        </h1>
        <h2 className="text-2xl md:text-3xl mb-8 text-gray-300">
          Principal Full Stack Engineer
        </h2>
        <p className="text-xl md:text-2xl mb-12 text-gray-400 max-w-3xl mx-auto">
          15+ years of expertise in modern web development, microservices architecture, and LTI integrations
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button
            onClick={() => scrollToSection('services')}
            variant="primary"
            size="lg"
          >
            View Services
          </Button>
          <Button
            onClick={() => scrollToSection('portfolio')}
            variant="secondary"
            size="lg"
          >
            See Portfolio
          </Button>
        </div>
      </div>
      {/* Moved ChevronDown outside the container and added proper positioning */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <ChevronDown className="w-8 h-8 text-primary-400" />
      </div>
    </section>
  );
};
