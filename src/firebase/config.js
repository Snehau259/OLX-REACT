import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyDlSUjgiEf5wcZ4pXkEdWcMhajMbZWVXTI",
    authDomain: "olx-react-1c495.firebaseapp.com",
    projectId: "olx-react-1c495",
    storageBucket: "olx-react-1c495.appspot.com",
    messagingSenderId: "356636909386",
    appId: "1:356636909386:web:5fac1a18a752847b3babb3"
  }

  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app)
