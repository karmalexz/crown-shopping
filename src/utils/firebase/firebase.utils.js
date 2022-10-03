import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBjx6RE0_AHOl2flW7nyCVi-uQ28pxIzEw",
  authDomain: "crwn-clothing-db-edd7c.firebaseapp.com",
  projectId: "crwn-clothing-db-edd7c",
  storageBucket: "crwn-clothing-db-edd7c.appspot.com",
  messagingSenderId: "374615616939",
  appId: "1:374615616939:web:eeed99eb07a83b225036ee",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
