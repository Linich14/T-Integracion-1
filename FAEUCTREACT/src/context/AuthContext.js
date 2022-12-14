import { useContext, createContext, useEffect, useState } from 'react';
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';


import { auth} from '../components/firebase';


export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const [currentUser, setCurrentUser] = useState({})

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    //cambiar entre popup o redirect segun sea mas bonito
    signInWithPopup(auth, provider)
  };

  const signIn = (email, password) =>  {
    return signInWithEmailAndPassword(auth, email, password)
   }

  const logOut = () => {
      signOut(auth)
  }


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ signIn, googleSignIn, logOut, user, currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};