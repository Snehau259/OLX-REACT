import React, { useEffect, useContext } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Signup from './Components/Signup/Signup'
import Login from './Components/Login/Login'
import { AuthContext, FirebaseContext } from './store/FirebaseContext';
import Home from './Pages/Home';




function App() {
  const { firebase } = useContext(FirebaseContext)
  const { setUser } = useContext(AuthContext)
  useEffect(() => {
    try {
      firebase.auth().onAuthStateChanged((user) => { setUser(user) });
    } catch (error) {
      console.log('error is' + error.message);
    }
  });
  
  return (
    <div>
      <Router>
        <Route exact path='/'>
          <Home />
        </Route>

        <Route exact path='/signup'>
          <Signup />
        </Route>

        <Route exact path='/login'>
          <Login />
        </Route>
      </Router>
    </div>
  );
}

export default App;
