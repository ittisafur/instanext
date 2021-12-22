import User from '../models/User.interface';
import {auth} from '@/service/firebase';
import {
  onAuthStateChanged,
  GoogleAuthProvider,
  signOut,
  signInWithPopup,
} from 'firebase/auth';
import { createContext, useEffect, useState } from 'react'

interface AuthContextType {
  user: User | null;
  authenticated: boolean;
  loading: boolean;
  logout: () => Promise<void>;
  loginWithGoogle: () => void;
}
export const AuthContext = createContext<AuthContextType>(null)

const AuthContextProvider = ({children}) => {
  const [user, setUser] = useState<User>(null);
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  const logout = async () => {
    await signOut(auth);
    setUser(null);
    setAuthenticated(false);
  };

  const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then(async (res) => {
        setUser({
          name: res.user.displayName,
          username: res.user.displayName,
          email: res.user.email,
          photoURL: res.user.photoURL,
        });
      })
      .catch(() => {
        throw new Error('Chudir bhai, dhukte parbi na bari ja');
      });
  };

  return (
    <div>
      
    </div>
  )
}

export default AuthContextProvider
