import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  serverTimestamp,
  setDoc,
  where,
} from 'firebase/firestore';
import { db } from '@/service/firebase';
import User from '@/models/User.interface';

export const firebaseUserToUser = (firebaseUser): User => {
  return {
    uid: firebaseUser.uid,
    username: firebaseUser.displayName.toLowerCase().split(' ').join('_'),
    displayName: firebaseUser.displayName,
    email: firebaseUser.email,
    avatar: firebaseUser.photoURL,
    following: [],
    followers: [],
  };
};

export const getUserByUid = async (uid: string): Promise<User> => {
  const userDocSnap = await getDoc(doc(db, `users/${uid}`));
  if (!userDocSnap.exists()) throw new Error('User does not exist');
  return userDocSnap.data() as User;
};

export const getUserByUsername = async (uid: string) => {
  const userCollectionRef = collection(db, 'users');
  const q = query(userCollectionRef, where('username', '==', uid));
  const userDocsSnap = await getDocs(q);
  if (userDocsSnap.empty) throw new Error('User does not exist');

  return userDocsSnap.docs[0].data() as User;
};

export const storeUser = async (user: User) => {
  const userCollectionRef = collection(db, 'users');
  const userDocRef = doc(userCollectionRef, user.uid);
  const userDocSnap = await getDoc(userDocRef);

  if (!userDocSnap.exists()) {
    await setDoc(userDocRef, { ...user, joined: serverTimestamp() });
  }
};
