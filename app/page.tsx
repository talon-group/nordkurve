"use client"

import { useState, useEffect } from 'react';
import { Section } from './components/Section/Section';
import { CenteredHero, NeumorphicButton } from './components/Section/Hero';
import BlogSection from './components/Section/Content/Blog';
import AllProductsGrid from './components/Commerce/ProductGrid';

export default function Home() {
  // const { isAuthenticated } = getKindeServerSession();

  // useEffect(() => {
  //   const checkAuth = async () => {
  //     if (await isAuthenticated()) {
  //       redirect("/dashboard");
  //     }
  //   };
  //   checkAuth();
  // }, [isAuthenticated]);

  const heroProps = {
    banner: {
      href: 'https://example.com',
      text: <span>Check out our latest offers!</span>,
    },
    title: <h1>Welcome to Our Website!</h1>,
    description: 'Discover our products and services.',
    buttons: (
      <>
        <NeumorphicButton text="Get Started" onClick={() => console.log('Get Started')} />
        <NeumorphicButton text="Learn More" onClick={() => console.log('Learn More')} />
      </>
    ),
  };

  const buttons = [
    <NeumorphicButton key="get-started" text="Get Started" onClick={() => console.log('Get Started')} />,
    <NeumorphicButton key="learn-more" text="Learn More" onClick={() => console.log('Learn More')} />
  ];
  
    return (
      <>
        <Section>
          <div className="mt-3 text-center text-5xl font-bold tracking-tight text-red-500">Nordkurve 12 e.V.</div>
          <div className="mt-8 flex flex-row justify-center gap-x-5">
            {buttons}
          </div>
          <BlogSection />
          <div className="mt-3 text-center text-5xl font-bold tracking-tight text-red-500">Fan shop.</div>
          <AllProductsGrid />
        </Section>
    </>
  );
}
