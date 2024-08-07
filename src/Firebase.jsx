// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:import.meta.env.VITE_REACT_APP_FIREBASE_API_KEY,
  authDomain:import.meta.env.VITE_REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId:import.meta.env.VITE_REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId:import.meta.env.VITE_REACT_APP_FIREBASE_APP_ID,
  measurementId:import.meta.env.VITE_REACT_APP_FIREBASE_measurementId
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app); 
const db = getFirestore(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export { db };
/*  VITE_REACT_APP_FIREBASE_API_KEY="AIzaSyCpqTNP0epJD9JmCX4tmHObuPTeLMoness"
  VITE_REACT_APP_FIREBASE_AUTH_DOMAIN="parlakrelays.firebaseapp.com"
  VITE_REACT_APP_FIREBASE_PROJECT_ID="parlakrelays"
  VITE_REACT_APP_FIREBASE_STORAGE_BUCKET="parlakrelays.appspot.com"
  VITE_REACT_APP_FIREBASE_MESSAGING_SENDER_ID="724731035568"
  VITE_REACT_APP_FIREBASE_APP_ID= "1:724731035568:web:337cfba6a49a8277c12075"
  VITE_REACT_APP_FIREBASE_measurementId="G-Y18BQR83HC"*/