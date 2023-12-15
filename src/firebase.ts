import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from 'firebase/auth';

import { getFirestore, collection, addDoc } from 'firebase/firestore';

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
