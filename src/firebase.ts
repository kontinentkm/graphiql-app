import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from 'firebase/auth';

import { getFirestore, collection, addDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: `${import.meta.env.VITE_REACT_APP_FIREBASE_APIKEY}`,
  authDomain: `${import.meta.env.VITE_REACT_APP_FIREBASE_AUTHDOMAIN}`,
  projectId: `${import.meta.env.VITE_REACT_APP_FIREBASE_PROJECTID}`,
  storageBucket: `${import.meta.env.VITE_REACT_APP_FIREBASE_STORAGEBUCKET}`,
  messagingSenderId: `${
    import.meta.env.VITE_REACT_APP_FIREBASE_MESSAGINGSENDERID
  }`,
  appId: `${import.meta.env.VITE_REACT_APP_FIREBASE_APPID}`,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const registerWithEmailAndPassword = async (
  name: string,
  email: string,
  password: string
) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, 'users'), {
      uid: user.uid,
      name,
      authProvider: 'local',
      email,
    });
  } catch (err) {
    console.error(err);
  }
};

const sendPasswordReset = async (email: string) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert('Password reset link sent!');
  } catch (err) {
    console.error(err);
  }
};

const logout = () => {
  signOut(auth);
};

export { auth, db, registerWithEmailAndPassword, sendPasswordReset, logout };
