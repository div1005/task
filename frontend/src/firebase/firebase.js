// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5H4gZHjvPwuR5aLvHGBpGouCMCeOWuRI",
  authDomain: "task-manager-b8558.firebaseapp.com",
  projectId: "task-manager-b8558",
  storageBucket: "task-manager-b8558.firebasestorage.app",
  messagingSenderId: "376902476485",
  appId: "1:376902476485:web:9b7d0552ca0540bb9946ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

