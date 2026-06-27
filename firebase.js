import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD6EyXpvUvUn_COKky_r7aMJmH4cpTZkHM",
  authDomain: "syncspace-hackathon.firebaseapp.com",
  projectId: "syncspace-hackathon",
  storageBucket: "syncspace-hackathon.firebasestorage.app",
  messagingSenderId: "206514450428",
  appId: "1:206514450428:web:a91516bc0f0b1eed348c79",
  measurementId: "G-W0614CL370"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export const googleProvider = new GoogleAuthProvider();
export const githubProvider = new GithubAuthProvider();
