import { createContext, ReactNode, useContext, useState } from 'react';

import supabaseClient from 'utils/supabaseClient.ts';

import { Session, SessionContextType } from './types';

const SessionContext = createContext<SessionContextType | undefined>(undefined);

export const SessionProvider = ({ children }: { children: ReactNode }) => {
  const [session, setSessionState] = useState<Session>({ isLoading: true });

  const setSession = (newSession: Session) => {
    setSessionState(newSession);
  };

  const clearSession = () => {
    setSessionState(null);
  };

  const getSession = async () => {
    console.log('getSession');
    setSessionState((prev) => ({ ...prev, isLoading: true }));
    const { data } = await supabaseClient.auth.getSession();
    const { data: dataUser } = await supabaseClient
      .from('users')
      .select('full_name')
      .eq('auth_id', data.session?.user.id)
      .single();

    if (data.session) {
      setSessionState({
        token: data.session.access_token,
        name: dataUser?.full_name,
        userId: data.session?.user.id,
        isLoading: false
      });
    } else {
      setSessionState((prev) => ({ ...prev, isLoading: false }));
    }
  };

  return (
    <SessionContext.Provider value={{ session, setSession, getSession, clearSession }}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => {
  const context = useContext(SessionContext);
  if (!context) {
    throw new Error('useSession must be used within a SessionProvider');
  }
  return context;
};
