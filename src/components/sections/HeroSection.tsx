import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui';
import { scrollToSection } from '@/utils/navigation';

export const HeroSection: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-secondary-400/20 animate-pulse"></div>
      <div className="container-custom text-center relative z-10 py-20 sm:py-0">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 gradient-text animate-fade-in leading-tight">
          UniAxis
        </h1>
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6 sm:mb-8 text-gray-300">
          Technology Solutions & Consulting
        </h2>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-gray-400 max-w-4xl mx-auto">
          Delivering modern web development with thoughtful engineering
        </p>
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-12 text-xs sm:text-sm md:text-base">
          <span className="px-2 sm:px-3 md:px-4 py-1 sm:py-2 bg-primary-600/20 text-primary-300 rounded-full border border-primary-600/30 text-center">
            • Full Stack Development
          </span>
          <span className="px-2 sm:px-3 md:px-4 py-1 sm:py-2 bg-primary-600/20 text-primary-300 rounded-full border border-primary-600/30 text-center">
            • Microservices Architecture
          </span>
          <span className="px-2 sm:px-3 md:px-4 py-1 sm:py-2 bg-primary-600/20 text-primary-300 rounded-full border border-primary-600/30 text-center">
            • LTI Integrations
          </span>
          <span className="px-2 sm:px-3 md:px-4 py-1 sm:py-2 bg-primary-600/20 text-primary-300 rounded-full border border-primary-600/30 text-center">
            • Enterprise Software
          </span>
          <span className="px-2 sm:px-3 md:px-4 py-1 sm:py-2 bg-primary-600/20 text-primary-300 rounded-full border border-primary-600/30 text-center">
            • University Systems
          </span>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12 sm:mb-16">
          <Button
            onClick={() => scrollToSection('services')}
            variant="primary"
            size="lg"
            className="w-full sm:w-auto"
          >
            View Services
          </Button>
          <Button
            onClick={() => scrollToSection('team')}
            variant="secondary"
            size="lg"
            className="w-full sm:w-auto"
          >
            Meet the Team
          </Button>
        </div>
      </div>
      {/* Improved chevron centering with perfect alignment */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <button
          onClick={() => scrollToSection('about')}
          className="animate-bounce cursor-pointer hover:scale-110 transition-all duration-300 p-2 rounded-full hover:bg-primary-400/20 flex items-center justify-center"
          aria-label="Scroll to About section"
        >
          <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-primary-400 hover:text-primary-300" />
        </button>
      </div>
    </section>
  );
};
