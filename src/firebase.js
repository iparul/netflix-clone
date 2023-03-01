import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDnPIvZ4Z0HJZFqkaT4T4YnfQOqQfoHV24",
  authDomain: "netflix-clone-38918.firebaseapp.com",
  projectId: "netflix-clone-38918",
  storageBucket: "netflix-clone-38918.appspot.com",
  messagingSenderId: "59776914260",
  appId: "1:59776914260:web:484e15f5e40b9a1030eec1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };

export default db;
