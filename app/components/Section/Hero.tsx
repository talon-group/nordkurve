import React from 'react';
import { Section } from './Section';

export const NeumorphicButton: React.FC<{ text: string; onClick: () => void }> = ({ text, onClick }) => {
    return (
      <button
        className="bg-gray-800 text-white text-xl font-bold py-4 px-6 rounded-lg shadow-inner shadow-gray-900 hover:bg-red-600 transition-colors duration-300"
        onClick={onClick}
      >
        {text}
      </button>
    );
  };

interface CenteredHeroProps {
  banner: {
    href: string;
    text: React.ReactNode;
  };
  title: React.ReactNode;
  description: string;
  buttons: React.ReactNode;
}

const CenteredHero: React.FC<CenteredHeroProps> = ({ banner, title, description, buttons }) => {
  return (
    <div
      className="hero-section text-white min-h-screen flex flex-col items-center justify-center" // bg-gradient-to-r from-gray-900 to-red-700 
    >
      <div className="text-center mb-5">
        <a
          className="underline hover:text-red-500 transition-colors duration-300"
          href={banner.href}
          target="_blank"
          rel="noopener"
        >
          {banner.text}
        </a>
      </div>

      <div className="mt-3 text-center text-5xl font-bold tracking-tight text-red-500">
        {title}
      </div>

      <div className="mx-auto mt-5 max-w-screen-md text-center text-xl text-gray-300">
        {description}
      </div>

      <div className="mt-8 flex flex-row justify-center gap-x-5">
        {buttons}
      </div>
    </div>
  );
};

export { CenteredHero };
