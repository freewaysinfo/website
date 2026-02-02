import React from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        'mx-auto w-full max-w-content px-containerMobile md:px-containerDesktop',
        className
      )}
    >
      {children}
    </div>
  );
};
