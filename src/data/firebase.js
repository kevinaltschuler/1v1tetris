// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyDucz0moEW6Sr3Kxw_GC6yMo3dFplAC1Lk',
    authDomain: 'tetris-74136.firebaseapp.com',
    projectId: 'tetris-74136',
    storageBucket: 'tetris-74136.appspot.com',
    messagingSenderId: '1006507947526',
    appId: '1:1006507947526:web:b1b8859f468a718619b587',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
