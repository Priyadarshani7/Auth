// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADs_wxHOEcVUhwm2k5Ra8jVgeqmTqD9D4",
  authDomain: "login-auth-66bab.firebaseapp.com",
  projectId: "login-auth-66bab",
  storageBucket: "login-auth-66bab.appspot.com",
  messagingSenderId: "285051441441",
  appId: "1:285051441441:web:01f8f04a06c9f09172ee60",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export default app;
