import React, { useContext, useEffect, useState } from "react";
import { auth, collections, db } from "../database";
import ROUTES from "../pages";
import { useHistory } from "react-router";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const history = useHistory();

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
        console.log("1 student doc added");
        return true;
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("signup error = ", error);
        alert(errorMessage);
      });
  }

  function signIn(email, password) {
    return auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log("Signed in");
        return true;
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // console.log("catch error = ", error);
        // console.log("catch errorMessage = ", errorMessage);
        alert(errorMessage);
        // <Notify message={errorMessage} show={true} type="error" />;
      });
  }

  function signOut() {
    return auth.signOut();
  }

  function resetPassword(email) {
    console.log("email >>> ", email);
    return auth
      .sendPasswordResetEmail(email)
      .then(() => {
        console.log("reset password email sent");
        return true;
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // console.log("catch error = ", error);
        // console.log("catch errorMessage = ", errorMessage);
        alert(errorMessage);
      });
  }

  function updateEmail(email) {
    return currentUser
      .updateEmail(email)
      .then((x) => {
        console.log("x = ", x);
        console.log("updated email= ", x);
        return true;
      })
      .catch((error) => {
        var errorCode = error?.code;
        var errorMessage = error.message;
        // console.log("catch error = ", error);
        // console.log("catch errorMessage = ", errorMessage);
        alert(errorMessage);
        return false;
      });
  }

  function updatePassword(password) {
    return currentUser
      .updatePassword(password)
      .then((x) => {
        console.log("x = ", x);
        console.log("updated password = ", x);
        return true;
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("catch error = ", error);
        console.log("catch errorMessage = ", errorMessage);
        alert(errorMessage);
        return false;
      });
  }

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
    updateEmail,
    updatePassword,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
