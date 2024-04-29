"use client";

import { useEffect, useState } from 'react';
import { createClient } from '@/app/lib/supabase/client';

type Person = {
  id: string;
  name: string;
  email: string;
  role: string;
  imageUrl: string;
  lastSeen: string | null;
  lastSeenDateTime: string | null;
};

export default function UserList() {
  const [people, setPeople] = useState<Person[]>([]);
  const supabase = createClient();

  useEffect(() => {
    const fetchUsers = async () => {
      const { data, error } = await supabase.from('User').select('*');

      if (error) {
        console.error('Error fetching users:', error);
      } else {
        const users = data.map((user) => ({
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role || 'User', // Assuming a default role if not provided
          imageUrl: user.imageUrl || 'https://via.placeholder.com/256', // Assuming a placeholder image if not provided
          lastSeen: user.lastSeen || 'Online', // Assuming default status
          lastSeenDateTime: user.lastSeenDateTime || new Date().toISOString(), // Assuming current time if not provided
        }));
        setPeople(users);
      }
    };

    fetchUsers();
  }, []);

  return (
    <ul role="list" className="divide-y divide-gray-100">
      {people.map((person) => (
        <li key={person.email} className="flex justify-between gap-x-6 py-5">
          <div className="flex min-w-0 gap-x-4">
            <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={person.imageUrl} alt="" />
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-gray-900">{person.name}</p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-500">{person.email}</p>
            </div>
          </div>
        <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
            <p className="text-sm leading-6 text-gray-900">{person.role}</p>
            {person.lastSeen ? (
                <p className="mt-1 text-xs leading-5 text-gray-500">
                    Last seen <time dateTime={person.lastSeenDateTime || ''}>{person.lastSeen}</time>
                </p>
            ) : (
                <div className="mt-1 flex items-center gap-x-1.5">
                    <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                        <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    </div>
                    <p className="text-xs leading-5 text-gray-500">Online</p>
                </div>
            )}
        </div>
        </li>
      ))}
    </ul>
  );
}
