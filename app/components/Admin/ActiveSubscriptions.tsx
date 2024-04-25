"use client";

import { useEffect, useState } from 'react';
import { createClient } from '@/app/lib/supabase/client';

type Subscription = {
  status: string;
};

type User = {
  id: string;
  name: string;
  email: string;
  Subscription: Subscription[];
};

type UserSubscription = {
  id: string;
  name: string;
  email: string;
  subscriptionStatus: string;
};

export default function UserSubscriptionList() {
  const supabase = createClient();
  const [userSubscriptions, setUserSubscriptions] = useState<UserSubscription[]>([]);

  useEffect(() => {
    const fetchUserSubscriptions = async () => {
      const { data, error } = await supabase
        .from('User')
        .select(`
          id,
          name,
          email,
          Subscription(status)
        `)
        .order('email', { ascending: true });

      if (error) {
        console.error('Error fetching user subscriptions:', error);
      } else {
        const formattedData = data.map((user) => ({
          id: user.id,
          name: user.name,
          email: user.email,
          subscriptionStatus: user.Subscription[0]?.status || 'No subscription',
        }));
        setUserSubscriptions(formattedData);
      }
    };

    fetchUserSubscriptions();
  }, [supabase]);

  return (
    <ul role="list" className="divide-y divide-gray-100">
      {userSubscriptions.map((user) => (
        <li key={user.id} className="flex justify-between gap-x-6 py-5">
          <div className="flex min-w-0 gap-x-4">
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-gray-900">{user.name}</p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-500">{user.email}</p>
            </div>
          </div>
          <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
            <p className="text-sm leading-6 text-gray-900">{user.subscriptionStatus}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};