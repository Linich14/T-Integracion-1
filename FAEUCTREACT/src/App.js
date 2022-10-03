import React from 'react';
import { Route, Routes ,Router} from 'react-router-dom';
import Protected from './components/Protected';
import Inicio from './pages/Inicio';
import Navbar from './components/Navbar';
import Account from './pages/Account';
import Signin from './pages/Signin';
import Home from './pages/Home';
import './App.css';
import { AuthContextProvider } from './context/AuthContext';
import { auth } from './components/firebase';

import {useAuthState} from 'react-firebase-hooks/auth';



function App() {
  return (
   
    <AuthContextProvider>
    <Navbar/>
    
    <Routes>
      <Route path='/' element={<Inicio/>}/>
      <Route path='/Signin' element={<Signin />} />
      <Route path='/Home' element={<Protected> <Home/> </Protected>} />
      <Route path='/Account' element={ <Protected> <Account /> </Protected> }/>
    </Routes>
    </AuthContextProvider>
   
  );
}

export default App;
