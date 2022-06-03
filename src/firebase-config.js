import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDsKB_MRQbtNYgPYJtotbVNqJVxiaLPUYg",
  authDomain: "deptcoffer.firebaseapp.com",
  projectId: "deptcoffer",
  storageBucket: "deptcoffer.appspot.com",
  messagingSenderId: "756019802138",
  appId: "1:756019802138:web:abee144e132f96b4bce1a3",
  measurementId: "G-LSEDRJLGH7"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);