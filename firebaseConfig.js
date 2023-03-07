// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, initializeAuth } from "firebase/auth";

import { getReactNativePersistence } from "firebase/auth/react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2QNZdMVSa9132VKt3sCkxrMssSakIQRM",
  authDomain: "monke-58b38.firebaseapp.com",
  projectId: "monke-58b38",
  storageBucket: "monke-58b38.appspot.com",
  messagingSenderId: "853087510230",
  appId: "1:853087510230:web:affcb24ffbcf0cc350f377",
  measurementId: "G-98TPFHKDM9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
// const analytics = getAnalytics(app);
