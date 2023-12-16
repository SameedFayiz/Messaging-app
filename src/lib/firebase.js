// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyB1LWbOTSYYwgfFFLtSp32XpGI0rfojra8",
  authDomain: "connect-f0e0a.firebaseapp.com",
  projectId: "connect-f0e0a",
  storageBucket: "connect-f0e0a.appspot.com",
  messagingSenderId: "687977340365",
  appId: "1:687977340365:web:fb982e14b1a7cbdaaa3884",
  measurementId: "G-63EZJ4TQEV",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export const userRegister = async (firstName, lastName, email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    // Signed in
    const user = userCredential.user;
    let uid = user.uid;
    await setDoc(doc(db, "users", uid), {
      firstName,
      lastName,
      email,
    });
    return uid;
  } catch (error) {
    console.log("sign up error-->", error.message);
    return error;
  }
};

export const userLogin = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    // Signed in
    const user = userCredential.user;
    const uid = user.uid;
    console.log(user, uid);
    return uid;
  } catch (error) {
    console.log("sign in error-->", error.message);
    return error;
  }
};

export const userSignOut = async () => {
  try {
    await signOut(auth);
    console.log("logged out");
  } catch (error) {
    console.log("logout error-->", error.message);
    return error;
  }
};
