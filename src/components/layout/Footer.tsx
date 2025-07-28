import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 py-8 border-t border-slate-700">
      <div className="container-custom text-center">
        <div className="text-2xl font-bold mb-4 gradient-text">
          UniAxis
        </div>
        <p className="text-gray-400 mb-4">Delivering modern web development with thoughtful engineering</p>
        <p className="text-gray-500 text-sm">
          Copyright © 2025 UniAxis Pty Ltd (ACN 678 809 697)
        </p>
      </div>
    </footer>
  );
};
