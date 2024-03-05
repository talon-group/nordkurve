"use client"

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { RegisterLink } from '@kinde-oss/kinde-auth-nextjs/components';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { redirect } from 'next/navigation';
import announcements, { Announcement } from './components/Content/Announcements';
import { getBookmarkedAnnouncements } from './lib/bookmarks';
import { Section } from './components/Section/Section';
import { CenteredHero, NeumorphicButton } from './components/Section/Hero';

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

  const handleAddToFeed = (url: string) => {
    console.log("Adding URL to feed:", url);
  };

  // Get the bookmarked announcements
  const [bookmarkedAnnouncements, setBookmarkedAnnouncements] = useState<Announcement[]>([]);

  useEffect(() => {
    // Fetch bookmarked announcements
    const bookmarks = getBookmarkedAnnouncements();
    setBookmarkedAnnouncements(bookmarks);
  }, []);

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

  return (
    <CenteredHero {...heroProps} />
  );
}
