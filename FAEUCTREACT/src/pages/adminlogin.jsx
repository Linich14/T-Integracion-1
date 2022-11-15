import React, { useState } from "react";
import './adminlogin.css'



import {admin} from '../components/firebase'
import { UserAuth } from '../context/AuthContext';




const Adminlogin = () => {
  const { user } = UserAuth();
  return (
    <>
      <br></br><br></br>
      <br></br><br></br>
       {user.uid === admin ? 
        <div className="container" style={{ backgroundColor: " rgba(239, 247, 168, 0.89)" }}>
          cosas de admins
        </div>
        :    <div className="container" style={{ backgroundColor: " rgba(239, 247, 168, 0.89)" }}>
        Usted no es un Usuario habilitado para ver esta pagina.
      </div>}
    </>
  )
}

export default Adminlogin 