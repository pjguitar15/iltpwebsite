// import firebase from "firebase/app"
// import "firebase/auth"
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyAQwgM_CXLk9GSgPje7Mxv2ewKpboialpg",
    authDomain: "iltpwebsite.firebaseapp.com",
    projectId: "iltpwebsite",
    storageBucket: "iltpwebsite.appspot.com",
    messagingSenderId: "1039258363296",
    appId: "1:1039258363296:web:f237621cc287de4712b0c5",
    measurementId: "G-PQSL1Y881Q",
})

export const auth = app.auth()
export default app