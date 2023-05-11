// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7iCKJgS3X2EXX5zBU03hTog2KyNwJ5zE",
  authDomain: "reen-splitter.firebaseapp.com",
  projectId: "reen-splitter",
  storageBucket: "reen-splitter.appspot.com",
  messagingSenderId: "1092738641088",
  appId: "1:1092738641088:web:5f0210760bb876d6a41125",
  measurementId: "G-L3NDY0WRQD",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);
