import { User } from '@firebase/auth';
import { auth } from '@src/firebase';
import { signOut } from 'firebase/auth';
import { ReactNode, useState, useEffect } from 'react';
import { AuthContext } from './AuthContext';

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextValue {
  user: User | null;
  signOutUser: () => Promise<void>;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser: User | null) => {
      setUser(firebaseUser);
    });

    return unsubscribe;
  }, []);

  const signOutUser = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error(error);
    }
  };

  const contextValue: AuthContextValue = {
    user,
    signOutUser,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
