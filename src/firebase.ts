import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
} from 'firebase/auth';

import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { LocalizedError } from './types/errorsClasses';
import { toastMessages } from './constants/localizationStrings';

const firebaseConfig = {
  apiKey: `AIzaSyDdmV4QVXAhN-mcJxhx6w-qxR-lN6AGwi0`,
  authDomain: `graphiql-430ca.firebaseapp.com`,
  projectId: `graphiql-430ca`,
  storageBucket: `graphiql-430ca.appspot.com`,
  messagingSenderId: `471343272898`,
  appId: `1:471343272898:web:a16262ec83d04ca5737c5b`,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const registerWithEmailAndPassword = async (
  name: string,
  email: string,
  password: string
): Promise<void> => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, 'users'), {
      uid: user.uid,
      name,
      authProvider: 'local',
      email,
    });
  } catch {
    throw new LocalizedError({
      en: toastMessages.en.registration_error_msg,
      ru: toastMessages.ru.registration_error_msg,
    });
  }
};

const logout = async (): Promise<void> => {
  try {
    await signOut(auth);
  } catch {
    throw new LocalizedError({
      en: toastMessages.en.logout_error_msg,
      ru: toastMessages.ru.logout_error_msg,
    });
  }
};

const login = async (
  email: string,
  password: string
): Promise<{ user: { uid: string } }> => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    return { user: { uid: 'some-uid' } };
  } catch (error) {
    throw new LocalizedError({
      en: toastMessages.en.login_error_msg,
      ru: toastMessages.ru.login_error_msg,
    });
  }
};

export { auth, db, registerWithEmailAndPassword, logout, login };
