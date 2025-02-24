import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxT6uCXuy8JHQnCjSO03qxoHjl4BP3FEs",
  authDomain: "good-app-ce031.firebaseapp.com",
  projectId: "good-app-ce031",
  storageBucket: "good-app-ce031.firebasestorage.app",
  messagingSenderId: "706335200114",
  appId: "1:706335200114:web:aabaffd400f456233a03eb",
  measurementId: "G-XJ72EPTDZ9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
