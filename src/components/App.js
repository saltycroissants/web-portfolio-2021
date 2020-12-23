import React, {useState} from 'react'
import AppRouter from "./Router";
import {firebaseAuth} from '../firebase'

function App() {
  //const auth = firebase.auth();
  console.log("the user is",firebaseAuth.currentUser);
  const [isLoggedIn, setIsLoggedIn] = useState(firebaseAuth.currentUser);
  return (
    <>
      <AppRouter isLoggedIn = {isLoggedIn} />
      <footer>copyright &copy; {new Date().getFullYear()} Eunji Lee. All rights reserved </footer>
    </>
  );
}

export default App;
