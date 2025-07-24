import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 py-8 border-t border-slate-700">
      <div className="container-custom text-center">
        <div className="text-2xl font-bold mb-4 gradient-text">
          UniAxis
        </div>
        <p className="text-gray-400 mb-4">Principal Full Stack Engineer • 15+ Years Experience</p>
        <p className="text-gray-500 text-sm">
          © 2025 UniAxis. Building the future, one solution at a time.
        </p>
      </div>
    </footer>
  );
};
