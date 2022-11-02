import React, { useState } from "react";
import './adminlogin.css'
import { auth } from '../components/firebase';
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";




const Adminlogin = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [setUser] = useState({});
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
      console.log("hola?")
    }
  };


  return (
    <div className="container col-xl-10 col-xxl-8  py-5">  
      <div className="row align-items-center g-lg-5 py-5">

        <div className="col-md-10 mx-auto col-lg-5" >
          <form className="p-4 p-md-5  rounded-3 ">
            <div className="form-floating mb-3">
            <input  placeholder="Email..."  class="form-control" onChange={(event) => {setLoginEmail(event.target.value);  }} />
              <label for="floatingInput"><i>Admin FÆUCT</i></label>
            </div>
            <div className="form-floating mb-3">
            <input   placeholder="Password..." class="form-control" onChange={(event) => {setLoginPassword(event.target.value);   }}  />
              <label for="floatingPassword"><i>Contraseña</i></label>
            </div>
            <hr className="my-4"/>
            <button className="w-100 btn btn-lg btn-primary" type="submit"  onClick={login}>Ingresar</button>
          </form>      
        </div>  
      </div>
    </div>
  )
}

export default Adminlogin