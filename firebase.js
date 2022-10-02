// Import the functions you need from the SDKs you need
import * as firebase from 'firebase';
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAp9y0f-BpyxP8YUjnw20xEnh_X4Z4KFkg",
  authDomain: "pokegraph-app.firebaseapp.com",
  databaseURL: "https://pokegraph-app-default-rtdb.firebaseio.com",
  projectId: "pokegraph-app",
  storageBucket: "pokegraph-app.appspot.com",
  messagingSenderId: "765506903506",
  appId: "1:765506903506:web:c8aa8c58a5b26dce853c0b",
  measurementId: "G-RW8WF6LEB2"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = initializeApp(firebaseConfig);
} else {
    app = firebase.app();
}

const auth = firebase.auth

export { auth };