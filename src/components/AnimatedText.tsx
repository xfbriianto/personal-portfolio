import React from 'react';

interface AnimatedTextProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const AnimatedText = ({ children, className = '', delay = 0 }: AnimatedTextProps) => {
  return (
    <span
      data-aos="fade-up"
      data-aos-delay={delay}
      className={className}
    >
      {children}
    </span>
  );
};

export default AnimatedText;