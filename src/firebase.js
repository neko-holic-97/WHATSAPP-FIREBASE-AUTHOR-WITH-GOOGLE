// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDaTGnHiMZqU-01t1uGq6mJ___-qepEsUk",
  authDomain: "whatsapp-clone-c0108.firebaseapp.com",
  projectId: "whatsapp-clone-c0108",
  storageBucket: "whatsapp-clone-c0108.appspot.com",
  messagingSenderId: "1074335680052",
  appId: "1:1074335680052:web:f15f405fb0fbc8cd946c61",
  measurementId: "G-H0Q8NB8B7R",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
