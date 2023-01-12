import './App.css';
import { db } from './firebase/config';
import { collection, getDocs, addDoc, deleteDoc, doc, setDoc } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from 'react';
import { async } from '@firebase/util';


function App() {
  const [products, setProducts] = useState([])
  // const demoCollectionRef=collection(db,"products")


  return (
    <div className="App">
      <button onClick={async () => {
        const prodCollectionRef = collection(db, 'products')
        const data = await getDocs(prodCollectionRef)
        console.log(data.docs)
        setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

      }
      }>click me</button>
      {console.log(products)}
      {products.map((p, index) => (
        <div>
          <h1>name:{p.Name}</h1>
          <h1>price:{p.Price}</h1>
          <h1>Type:{p.Type}</h1>
        </div>
      )
      )

      }
      <button onClick={async () => {
        // const db = getFirestore(Firebase);
        const prodtAdd = await addDoc(collection(db, "products"), {
          Name: "Mi",
          Price: 1200,
          Type: "mobile"
        });
        console.log("Document written with ID: ", prodtAdd.id);

        return prodtAdd;

      }} > Add data</button>

      <button onClick={async () => {
        const deleteData = await deleteDoc(doc(db, "products", "J7DgNWuGcdRxMwupDWLU"));
        console.log("deleted");
        return deleteData;
      }}>Delete data</button>

      <button onClick={async () => {
        const updateData = await setDoc(doc(db, "products", "100"), {
          name: 'updated'
        })
        console.log("updated");
        return updateData;
      }}>Update data</button>

      <button onClick={() => {

        const auth = getAuth();
        createUserWithEmailAndPassword(auth, 'abc@gmail.com', '123456')
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            console.log('new user added')
          })
          // .catch((error) => {
          //   const errorCode = error.code;
          //   const errorMessage = error.message;
          //   // ..
          // });
      }}>Sign Up</button>


    </div>
  );
}

export default App;
