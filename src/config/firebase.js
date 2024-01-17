// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);