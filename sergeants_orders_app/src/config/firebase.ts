import AsyncStorage from '@react-native-async-storage/async-storage';
import { initializeApp } from 'firebase/app';
import {getAuth, initializeAuth, getReactNativePersistence} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

// Optionally import the services that you want to use

// import {...} from 'firebase/database';

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

initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
})

const auth = getAuth(app)
const db = getFirestore(app)

export {auth,db}
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
