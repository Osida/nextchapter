import React, { createContext, useContext, useEffect, useState } from "react";
import { auth, collections, db } from "../database";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  function signUp(newUser) {
    return auth
      .createUserWithEmailAndPassword(newUser?.email, newUser?.password)
      .then((cred) => {
        return db
          .collection(collections.students)
          .doc(cred?.user?.uid)
          .set({
            ...newUser,
            uid: cred?.user?.uid,
          });
      })
      .then(() => {
        console.log("1 student added");
      })
      .catch((error) => {
        console.log("Error = ", error);
      });
  }

  function signIn(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function signOut() {
    return auth.signOut();
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email);
  }

  // function updateEmail(email) {
  //   return currentUser.updateEmail(email);
  // }

  // function updatePassword(password) {
  //   return currentUser.updatePassword(password);
  // }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    // currentUser,
    signIn,
    signUp,
    signOut,
    resetPassword,
    // updateEmail,
    // updatePassword
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
