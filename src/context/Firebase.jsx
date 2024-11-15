import { initializeApp } from "firebase/app";
import { createContext, useContext, useState, useEffect } from "react";
import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged} from "firebase/auth";

const FirebaseContext = createContext(null);
const firebaseConfig = {
    apiKey: "AIzaSyAcqh-rwXDpHnfSTDov-R__95ooiYhep7c",
    authDomain: "aimockint.firebaseapp.com",
    projectId: "aimockint",
    storageBucket: "aimockint.firebasestorage.app",
    messagingSenderId: "509995101774",
    appId: "1:509995101774:web:3f78fc065074f106739d1f",
    measurementId: "G-FJESZW7Q3G"
};

const app = initializeApp(firebaseConfig);
export const useFirebase = () => useContext(FirebaseContext);
const firebaseAuth = getAuth(app)
const googleProvider = new GoogleAuthProvider();
export const FirebaseProvider = (props) => {
    useEffect(()=>{
        onAuthStateChanged(firebaseAuth, user=> {
            console.log("User",user);
        })
    },[]);
    const createNewUserWithEmailAndPassword = (email,password) => createUserWithEmailAndPassword(firebaseAuth,email,password);
    const signInUserWithEmailAndPassword = (email,password) => signInWithEmailAndPassword(firebaseAuth,email,password);
    const signUpWithGoogle = () => signInWithPopup(firebaseAuth,googleProvider);    
    return (
        <FirebaseContext.Provider value={{signUpWithGoogle,createNewUserWithEmailAndPassword,signInUserWithEmailAndPassword}}>
            {props.children}
        </FirebaseContext.Provider>
    )
};