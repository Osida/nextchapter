import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgM0uZrXRGJjPpeitSVuFg_0vYVWcd26E",
  authDomain: "nextchapter-8219b.firebaseapp.com",
  projectId: "nextchapter-8219b",
  storageBucket: "nextchapter-8219b.appspot.com",
  messagingSenderId: "515081201513",
  appId: "1:515081201513:web:3bc811b290111b8d18bff8",
  measurementId: "G-KW8XME2XD6",
};

const firebaseConfigProd = {
  apiKey: "AIzaSyCB9-NoevmHTNIHxwzM-rZFvn1dVH4OVSA",
  authDomain: "nextchapter-production.firebaseapp.com",
  projectId: "nextchapter-production",
  storageBucket: "nextchapter-production.appspot.com",
  messagingSenderId: "573213888142",
  appId: "1:573213888142:web:72a83b37c77091ae16c3df",
  measurementId: "G-MW0N46KCCV",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfigProd);
// firebase.analytics();

// Access the firestore instance of the app (basically connects to the db)
export const db = firebaseApp.firestore();

// Responsible for setting up the authentication
export const auth = firebaseApp.auth();

export const storage = firebaseApp.storage();
