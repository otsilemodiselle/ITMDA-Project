import { initializeApp } from 'firebase/app';
import {getAuth} from 'firebase/auth';

// Optionally import the services that you want to use

// import {...} from 'firebase/database';
// import {...} from 'firebase/firestore';
// import {...} from 'firebase/functions';
// import {...} from 'firebase/storage';

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBAAP6w27S34X-OEwsyecIqBP_sDdYUIN4",
    authDomain: "sergean-ts-orders.firebaseapp.com",
    projectId: "sergean-ts-orders",
    storageBucket: "sergean-ts-orders.firebasestorage.app",
    messagingSenderId: "1064328963290",
    appId: "1:1064328963290:web:422f17ddc8876d1d2a71e3",
    measurementId: "G-B5ZBVY4442"
  };

const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export {auth}
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
