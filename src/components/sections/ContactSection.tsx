import React, { useState } from 'react';
import { Mail, Calendar, Clock, Video, X, ArrowRight, CheckCircle, MessageCircle } from 'lucide-react';
import { Section, Card } from '@/components/ui';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [selectedProjectType, setSelectedProjectType] = useState('');
  const [selectedTimeline, setSelectedTimeline] = useState('');

  if (!isOpen) return null;

  const projectTypes = [
    'Web Development',
    'LTI Integration', 
    'Enterprise Software',
    'Microservices Architecture',
    'Technical Consulting',
    'Other'
  ];

  const timelines = [
    'Urgent (< 1 month)',
    'Normal (1-3 months)',
    'Planning (3+ months)',
    'Just exploring options'
  ];

  const handleEmailContact = () => {
    const subject = `Project Inquiry - UniAxis${selectedProjectType ? ` - ${selectedProjectType}` : ''}`;
    const body = `Hi,

I would like to discuss a potential project with UniAxis.

${selectedProjectType ? `Project Type: ${selectedProjectType}` : ''}
${selectedTimeline ? `Timeline: ${selectedTimeline}` : ''}

Please let me know when would be a good time to connect.

Thank you!`;

    const mailtoLink = `mailto:hello@uniaxis.com.au?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink);
    
    // GTM tracking
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: 'contact_method_selected',
        contact_method: 'email',
        project_type: selectedProjectType || 'not_specified',
        timeline: selectedTimeline || 'not_specified'
      });
    }
    
    onClose();
  };

  const handleScheduleCall = () => {
    // GTM tracking
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: 'calendly_meeting_clicked',
        meeting_type: 'consultation',
        project_type: selectedProjectType || 'not_specified',
        timeline: selectedTimeline || 'not_specified'
      });
    }
    
    window.open('https://calendly.com/hello-uniaxis/30min', '_blank');
    onClose();
  };

  const handleWhatsApp = () => {
    const message = `Hi! I'm interested in discussing a ${selectedProjectType || 'project'} with UniAxis. ${selectedTimeline ? `Timeline: ${selectedTimeline}. ` : ''}When would be a good time to connect?`;
    
    // GTM tracking
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: 'contact_method_selected',
        contact_method: 'whatsapp',
        project_type: selectedProjectType || 'not_specified'
      });
    }
    
    // Replace with your actual WhatsApp Business number when you have one
    const whatsappLink = `https://wa.me/61XXXXXXXXX?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-slate-800 rounded-xl max-w-lg w-full max-h-[90vh] overflow-y-auto border border-slate-600">
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-2xl font-bold text-white">Let's Connect</h3>
              <p className="text-gray-400">Choose how you'd prefer to start the conversation</p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Project Type Selection */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-300 mb-3">
              What type of project? (Optional)
            </label>
            <div className="grid grid-cols-2 gap-2">
              {projectTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedProjectType(selectedProjectType === type ? '' : type)}
                  className={`p-2 text-sm rounded-lg border transition-all ${
                    selectedProjectType === type
                      ? 'bg-primary-600 border-primary-500 text-white'
                      : 'bg-slate-700 border-slate-600 text-gray-300 hover:border-primary-500'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Timeline Selection */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-300 mb-3">
              Timeline? (Optional)
            </label>
            <div className="space-y-2">
              {timelines.map((timeline) => (
                <button
                  key={timeline}
                  onClick={() => setSelectedTimeline(selectedTimeline === timeline ? '' : timeline)}
                  className={`w-full p-2 text-sm rounded-lg border transition-all text-left ${
                    selectedTimeline === timeline
                      ? 'bg-primary-600 border-primary-500 text-white'
                      : 'bg-slate-700 border-slate-600 text-gray-300 hover:border-primary-500'
                  }`}
                >
                  {timeline}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Options */}
          <div className="space-y-3">
            <h4 className="text-lg font-semibold text-white mb-4">Choose your preferred method:</h4>
            
            {/* Schedule Call Option - Primary CTA */}
            <button
              onClick={handleScheduleCall}
              className="w-full flex items-center justify-between p-4 bg-gradient-to-r from-primary-600 to-secondary-500 hover:from-primary-700 hover:to-secondary-600 rounded-lg transition-all transform hover:scale-105 shadow-lg"
            >
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-3" />
                <div className="text-left">
                  <div className="font-semibold">Schedule a Call</div>
                  <div className="text-sm text-primary-100">Pick a time that works for you</div>
                </div>
              </div>
              <ArrowRight className="w-5 h-5" />
            </button>

            {/* Email Option */}
            <button
              onClick={handleEmailContact}
              className="w-full flex items-center justify-between p-4 bg-slate-700 hover:bg-slate-600 border border-slate-600 hover:border-primary-500 rounded-lg transition-all"
            >
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-blue-400" />
                <div className="text-left">
                  <div className="font-semibold text-white">Send Email</div>
                  <div className="text-sm text-gray-400">hello@uniaxis.com.au</div>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400" />
            </button>

            {/* WhatsApp Option - Commented out until you add WhatsApp Business */}
            {/*
            <button
              onClick={handleWhatsApp}
              className="w-full flex items-center justify-between p-4 bg-slate-700 hover:bg-slate-600 border border-slate-600 hover:border-green-500 rounded-lg transition-all"
            >
              <div className="flex items-center">
                <MessageCircle className="w-5 h-5 mr-3 text-green-400" />
                <div className="text-left">
                  <div className="font-semibold text-white">WhatsApp</div>
                  <div className="text-sm text-gray-400">Quick message</div>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400" />
            </button>
            */}
          </div>

          {/* Footer Note */}
          <div className="mt-6 p-4 bg-primary-600/10 border border-primary-600/20 rounded-lg">
            <div className="flex items-center text-sm text-primary-300">
              <Clock className="w-4 h-4 mr-2" />
              <span><strong>Quick Response:</strong> We typically respond within 4 hours during business hours</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ContactSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleStartConversation = () => {
    // GTM tracking for modal open
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: 'contact_modal_opened',
        location: 'contact_section'
      });
    }
    
    setIsModalOpen(true);
  };

  const handleQuickSchedule = () => {
    // GTM tracking for direct Calendly
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: 'calendly_direct_click',
        location: 'contact_section'
      });
    }
    
    window.open('https://calendly.com/hello-uniaxis/30min', '_blank');
  };

  return (
    <Section id="contact">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16 gradient-text">
        Get In Touch
      </h2>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8">
            Ready to bring your next project to life? Let's discuss how our expertise can help you achieve your goals.
          </p>
        </div>
        
        {/* Primary CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 sm:mb-12">
          <button
            onClick={handleStartConversation}
            className="btn-primary flex items-center justify-center cursor-pointer"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Start a Conversation
          </button>
          <button
            onClick={handleQuickSchedule}
            className="btn-secondary flex items-center justify-center cursor-pointer"
          >
            <Calendar className="w-5 h-5 mr-2" />
            Schedule 30min Call
          </button>
        </div>

        {/* Email Contact - Now Secondary */}
        <div className="flex justify-center mb-8 sm:mb-12">
          <div className="text-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <Mail className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-white">Or Email Directly</h3>
            <a 
              href="mailto:hello@uniaxis.com.au"
              className="text-lg sm:text-xl text-primary-400 hover:text-primary-300 transition-colors cursor-pointer font-medium"
              onClick={() => {
                // GTM tracking for direct email
                if (typeof window !== 'undefined' && (window as any).dataLayer) {
                  (window as any).dataLayer.push({
                    event: 'email_direct_click',
                    location: 'contact_section'
                  });
                }
              }}
            >
              hello@uniaxis.com.au
            </a>
          </div>
        </div>

        {/* Benefits Card */}
        <Card className="p-6 sm:p-8 text-center">
          <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Why Schedule a Call?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <div className="text-center">
              <Video className="w-8 h-8 text-primary-400 mx-auto mb-2" />
              <div className="text-sm text-gray-300">Face-to-face discussion for better understanding</div>
            </div>
            <div className="text-center">
              <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <div className="text-sm text-gray-300">Tailored solutions based on your specific needs</div>
            </div>
            <div className="text-center">
              <Clock className="w-8 h-8 text-blue-400 mx-auto mb-2" />
              <div className="text-sm text-gray-300">Clear next steps and timeline established</div>
            </div>
          </div>
          <p className="text-sm sm:text-base text-gray-400">
            Whether you need a complete application, LTI integration, or technical consulting, 
            we're here to help turn your vision into reality.
          </p>
        </Card>
      </div>

      {/* Contact Modal */}
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </Section>
  );
};
