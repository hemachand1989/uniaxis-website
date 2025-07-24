import React from 'react';
import { cn } from '@/utils/classNames';

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ className, children }) => {
  return (
    <div className={cn('card', className)}>
      {children}
    </div>
  );
};
