import { initializeApp } from "firebase/app";
import { createContext, useContext, useState, useEffect } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import {getFirestore, collection, addDoc} from "firebase/firestore";

const FirebaseContext = createContext(null);
const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_APP_ID,
    measurementId: import.meta.env.VITE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
export const useFirebase = () => useContext(FirebaseContext);
const firebaseAuth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const firestore = getFirestore(app);
googleProvider.setCustomParameters({
    prompt: 'select_account'
  });
export const FirebaseProvider = (props) => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        onAuthStateChanged(firebaseAuth, user => {
            if (user) setUser(user);
            else setUser(null);
        })
    }, [user]);
    const isLoggedIn = user ? true : false;
    const createNewUserWithEmailAndPassword = (email, password) => createUserWithEmailAndPassword(firebaseAuth, email, password);
    const signInUserWithEmailAndPassword = (email, password) => signInWithEmailAndPassword(firebaseAuth, email, password);
    const signUpWithGoogle = () => signInWithPopup(firebaseAuth, googleProvider);
    const doSignOut = () => signOut(firebaseAuth);
    return (
        <FirebaseContext.Provider value={{ signUpWithGoogle, createNewUserWithEmailAndPassword, signInUserWithEmailAndPassword, isLoggedIn, doSignOut }}>
            {props.children}
        </FirebaseContext.Provider>
    )
};