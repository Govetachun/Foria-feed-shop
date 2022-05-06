// Import the functions you need from the SDKs you need
import { initializeApp ,getApp,getApps} from "firebase/app";

import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtMOkGsBujolhm7oarpyvinbcfM-3aGos",
  authDomain: "feed-foria.firebaseapp.com",
  projectId: "feed-foria",
  storageBucket: "feed-foria.appspot.com",
  messagingSenderId: "139005845940",
  appId: "1:139005845940:web:8869a0de3e9f74673392e1",
  measurementId: "G-PMTYFQZ457"
};

// Initialize Firebase
const app =!getApps().length? initializeApp(firebaseConfig):getApp();

const db = getFirestore();
const storage = getStorage();
export {app,db,storage};