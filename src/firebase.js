// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, push, onValue } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfd_d6V2suCojGZX3SYWjByEBpJ32me2E",
  authDomain: "project-0-5a0c3.firebaseapp.com",
  databaseURL: "https://project-0-5a0c3-default-rtdb.firebaseio.com",
  projectId: "project-0-5a0c3",
  storageBucket: "project-0-5a0c3.firebasestorage.app",
  messagingSenderId: "1051491762200",
  appId: "1:1051491762200:web:e226ef6968b20b8b3c036d",
  measurementId: "G-YQS6XES4C4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);

export { database, ref, push, onValue };