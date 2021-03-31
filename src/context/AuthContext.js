import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../database/firebase-dev";

const AuthContext = createContext();

// Access to AuthContext through useAuth() hook
export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  function signUp(email, password) {
    console.log(email, password);
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function signIn(email, password) {
    console.log(email, password);
    return auth.signInWithEmailAndPassword(email, password);
  }

  function signOut() {
    return auth.signOut();
  }

  useEffect(() => {
    // auth.onAuthStateChanged() is a Firebase method - sets the user
    // unsubscribe = return method will unsubscribe the onAuthStateChanged() event
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setLoading(false);
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signUp,
    signIn,
    signOut,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
