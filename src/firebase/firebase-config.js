import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAQwgM_CXLk9GSgPje7Mxv2ewKpboialpg",
    authDomain: "iltpwebsite.firebaseapp.com",
    projectId: "iltpwebsite",
    storageBucket: "iltpwebsite.appspot.com",
    messagingSenderId: "1039258363296",
    appId: "1:1039258363296:web:f237621cc287de4712b0c5",
    measurementId: "G-PQSL1Y881Q",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);