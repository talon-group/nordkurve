// contexts/UserContext.tsx

import { createContext, useContext, useEffect, useState } from 'react';
import { useUser, useSessionContext } from '@supabase/auth-helpers-react';
import { createClient } from '@/app/lib/supabase/client';

type UserContextType = {
  user: any;
  isAdmin: boolean;
  loading: boolean;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const { session } = useSessionContext();
  const [user, setUser] = useState<any>(null);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const supabase = createClient();

  useEffect(() => {
    const fetchUserProfile = async () => {
      setLoading(true);
      const userId = session?.user?.id;
      if (userId) {
        const { data, error } = await supabase
          .from('User')
          .select('*')
          .eq('id', userId)
          .single();
        
        if (data && !error) {
          setUser(data);
          setIsAdmin(
            data.id === 'kp_4ab27e30464f4448ac80d29c8fdf6d23' ||
            data.id === 'kp_ae2ee22859194894a8cf7f8fab90f676' ||
            userId === 'f3244e9b-8ea1-407d-9ea3-449e87ae1121'
          );
        } else {
          console.error('Error fetching user profile:', error);
        }
      }
      setLoading(false);
    };

    fetchUserProfile();
  }, [session, supabase]);

  return (
    <UserContext.Provider value={{ user, isAdmin, loading }}>
    {children}
  </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return context;
};