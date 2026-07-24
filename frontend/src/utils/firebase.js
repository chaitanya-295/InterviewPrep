import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewprep-79b63.firebaseapp.com",
  projectId: "interviewprep-79b63",
  storageBucket: "interviewprep-79b63.firebasestorage.app",
  messagingSenderId: "999450582072",
  appId: "1:999450582072:web:50e3882fa7143123635acd",
  measurementId: "G-257CPJ2CYR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

const provider = new GoogleAuthProvider

export {auth, provider}