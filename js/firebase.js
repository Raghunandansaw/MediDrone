// Import Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCq1553dsBtoSugXAmxnSm-JoBdYZmOzCs",
  authDomain: "medidrone-be1bc.firebaseapp.com",
  projectId: "medidrone-be1bc",
  storageBucket: "medidrone-be1bc.appspot.com",
  messagingSenderId: "501909185674",
  appId: "1:501909185674:web:19f1211899e29d3505f973",
  measurementId: "G-8DGENYJYGJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export Auth & Firestore so other pages can use
export const auth = getAuth(app);
export const db = getFirestore(app);
