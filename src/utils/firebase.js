// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHYOk4kD4LmVJEKK_pcdiS-AnJiPtg_RY",
  authDomain: "netflix-69e4f.firebaseapp.com",
  projectId: "netflix-69e4f",
  storageBucket: "netflix-69e4f.appspot.com",
  messagingSenderId: "563523858968",
  appId: "1:563523858968:web:edea05ec025ff64734c96d",
  measurementId: "G-WRN7QDNEHH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();