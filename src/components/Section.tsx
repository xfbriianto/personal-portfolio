import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const Section = ({ id, title, children }: SectionProps) => {
  return (
    <section id={id} className="min-h-screen py-20 flex items-center">
      <div className="max-w-5xl mx-auto px-4 w-full">
        <h2 className="text-3xl font-bold mb-8 text-white">{title}</h2>
        {children}
      </div>
    </section>
  );
};

export default Section;