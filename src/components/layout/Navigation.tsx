import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar } from 'lucide-react';
import { navigationItems } from '@/data/navigation';
import { scrollToSection, getActiveSection } from '@/utils/navigation';

export const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map(item => item.id);
      const current = getActiveSection(sections);
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  const handleScheduleCall = () => {
    // GTM tracking
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: 'calendly_nav_click',
        location: 'navigation',
        meeting_type: 'consultation'
      });
    }
    
    window.open('https://calendly.com/hello-uniaxis/30min', '_blank');
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm z-50 border-b border-slate-700">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo and Brand */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
          >
            <img 
              src="/logo.svg" 
              alt="UniAxis Logo" 
              className="w-10 h-10 flex-shrink-0"
            />
            <div className="text-2xl font-bold gradient-text leading-none">
              UniAxis
            </div>
          </button>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`transition-colors hover:text-primary-400 ${
                  activeSection === item.id ? 'text-primary-400' : 'text-gray-300'
                }`}
              >
                {item.label}
              </button>
            ))}
            
            {/* CTA Button */}
            <button
              onClick={handleScheduleCall}
              className="px-4 py-2 bg-gradient-to-r from-primary-600 to-secondary-500 hover:from-primary-700 hover:to-secondary-600 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center text-sm"
            >
              <Calendar className="w-4 h-4 mr-1" />
              Schedule Call
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-slate-700">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="block w-full text-left py-2 text-gray-300 hover:text-primary-400 transition-colors"
              >
                {item.label}
              </button>
            ))}
            
            {/* Mobile CTA */}
            <button
              onClick={handleScheduleCall}
              className="w-full mt-3 px-4 py-2 bg-gradient-to-r from-primary-600 to-secondary-500 hover:from-primary-700 hover:to-secondary-600 rounded-lg font-semibold transition-all flex items-center justify-center text-sm"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Schedule Call
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};
