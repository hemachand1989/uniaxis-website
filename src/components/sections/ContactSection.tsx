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
    // Build Calendly URL with pre-filled information
    let calendlyUrl = 'https://calendly.com/hello-uniaxis/30min';
    
    // Add project context as URL parameters that Calendly can capture
    const params = new URLSearchParams();
    if (selectedProjectType) {
      params.append('project_type', selectedProjectType);
    }
    if (selectedTimeline) {
      params.append('timeline', selectedTimeline);
    }
    
    if (params.toString()) {
      calendlyUrl += `?${params.toString()}`;
    }
    
    // GTM tracking
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: 'calendly_meeting_clicked',
        meeting_type: 'consultation',
        project_type: selectedProjectType || 'not_specified',
        timeline: selectedTimeline || 'not_specified',
        source: 'contact_modal'
      });
    }
    
    window.open(calendlyUrl, '_blank');
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
                  <div className="font-semibold">Schedule a Meeting</div>
                  <div className="text-sm text-primary-100">Free 30min consultation • Pick your time</div>
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
                  <div className="font-semibold text-white">Send Email Instead</div>
                  <div className="text-sm text-gray-400">hello@uniaxis.com.au</div>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400" />
            </button>
          </div>

          {/* Benefits Section */}
          <div className="mt-6 p-4 bg-primary-600/10 border border-primary-600/20 rounded-lg">
            <h4 className="text-sm font-semibold text-white mb-3 flex items-center">
              <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
              Why schedule a meeting?
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-start">
                <div className="w-1 h-1 bg-primary-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Better understanding of your specific requirements
              </li>
              <li className="flex items-start">
                <div className="w-1 h-1 bg-primary-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Immediate answers to your technical questions
              </li>
              <li className="flex items-start">
                <div className="w-1 h-1 bg-primary-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Faster project kickoff and clearer timeline
              </li>
            </ul>
          </div>

          {/* Response Time */}
          <div className="mt-4 text-center">
            <p className="text-xs text-gray-400">
              <Clock className="w-3 h-3 inline mr-1" />
              <strong className="text-white">Quick Response:</strong> We typically respond within 4 hours during business hours
            </p>
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
        location: 'contact_section',
        meeting_type: 'consultation'
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

        {/* Benefits Card - Fixed icon sizes for better balance */}
        <Card className="p-6 sm:p-8 text-center">
          <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Why Schedule a Call?</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-6">
            <div className="text-center">
              <Video className="w-8 h-8 sm:w-10 sm:h-10 text-primary-400 mx-auto mb-3 sm:mb-4" />
              <div className="text-sm sm:text-base text-gray-300">
                <strong className="text-white text-base sm:text-lg block mb-1 sm:mb-2">Face-to-Face</strong>
                Better understanding through direct conversation
              </div>
            </div>
            <div className="text-center">
              <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-green-400 mx-auto mb-3 sm:mb-4" />
              <div className="text-sm sm:text-base text-gray-300">
                <strong className="text-white text-base sm:text-lg block mb-1 sm:mb-2">Tailored Solutions</strong>
                Custom recommendations for your specific needs
              </div>
            </div>
            <div className="text-center">
              <Clock className="w-8 h-8 sm:w-10 sm:h-10 text-blue-400 mx-auto mb-3 sm:mb-4" />
              <div className="text-sm sm:text-base text-gray-300">
                <strong className="text-white text-base sm:text-lg block mb-1 sm:mb-2">Efficient Process</strong>
                Clear next steps and timeline established
              </div>
            </div>
          </div>
          <p className="text-sm sm:text-base text-gray-400">
            <strong className="text-white">Free 30-minute consultation</strong> • No commitment required • Quick response guaranteed
          </p>
        </Card>
      </div>

      {/* Contact Modal */}
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </Section>
  );
};
