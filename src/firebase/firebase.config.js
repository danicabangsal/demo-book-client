// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwhJg_JWqzaNno7VKxmS_OTwtbvFXEcUM",
  authDomain: "mern-book-inventory-b5e01.firebaseapp.com",
  projectId: "mern-book-inventory-b5e01",
  storageBucket: "mern-book-inventory-b5e01.firebasestorage.app",
  messagingSenderId: "544480018886",
  appId: "1:544480018886:web:1d05a87cb01e748e3af2c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
