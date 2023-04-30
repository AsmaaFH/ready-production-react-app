import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSahwN8KXwwfYNcizPNu6-Ypc7WqtIvB8",
  authDomain: "firestock-82431.firebaseapp.com",
  projectId: "firestock-82431",
  storageBucket: "firestock-82431.appspot.com",
  messagingSenderId: "922361646226",
  appId: "1:922361646226:web:24f9dd389550cb5e972a4b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export default app;
