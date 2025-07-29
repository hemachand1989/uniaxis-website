import React from 'react';
import { ChevronDown, Calendar } from 'lucide-react';
import { Button } from '@/components/ui';
import { scrollToSection } from '@/utils/navigation';

export const HeroSection: React.FC = () => {
  const handleScheduleCall = () => {
    // GTM tracking
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: 'calendly_hero_click',
        location: 'hero_section'
      });
    }
    
    window.open('https://calendly.com/hello-uniaxis/30min', '_blank');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* SEO-friendly structured content */}
      <header className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-secondary-400/20 animate-pulse"></header>
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
        
        {/* Service highlights with structured data */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-12 text-xs sm:text-sm md:text-base" role="list" aria-label="Our core services">
          <span className="px-2 sm:px-3 md:px-4 py-1 sm:py-2 bg-primary-600/20 text-primary-300 rounded-full border border-primary-600/30 text-center" role="listitem">
            • Full Stack Development
          </span>
          <span className="px-2 sm:px-3 md:px-4 py-1 sm:py-2 bg-primary-600/20 text-primary-300 rounded-full border border-primary-600/30 text-center" role="listitem">
            • Microservices Architecture
          </span>
          <span className="px-2 sm:px-3 md:px-4 py-1 sm:py-2 bg-primary-600/20 text-primary-300 rounded-full border border-primary-600/30 text-center" role="listitem">
            • LTI Integrations
          </span>
          <span className="px-2 sm:px-3 md:px-4 py-1 sm:py-2 bg-primary-600/20 text-primary-300 rounded-full border border-primary-600/30 text-center" role="listitem">
            • Enterprise Software
          </span>
          <span className="px-2 sm:px-3 md:px-4 py-1 sm:py-2 bg-primary-600/20 text-primary-300 rounded-full border border-primary-600/30 text-center" role="listitem">
            • University Systems
          </span>
        </div>
        
        <nav className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12 sm:mb-16" aria-label="Main navigation">
          <Button
            onClick={handleScheduleCall}
            variant="primary"
            size="lg"
            className="w-full sm:w-auto flex items-center justify-center"
          >
            <Calendar className="w-4 h-4 mr-2" />
            Schedule Free Call
          </Button>
          <Button
            onClick={() => scrollToSection('services')}
            variant="secondary"
            size="lg"
            className="w-full sm:w-auto"
          >
            View Services
          </Button>
        </nav>
      </div>
      
      {/* Perfectly centered scroll indicator */}
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
