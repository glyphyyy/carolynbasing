import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD6jdnzK5yk7W74oeGSOEP81o1Rdjyk7e4",
  authDomain: "carolynbasing.firebaseapp.com",
  projectId: "carolynbasing",
  storageBucket: "carolynbasing.appspot.com",
  messagingSenderId: "372691051667",
  appId: "1:372691051667:web:f78e9f1994e53a4f811966",
  measurementId: "G-EQEXWXHKR1"
};

const app = initializeApp(firebaseConfig);
//const projectStorage = firestore.storage();
//const projectFirestore = firebase.firestore();

export const auth = getAuth(app);
const projectStorage = getStorage();
const projectFirestore = getFirestore();
//export { projectStorage, projectFirestore };
export default app;
export { projectStorage, projectFirestore };
export const db = getFirestore(app);