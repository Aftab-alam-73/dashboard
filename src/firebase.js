import { getAuth} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey:process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "tutorial-3332d.firebaseapp.com",
  projectId: "tutorial-3332d",
  storageBucket: "tutorial-3332d.appspot.com",
  messagingSenderId: "444252081193",
  appId: "1:444252081193:web:f16f788be6f69d2ab7a038"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth=getAuth()
