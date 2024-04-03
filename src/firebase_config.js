// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtbSIEXig5VAdZXnTdkveiC0fBbYmDB4Q",
  authDomain: "user-email-password-auth-6dde2.firebaseapp.com",
  projectId: "user-email-password-auth-6dde2",
  storageBucket: "user-email-password-auth-6dde2.appspot.com",
  messagingSenderId: "732525475601",
  appId: "1:732525475601:web:d177b8c60cf9853787beb0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app)
export default auth