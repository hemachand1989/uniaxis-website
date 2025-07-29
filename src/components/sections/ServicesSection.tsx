import React from 'react';
import { Section, Card } from '@/components/ui';
import { services } from '@/data/services';

export const ServicesSection: React.FC = () => {
  return (
    <Section id="services">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16 gradient-text">
        Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <Card key={index} className="p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-primary-400">{service.title}</h3>
            <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6">{service.description}</p>
            <ul className="space-y-2">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-center text-sm sm:text-base text-gray-400">
                  <div className="w-2 h-2 bg-secondary-400 rounded-full mr-3 flex-shrink-0"></div>
                  {feature}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  );
};
