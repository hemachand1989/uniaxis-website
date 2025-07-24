import React from 'react';
import { cn } from '@/utils/classNames';
import { SectionProps } from '@/types';

export const Section: React.FC<SectionProps> = ({ id, className, children }) => {
  return (
    <section id={id} className={cn('section-padding', className)}>
      <div className="container-custom">
        {children}
      </div>
    </section>
  );
};
