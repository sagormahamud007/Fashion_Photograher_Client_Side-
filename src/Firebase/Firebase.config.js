// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA8ok97G4JRKzs1-XQf-CPQ4j2cTEh6JaI",
    authDomain: "wedding-photographer-1bcb6.firebaseapp.com",
    projectId: "wedding-photographer-1bcb6",
    storageBucket: "wedding-photographer-1bcb6.appspot.com",
    messagingSenderId: "728335071482",
    appId: "1:728335071482:web:b56d6142b64939d2c97143"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;