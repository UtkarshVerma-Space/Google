"use client"

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth,signInWithRedirect ,GoogleAuthProvider } from "firebase/auth";
import firebaseConfig from "./config/firebase";

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



// Sigin

const provider = new GoogleAuthProvider();


const auth = getAuth();
const signinwithgoogle =()=>{

  signInWithRedirect(auth,provider)
  .then(()=>{

  })
  .catch((error)=>{
    console.log(error)
  })



}




export default function Home() {
  return (
    <>
<center>

    <button onClick={signinwithgoogle} style={{backgroundColor: 'whitesmoke' ,padding: "20px"
    ,borderRadius:"20px"}}> Google</button>
    </center>
    </>
  )
}
