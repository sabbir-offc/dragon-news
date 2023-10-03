import { getAuth } from 'firebase/auth'
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC1jJ3l5J_d0mR9hB5Kb891cjZ9qQnLz94",
    authDomain: "dragon-news-f5db4.firebaseapp.com",
    projectId: "dragon-news-f5db4",
    storageBucket: "dragon-news-f5db4.appspot.com",
    messagingSenderId: "828342037072",
    appId: "1:828342037072:web:e89d55550f596ff2a0bf55"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)