// Import Firebase SDK with consistent versioning
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { getFirestore, writeBatch, doc, setDoc, deleteDoc, getDoc, updateDoc, collection, query, where, getDocs, onSnapshot, collectionGroup } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBJBy-1ToR0aLnbngDOL8kKa5onMtQoNcw",
    authDomain: "smartattend-f36c4.firebaseapp.com",
    projectId: "smartattend-f36c4",
    storageBucket: "smartattend-f36c4.appspot.com",
    messagingSenderId: "478728054218",
    appId: "1:478728054218:web:2b69ded405972ea3dadb33"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app); // Initialize Storage with app context





// Export the Firebase instances and Firestore utility functions
export { 
    auth, 
    db, 
    storage,
    getFirestore, 
    writeBatch,
    doc, 
    setDoc, 
    deleteDoc,
    getDoc, 
    updateDoc, 
    ref, 
    uploadBytes, 
    getDownloadURL, 
    deleteObject, 
    createUserWithEmailAndPassword,
    collection, 
    query, 
    where, 
    getDocs,
    onSnapshot, 
    collectionGroup,
};

// Function to handle user login
export const handleLogin = async (email, password) => {
    try {
        const auth = getAuth();
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return userCredential.user;
    } catch (error) {
        throw new Error(error.message);
    }
};
// Function to send password reset email
export const sendPasswordReset = (email) => {
    return sendPasswordResetEmail(auth, email);
};