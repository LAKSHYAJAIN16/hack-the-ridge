// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlEUUytTB_mkE72s9ros8Awbh59lCRXAo",
  authDomain: "inkless-6fde5.firebaseapp.com",
  projectId: "inkless-6fde5",
  storageBucket: "inkless-6fde5.appspot.com",
  messagingSenderId: "842685708354",
  appId: "1:842685708354:web:27f1befb26e28e4ad415db",
  measurementId: "G-5SXNDB54G8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);