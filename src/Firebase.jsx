// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword,createUserWithEmailAndPassword  } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpqTNP0epJD9JmCX4tmHObuPTeLMoness",
  authDomain: "parlakrelays.firebaseapp.com",
  projectId: "parlakrelays",
  storageBucket: "parlakrelays.appspot.com",
  messagingSenderId: "724731035568",
  appId: "1:724731035568:web:337cfba6a49a8277c12075",
  measurementId: "G-Y18BQR83HC"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);