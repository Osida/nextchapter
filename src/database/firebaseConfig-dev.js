import firebase from "firebase/app";
// imports authentication module for Firebase
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY_DEV,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN_DEV,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID_DEV,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET_DEV,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID_DEV,
  appId: process.env.REACT_APP_FIREBASE_API_ID_DEV,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID_DEV,
};

// Initialize Firebase
export const firebaseApp = firebase.initializeApp(firebaseConfig);
// firebase.analytics();

// Access the firestore instance of the app (basically connects to the db)
export const db = firebaseApp.firestore();

// Responsible for setting up the authentication
export const auth = firebaseApp.auth();
