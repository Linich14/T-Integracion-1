
import React, { useEffect, useState } from 'react';
import { GoogleButton } from 'react-google-button';
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { db } from '../components/firebase';
import { addDoc, collection } from 'firebase/firestore';
import './signin.css';

const Signin = () => {
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { signIn } = UserAuth();


  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    try {
      await signIn(email, password)
      navigate('/account')
    } catch (e) {
      setError(e.message)
      console.log(e.message)
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();

    } catch (error) {
      console.log(error);
    }
    await addDoc(collection(db, 'personas'), {
      uid: user.uid,
      name: user.displayName,
      authProvider: "google",
      email: user.email})
  };

  useEffect(() => {
      if (user != null) {
        navigate('/account');
      }

      
  }, [user]);

  return (
    <div className='container '>
      <br /><br /><br /><br />
    <div className='d-flex ' id='azulsignin'> <div className='d-flex' id='centrosignin'> <h1>Alumno, Conectate con:</h1> <GoogleButton onClick={handleGoogleSignIn} /> </div> </div>
    <br /><br />
    <div className="col-md-10 mx-auto col-lg-5" >
          <form className="p-4 p-md-5  " onSubmit={handleSubmit}>
          <h2>Ingreso Docente:</h2>
            <div className="form-floating mb-3">
              
            <input  placeholder="Email..." onChange={(e) => setEmail(e.target.value)} class="form-control"  />
              <label for="floatingInput"><i>Admin FÆUCT</i></label>
            </div>
            <div className="form-floating mb-3">
            <input   placeholder="Password..." onChange={(e) => setPassword(e.target.value)} class="form-control"  />
              <label for="floatingPassword"><i>Contraseña</i></label>
            </div>
            <hr className="my-4"/>
            <button className="w-100 btn btn-lg btn-primary" type="submit" >Ingresar</button>
          </form>      
        </div>

  </div>
  );
};

export default Signin;