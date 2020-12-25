import React, {useState} from 'react'
import firebaseInstance, { firebaseAuth } from '../firebase'

const onSocialClick = async() => {
    //console.log(event.target.name);
    const provider = new firebaseInstance.auth.GoogleAuthProvider();
    const data = await firebaseAuth.signInWithPopup(provider);
    console.log(data);
}

const Auth = () => {
    //const [error, setError] = useState("");
    return (
        <div>
            <button onClick = {onSocialClick}>continue with google</button>
        </div>
    )
}
export default Auth;