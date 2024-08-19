// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEHNUfmeuRRJQQa-xX3L2e6_C4Udmdyjw",
  authDomain: "inventory-management-59ed7.firebaseapp.com",
  projectId: "inventory-management-59ed7",
  storageBucket: "inventory-management-59ed7.appspot.com",
  messagingSenderId: "694543052624",
  appId: "1:694543052624:web:ecc19bf1f1c80861c8c655",
  measurementId: "G-H77BVMPJC6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const analytics = getAnalytics(app);
export { firestore };