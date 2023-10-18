// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDR6_zWkZBF1An9rOB3VrVMdZCLosYg-o0",
  authDomain: "gadget-geek.firebaseapp.com",
  projectId: "gadget-geek",
  storageBucket: "gadget-geek.appspot.com",
  messagingSenderId: "864578078393",
  appId: "1:864578078393:web:46ab7c9ff87c4736fa3d68"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);