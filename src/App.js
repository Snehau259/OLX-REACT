import './App.css';
import { db } from './firebase/config';
import { collection, getDocs } from "firebase/firestore";
import { useState } from 'react';


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

    </div>
  );
}

export default App;
