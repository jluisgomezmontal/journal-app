import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const  firebaseConfig = {
    apiKey: "AIzaSyCdY1vfd1StK-KllgCEBU64-8mhEPiLkyE",
    authDomain: "curso-react-a9be2.firebaseapp.com",
    projectId: "curso-react-a9be2",
    storageBucket: "curso-react-a9be2.appspot.com",
    messagingSenderId: "1088636843305",
    appId: "1:1088636843305:web:dfc9655c38999f09bbf338"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export {
    db,
    googleAuthProvider,
    firebase
}