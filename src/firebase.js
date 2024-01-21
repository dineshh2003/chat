import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getStorage, ref } from "firebase/storage";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCNc8WeYVYBiLj78_soC4LH-F0zjSmkSMw",
  authDomain: "chat-6cc0d.firebaseapp.com",
  projectId: "chat-6cc0d",
  storageBucket: "chat-6cc0d.appspot.com",
  messagingSenderId: "1044264101795",
  appId: "1:1044264101795:web:fdbdcc3db03ddc62d35c16"
};

// initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();