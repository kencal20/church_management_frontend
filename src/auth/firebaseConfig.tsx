import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC8ScvAQwyMB29_Q1TeZH29TrIqDTedDtw",
  authDomain: "messagingapp-8733e.firebaseapp.com",
  projectId: "messagingapp-8733e",
  storageBucket: "messagingapp-8733e.appspot.com",
  messagingSenderId: "69005878017",
  appId: "1:69005878017:web:009b5ed2099be200beb100"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(app)