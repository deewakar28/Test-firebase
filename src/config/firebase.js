// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore';
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import { getMessaging } from "firebase/messaging";


const firebaseConfig = {
  apiKey: "AIzaSyC99LAZs_YEuf7-WxmnCwbT7YRCviw3_O0",
  authDomain: "notifications-project-78d8c.firebaseapp.com",
  projectId: "notifications-project-78d8c",
  storageBucket: "notifications-project-78d8c.appspot.com",
  messagingSenderId: "877006131908",
  appId: "1:877006131908:web:c0d173367b46612a91af91",
  measurementId: "G-RN1G40N2SQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
//export const analytics = getAnalytics(app);
export const messaging = getMessaging(app);

export const googleProvider = new GoogleAuthProvider();