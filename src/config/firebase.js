import { initializeApp } from "firebase/app";
import { OAuthProvider, getAuth } from "firebase/auth";
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  setDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCyGN5LO-J23PUEV7yyvjOOwjAyahcimHM",
  authDomain: "next-student-feedback.firebaseapp.com",
  projectId: "next-student-feedback",
  storageBucket: "next-student-feedback.appspot.com",
  messagingSenderId: "909976799198",
  appId: "1:909976799198:web:88472cf1fd17898bd5ff4f",
};

export const app = initializeApp(firebaseConfig),
  auth = getAuth(),
  microsoftProvider = new OAuthProvider("microsoft.com");

export const db = getFirestore(app);
const usersRef = collection(db, "users");

export const getUserDocument = async (userUid) => {
  const userRef = doc(usersRef, userUid);

  const userSnapshot = await getDoc(userRef);

  return userSnapshot;
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = doc(usersRef, userAuth.uid);

  const userSnapshot = await getUserDocument(userAuth.uid);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(doc(usersRef, userAuth.uid), {
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {}
  }

  return userRef;
};

export const getCurrentUser = () =>
  new Promise((reseolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      reseolve(userAuth);
    }, reject);
  });
