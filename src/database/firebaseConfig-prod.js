import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY_PROD,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN_PROD,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID_PROD,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET_PROD,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID_PROD,
  appId: process.env.REACT_APP_FIREBASE_API_ID_PROD,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID_PROD,
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
// firebase.analytics();

// Access the firestore instance of the app (basically connects to the db)
export const db = firebaseApp.firestore();

// Responsible for setting up the authentication
export const auth = firebaseApp.auth();

export const storage = firebaseApp.storage();
