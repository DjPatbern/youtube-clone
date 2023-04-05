import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAA2T-coCGxJ-k54fYci8I_c0wF9Zy3W00",
    authDomain: "clone-a92f6.firebaseapp.com",
    projectId: "clone-a92f6",
    storageBucket: "clone-a92f6.appspot.com",
    messagingSenderId: "1039668167580",
    appId: "1:1039668167580:web:f5d4953fe25355ff343e59"
  };

 const app = initializeApp(firebaseConfig); 
 export const auth = getAuth(app);
export const provider = new GoogleAuthProvider()