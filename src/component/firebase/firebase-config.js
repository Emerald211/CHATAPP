// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBSnlk3TsiQ6CADJw8RI5msKo0RW8B1MtI",
  authDomain: "anonym-chat-f8754.firebaseapp.com",
  projectId: "anonym-chat-f8754",
  storageBucket: "anonym-chat-f8754.appspot.com",
  messagingSenderId: "473110219707",
  appId: "1:473110219707:web:d74c467f0abc9b994a929e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)

export default app;