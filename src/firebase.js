// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBa6UDTTQi7UaTymykbElbgpGhWLwiTK3U",
  authDomain: "poinsales-c0990.firebaseapp.com",
  projectId: "poinsales-c0990",
  storageBucket: "poinsales-c0990.appspot.com",
  messagingSenderId: "166820627105",
  appId: "1:166820627105:web:6c2306130db02c5e22e6e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);