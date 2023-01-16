// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBx_oiktnI8G0145bRpVy6jTrFAsAEm5NU",
    authDomain: "promise-hospital.firebaseapp.com",
    projectId: "promise-hospital",
    storageBucket: "promise-hospital.appspot.com",
    messagingSenderId: "113926730675",
    appId: "1:113926730675:web:2e9e5807cfbfe57b9fd1c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;