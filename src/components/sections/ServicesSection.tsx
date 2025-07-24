import React from 'react';
import { Section, Card } from '@/components/ui';
import { services } from '@/data/services';

export const ServicesSection: React.FC = () => {
  return (
    <Section id="services">
      <h2 className="text-4xl font-bold text-center mb-16 gradient-text">
        Services
      </h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <Card key={index} className="p-8">
            <h3 className="text-2xl font-bold mb-4 text-primary-400">{service.title}</h3>
            <p className="text-gray-300 mb-6">{service.description}</p>
            <ul className="space-y-2">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-center text-gray-400">
                  <div className="w-2 h-2 bg-secondary-400 rounded-full mr-3"></div>
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
