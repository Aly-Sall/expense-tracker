// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2kPb-b0C5r-lFpsHrcZwF7FeNXDAatas",
  authDomain: "expense-tracker-9e9aa.firebaseapp.com",
  projectId: "expense-tracker-9e9aa",
  storageBucket: "expense-tracker-9e9aa.appspot.com",
  messagingSenderId: "154776406761",
  appId: "1:154776406761:web:06c3f45387dff50797fe78",
  measurementId: "G-4PR1R9LGP1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
