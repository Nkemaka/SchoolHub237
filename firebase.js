import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

const firebaseConfig = {
  apiKey:  "AIzaSyCGZMQjk-IR7X0FhkC7iFSn0TCVysiuCr4",
  authDomain: "schoolhub237.firebaseapp.com",
  projectId: "schoolhub237",
  storageBucket: "schoolhub237.appspot.com",
  messagingSenderId: "675417084338",
  appId: "1:675417084338:web:7418fd3ec15420dbc694ab"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);