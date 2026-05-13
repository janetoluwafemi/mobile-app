import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAXJ-uLpjUo9kdn-_qHY2c9nrxaN9UIBdg",
    authDomain: "mobile-dc4a4.firebaseapp.com",
    projectId: "mobile-dc4a4",
    storageBucket: "mobile-dc4a4.firebasestorage.app",
    messagingSenderId: "698893194630",
    appId: "1:698893194630:web:f04cec93c9329110a94807",
    measurementId: "G-BBTN0G9BHV"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);