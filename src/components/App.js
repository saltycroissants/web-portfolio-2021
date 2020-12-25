import React, {useState, useEffect} from 'react'
import AppRouter from "./Router";
import {firebaseAuth} from '../firebase'

function App() {
  //const auth = firebase.auth();
  //console.log("the user is",firebaseAuth.currentUser);
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(firebaseAuth.currentUser);
  useEffect (() =>{
    firebaseAuth.onAuthStateChanged((user) => {
      if(user){
        setIsLoggedIn(true);
      }else{
        setIsLoggedIn(false);
      }
      setInit(true);
    }) 

  },[])
  return (
    <>
      {init ? <AppRouter isLoggedIn = {isLoggedIn} /> : 'firebase initializing..'}
      <footer>copyright &copy; {new Date().getFullYear()} Eunji Lee. All rights reserved </footer>
    </>
  );
}

export default App;
