import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyAYTCvuCn8DKTKTmgOq2tz_2uD-32fteew",
    authDomain: "micomidafavorita-e8b0b.firebaseapp.com",
    projectId: "micomidafavorita-e8b0b",
    storageBucket: "micomidafavorita-e8b0b.firebasestorage.app",
    messagingSenderId: "53401481747",
    appId: "1:53401481747:web:c7c81f3671848d543e45e6",
    measurementId: "G-DTNFNZ5C9T"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);