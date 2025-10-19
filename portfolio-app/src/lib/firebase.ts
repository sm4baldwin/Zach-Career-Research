// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAO3685SYuB4R6FI3-UBl7i5BsZDV7zTYU",
  authDomain: "iamzacharyavila.firebaseapp.com",
  projectId: "iamzacharyavila",
  storageBucket: "iamzacharyavila.firebasestorage.app",
  messagingSenderId: "963954676187",
  appId: "1:963954676187:web:52f9f9d685696c25be17fe",
  measurementId: "G-26P6E25YKZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics only on client side
let analytics: ReturnType<typeof getAnalytics> | null = null;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

export { app, analytics };