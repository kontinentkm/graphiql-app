import { createContext } from 'react';
import firebase from 'firebase/compat/app';

interface AuthContextProps {
  user: firebase.User | null;
  signOutUser: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextProps | undefined>(
  undefined
);
