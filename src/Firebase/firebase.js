// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDojXQHUtfaDPj9_wH9bFFZE1Z8Mip71Ik",
  authDomain: "dog-tips-2023.firebaseapp.com",
  projectId: "dog-tips-2023",
  storageBucket: "dog-tips-2023.appspot.com",
  messagingSenderId: "439680268677",
  appId: "1:439680268677:web:36e313106b288c22d5ecec",
  measurementId: "G-6XKRKS7PRF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
