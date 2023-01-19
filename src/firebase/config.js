import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyDlSUjgiEf5wcZ4pXkEdWcMhajMbZWVXTI",
  authDomain: "olx-react-1c495.firebase.com",
  projectId: "olx-react-1c495",
  storageBucket: "olx-react-1ac495.appspot.com",
  messagingSenderId: "356636909386",
  appId: "1:356636909386:web:5fac1a18a752847b3babb3"
}

export default firebase.initializeApp(firebaseConfig)