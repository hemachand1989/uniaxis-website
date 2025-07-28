import React from 'react';
import { Mail } from 'lucide-react';
import { Section, Card } from '@/components/ui';

export const ContactSection: React.FC = () => {
  return (
    <Section id="contact">
      <h2 className="text-4xl font-bold text-center mb-16 gradient-text">
        Get In Touch
      </h2>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xl text-gray-300 mb-8">
            Ready to bring your next project to life? Let's discuss how our expertise can help you achieve your goals.
          </p>
        </div>
        
        {/* Single Email Contact */}
        <div className="flex justify-center mb-12">
          <div className="text-center">
            <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-white">Email</h3>
            <a 
              href="mailto:hello@uniaxis.com.au"
              className="text-xl text-primary-400 hover:text-primary-300 transition-colors cursor-pointer font-medium"
            >
              hello@uniaxis.com.au
            </a>
          </div>
        </div>

        <Card className="p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Let's Build Something Amazing</h3>
          <p className="text-gray-300 mb-6">
            Whether you need a complete application, LTI integration, or technical consulting, 
            we're here to help turn your vision into reality.
          </p>
          <a
            href="mailto:hello@uniaxis.com.au?subject=Project%20Inquiry%20-%20UniAxis&body=Hi%2C%0D%0A%0D%0AI%20would%20like%20to%20discuss%20a%20potential%20project%20with%20you.%0D%0A%0D%0APlease%20let%20me%20know%20when%20would%20be%20a%20good%20time%20to%20connect.%0D%0A%0D%0AThank%20you!"
            className="btn-primary inline-block cursor-pointer"
          >
            Start a Conversation
          </a>
        </Card>
      </div>
    </Section>
  );
};
