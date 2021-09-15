import { initializeApp } from "firebase/app";
import  {
    getFirestore,
    collection,
    query,
    where,
    getDocs,
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyABIJMdvajQA-hpmKyFfxOZCatXvzMPIfc",
    authDomain: "viajes-sp.firebaseapp.com",
    projectId: "viajes-sp",
    storageBucket: "viajes-sp.appspot.com",
    messagingSenderId: "423568346052",
    appId: "1:423568346052:web:4be9c1e6d38d62e68d7291",
    measurementId: "G-WR1MST0DEF"
  };

  export const app = initializeApp(firebaseConfig);
  export const db =  getFirestore(app);

  
