import{getAuth, GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "onecart-79e29.firebaseapp.com",
  projectId: "onecart-79e29",
  storageBucket: "onecart-79e29.firebasestorage.app",
  messagingSenderId: "128066413676",
  appId: "1:128066413676:web:5843035b114480347e6449"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export {auth, provider}