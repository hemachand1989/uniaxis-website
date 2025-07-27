import React from 'react';
import { Mail, MapPin, Building } from 'lucide-react';
import { Section, Button, Card } from '@/components/ui';

const contactInfo = [
  {
    icon: <Mail className="w-8 h-8" />,
    title: "Email",
    value: "hello@uniaxis.com.au"
  },
  {
    icon: <MapPin className="w-8 h-8" />,
    title: "Location",
    value: "Available globally"
  },
  {
    icon: <Building className="w-8 h-8" />,
    title: "Business Registration",
    value: "ACN 678 809 697"
  }
];

const handleEmailClick = () => {
  window.location.href = 'mailto:hello@uniaxis.com.au?subject=Project Inquiry - UniAxis&body=Hi,%0D%0A%0D%0AI would like to discuss a potential project with you.%0D%0A%0D%0APlease let me know when would be a good time to connect.%0D%0A%0D%0AThank you!';
};

export const ContactSection: React.FC = () => {
  return (
    <Section id="contact">
      <h2 className="text-4xl font-bold text-center mb-16 gradient-text">
        Get In Touch
      </h2>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xl text-gray-300 mb-8">
            Ready to bring your next project to life? Let's discuss how my expertise can help you achieve your goals.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => {
            const colors = ['bg-primary-600', 'bg-secondary-600', 'bg-primary-500'];
            return (
              <div key={index} className="text-center">
                <div className={`${colors[index]} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  {info.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{info.title}</h3>
                <p className="text-gray-400">{info.value}</p>
              </div>
            );
          })}
        </div>

        <Card className="p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Let's Build Something Amazing</h3>
          <p className="text-gray-300 mb-6">
            Whether you need a complete application, LTI integration, or technical consulting, 
            I'm here to help turn your vision into reality.
          </p>
          <Button size="lg" onClick={handleEmailClick}>
            Start a Conversation
          </Button>
        </Card>
        
        {/* Business details footer */}
        <div className="mt-12 pt-8 border-t border-slate-600 text-center">
          <p className="text-sm text-gray-500">
            UniAxis • ABN: 48 678 809 697 • ACN: 678 809 697
          </p>
        </div>
      </div>
    </Section>
  );
};
