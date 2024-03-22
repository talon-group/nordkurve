"use client"

import { useState, useEffect } from 'react';
import { Section } from './components/Section/Section';
import { CenteredHero, NeumorphicButton } from './components/Section/Hero';
import BlogSection from './components/Section/Content/Blog';
import AllProductsGrid from './components/Commerce/ProductGrid';
import Link from 'next/link';
import { NavbarTest } from './components/Navbar';

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

  const buttons = [
    <Link key="get-started" href='/'>
        <NeumorphicButton text="Get Started" />
    </Link>,
    <Link key="learn-more" href='/about'>
        <NeumorphicButton text="Learn More" />
    </Link>
 ]; 
  
    return (
      <>
        <Section>
          
          <div className="mt-3 text-center text-5xl font-bold tracking-tight text-red-500">Nordkurve 12 e.V.</div>
          <div className="mt-8 flex flex-row justify-center gap-x-5">
            {buttons}
          </div>
          <BlogSection />
          <AllProductsGrid />
        </Section>
    </>
  );
};