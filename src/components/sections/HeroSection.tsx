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
          Independent Technology Consulting
        </h2>
        <p className="text-xl md:text-2xl mb-8 text-gray-400 max-w-4xl mx-auto">
          Delivering modern web solutions with exceptional speed and quality
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-12 text-sm md:text-base">
          <span className="px-4 py-2 bg-primary-600/20 text-primary-300 rounded-full border border-primary-600/30">
            • Full Stack Development
          </span>
          <span className="px-4 py-2 bg-primary-600/20 text-primary-300 rounded-full border border-primary-600/30">
            • Microservices Architecture
          </span>
          <span className="px-4 py-2 bg-primary-600/20 text-primary-300 rounded-full border border-primary-600/30">
            • LTI Integrations
          </span>
          <span className="px-4 py-2 bg-primary-600/20 text-primary-300 rounded-full border border-primary-600/30">
            • Cloud Solutions
          </span>
          <span className="px-4 py-2 bg-primary-600/20 text-primary-300 rounded-full border border-primary-600/30">
            • University Systems
          </span>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button
            onClick={() => scrollToSection('services')}
            variant="primary"
            size="lg"
          >
            View Services
          </Button>
          <Button
            onClick={() => scrollToSection('team')}
            variant="secondary"
            size="lg"
          >
            Meet the Team
          </Button>
        </div>
      </div>
      {/* Clickable ChevronDown with proper cursor and hover effects */}
      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20 cursor-pointer hover:scale-110 transition-all duration-300 p-2 rounded-full hover:bg-primary-400/20"
        aria-label="Scroll to About section"
      >
        <ChevronDown className="w-8 h-8 text-primary-400 hover:text-primary-300" />
      </button>
    </section>
  );
};
