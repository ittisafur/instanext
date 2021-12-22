import { useEffect, useState } from 'react';

const useAuth = () => {
  const [user, setUser] = useState<User>(null);
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthenticated(true);
        setUser({
          name: user.displayName,
          username: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
        });
        setLoading(false);
      } else {
        setUser(null);
        setAuthenticated(false);
        setLoading(false);
      }
    });
  }, []);

  const logOut = async () => {
    await signOut(auth);
    setUser(null);
    setAuthenticated(false);
  };

  return { loginWithGoogle, loading, logOut, user, authenticated };
};

export default useAuth;
