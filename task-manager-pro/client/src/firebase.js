import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Firebase project configuration using environment variables with default fallbacks
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY || "AIzaSyCVXqbY0FnW24rUM5U-gMEKAexp44DK9pw",
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN || "task-manager-final-70f53.firebaseapp.com",
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID || "task-manager-final-70f53",
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET || "task-manager-final-70f53.firebasestorage.app",
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID || "190491911571",
  appId: process.env.REACT_APP_FIREBASE_APP_ID || "1:190491911571:web:c6571ea2d81aed23b37466",
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID || "G-CZPGRZNTLL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and Authentication services
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };