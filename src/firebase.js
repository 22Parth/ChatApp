import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB6kj3RpSdvoKwHPLyjmn0K7s9X63pKluM",
    authDomain: "chat-1a4b1.firebaseapp.com",
    projectId: "chat-1a4b1",
    storageBucket: "chat-1a4b1.appspot.com",
    messagingSenderId: "914843670339",
    appId: "1:914843670339:web:2d3ccdc54490b4190e01f6",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();