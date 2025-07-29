import React, { useState } from 'react';
import { Calendar, X, ArrowRight, CheckCircle, Mail } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [selectedProjectType, setSelectedProjectType] = useState('');

  if (!isOpen) return null;

  const projectTypes = [
    'Web Development',
    'LTI Integration', 
    'Enterprise Software',
    'Microservices Architecture',
    'Technical Consulting',
    'Other'
  ];

  const handleScheduleMeeting = () => {
    // Open Calendly with pre-filled information if project type is selected
    let calendlyUrl = 'https://calendly.com/hello-uniaxis/30min';
    
    if (selectedProjectType) {
      // Add project type as a note (Calendly will capture this)
      const note = encodeURIComponent(`Project Type: ${selectedProjectType}`);
      calendlyUrl += `?a1=${note}`;
    }
    
    window.open(calendlyUrl, '_blank');
    onClose();

    // GTM tracking
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'schedule_meeting_click', {
        meeting_type: 'consultation',
        project_type: selectedProjectType || 'not_specified',
        source: 'contact_modal'
      });
    }
  };

  const handleEmailContact = () => {
    const subject = `Project Inquiry - UniAxis${selectedProjectType ? ` - ${selectedProjectType}` : ''}`;
    const body = `Hi,

I would like to discuss a potential project with UniAxis.

${selectedProjectType ? `Project Type: ${selectedProjectType}` : ''}

Please let me know when would be a good time to connect.

Thank you!`;

    const mailtoLink = `mailto:hello@uniaxis.com.au?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink);
    onClose();

    // GTM tracking
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'email_contact_click', {
        project_type: selectedProjectType || 'not_specified',
        source: 'contact_modal'
      });
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-slate-800 rounded-xl max-w-lg w-full max-h-[90vh] overflow-y-auto border border-slate-600">
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-2xl font-bold text-white">Let's Connect</h3>
              <p className="text-gray-400">Choose how you'd like to start the conversation</p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
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
                  onClick={() => setSelectedProjectType(type)}
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

          {/* Contact Options */}
          <div className="space-y-3">
            {/* Primary: Schedule Meeting */}
            <button
              onClick={handleScheduleMeeting}
              className="w-full flex items-center p-4 bg-gradient-to-r from-primary-600 to-secondary-500 hover:from-primary-700 hover:to-secondary-600 rounded-lg transition-all transform hover:scale-105 shadow-lg"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-lg mr-4">
                <Calendar className="w-6 h-6" />
              </div>
              <div className="text-left flex-1">
                <div className="font-semibold text-lg">Schedule a Meeting</div>
                <div className="text-sm opacity-90">30 min consultation • Pick your time</div>
              </div>
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>

            {/* Secondary: Email */}
            <button
              onClick={handleEmailContact}
              className="w-full flex items-center p-4 bg-slate-700 hover:bg-slate-600 rounded-lg transition-all border border-slate-600 hover:border-primary-400"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-primary-600/20 rounded-lg mr-4">
                <Mail className="w-6 h-6 text-primary-400" />
              </div>
              <div className="text-left flex-1">
                <div className="font-semibold text-white">Send Email Instead</div>
                <div className="text-sm text-gray-400">hello@uniaxis.com.au</div>
              </div>
            </button>
          </div>

          {/* Why Schedule Section */}
          <div className="mt-6 p-4 bg-slate-700/50 rounded-lg border border-slate-600">
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

          {/* Response Time Guarantee */}
          <div className="mt-4 text-center">
            <p className="text-xs text-gray-400">
              💡 <strong className="text-white">Quick Response:</strong> We typically respond within 4 hours during business hours
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
