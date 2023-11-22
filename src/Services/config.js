// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXzVNj56PLk-UwmMKFIno5kObtzbse464",
  authDomain: "proyecto-final-1bcb7.firebaseapp.com",
  projectId: "proyecto-final-1bcb7",
  storageBucket: "proyecto-final-1bcb7.appspot.com",
  messagingSenderId: "333426334996",
  appId: "1:333426334996:web:2dc37ddfb1926df4c47601"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);