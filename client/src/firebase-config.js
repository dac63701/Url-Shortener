// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAPJhyD0p9GkoqlzJl1tXU5Uw75NpzYOlM",
    authDomain: "url-shortener-ecd4f.firebaseapp.com",
    projectId: "url-shortener-ecd4f",
    storageBucket: "url-shortener-ecd4f.appspot.com",
    messagingSenderId: "1014861264537",
    appId: "1:1014861264537:web:e12d0eecaf1184e8822a08"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();