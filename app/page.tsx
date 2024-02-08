"use client"

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { RegisterLink } from '@kinde-oss/kinde-auth-nextjs/components';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { redirect } from 'next/navigation';

const base64ToUint8Array = (base64: string): Uint8Array => {
  const padding = '='.repeat((4 - (base64.length % 4)) % 4);
  const b64 = (base64 + padding).replace(/-/g, '+').replace(/_/g, '/');

  const rawData = window.atob(b64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
};

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

  const [isSubscribed, setIsSubscribed] = useState(false);
  const [subscription, setSubscription] = useState<any>(null);
  const [registration, setRegistration] = useState<any>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      // run only in browser
      navigator.serviceWorker.ready.then(reg => {
        if (reg && 'pushManager' in reg) {
          reg.pushManager.getSubscription().then(sub => {
            if (sub && !(sub.expirationTime && Date.now() > sub.expirationTime - 5 * 60 * 1000)) {
              setSubscription(sub);
              setIsSubscribed(true);
            }
          });
          setRegistration(reg);
        }
      });
    }
  }, []);

  const subscribeButtonOnClick = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    if (!registration) return;
    const sub = await registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: base64ToUint8Array('BOy88gPe6gMtsBKqHWpaELx5GJZxvomTKkjjJMdO_tkpAPb5EF_DsxW5MZiEOCT-Dz0pXu92eboKTbFvx-Cx-LI')
    });
    console.log(registration);
    console.log('test');
    setSubscription(sub);
    setIsSubscribed(true);
    console.log('web push subscribed!');
    console.log(sub);
  };

  const unsubscribeButtonOnClick = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    if (subscription) {
      await subscription.unsubscribe();
      setSubscription(null);
      setIsSubscribed(false);
      console.log('web push unsubscribed!');
    }
  };

  const sendNotificationButtonOnClick = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    if (!subscription) {
      console.error('web push not subscribed');
      return;
    }

    await fetch('/api/notification', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        subscription
      })
    });
  };

  return (
    <section className="flex items-center justify-center bg-background h-[90vh]">
      <div className="relative items-center w-full px-5 py-12 mx-auto lg:px-16 max-w-7xl md:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <div>
          <div className='mb-5'><center>
        <button onClick={subscribeButtonOnClick} disabled={isSubscribed}>
          Subscribe
        </button><br />
        <button onClick={unsubscribeButtonOnClick} disabled={!isSubscribed}>
          Unsubscribe
        </button><br />
        <button onClick={sendNotificationButtonOnClick} disabled={!isSubscribed}>
          Send Notification
        </button>
        </center></div>
            {/* <span className="w-auto px-6 py-3 rounded-full bg-secondary">
              <span className="text-sm font-medium text-primary">
                Sort your notes easily
              </span>
            </span> */}

            <h1 className="mt-8 text-3xl font-extrabold tracking-tight lg:text-6xl">
              Nordkurve12
            </h1>
            <p className="max-w-xl mx-auto mt-8 text-base lg:text-xl text-secondary-foreground">
              Nordkurve12 e.V. Leverkusen Unabhängiger Dachverband der Bayer 04 Fans mit über 3400 Mitgliedern
            </p>
          </div>

          <div className="flex justify-center max-w-sm mx-auto mt-10">
            <RegisterLink>
              <Button size="lg" className="w-full">
                Connect your account
              </Button>
            </RegisterLink>
          </div>
        </div>
      </div>
    </section>
  );
}
