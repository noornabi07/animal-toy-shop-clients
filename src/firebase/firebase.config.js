// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTaSiQZ5vODSjoTddxGGb4hWRXTzjSe5Q",
  authDomain: "animal-toys-shop.firebaseapp.com",
  projectId: "animal-toys-shop",
  storageBucket: "animal-toys-shop.appspot.com",
  messagingSenderId: "56085511171",
  appId: "1:56085511171:web:4569134eac7db37a73e236"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app