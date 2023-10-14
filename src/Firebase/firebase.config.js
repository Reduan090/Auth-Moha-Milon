// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9HKh-dkMBI8X3l6B6ZByasKHMbIhtpNg",
  authDomain: "auth-moha-milon-8d7d5.firebaseapp.com",
  projectId: "auth-moha-milon-8d7d5",
  storageBucket: "auth-moha-milon-8d7d5.appspot.com",
  messagingSenderId: "503769682282",
  appId: "1:503769682282:web:004bb8884cf25ba0311513"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
