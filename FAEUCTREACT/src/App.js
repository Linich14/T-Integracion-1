import React from 'react';
import { Route, Routes ,Router} from 'react-router-dom';
import Protected from './components/Protected';
import Inicio from './pages/Inicio';
import Navbar from './components/Navbar';
import Footer from './components/footer'
import Account from './pages/Account';
import Signin from './pages/Signin';
import Home from './pages/Home';
import Nosotros from './pages/nosotros'
import Adminlogin from './pages/adminlogin';
import Chat from './components/Chat'

import './App.css';
import { AuthContextProvider } from './context/AuthContext';




function App() {
  return (
    <AuthContextProvider>
    <Navbar/>
    <Routes>
      <Route path='/sudologin' element={<Adminlogin/>}/>
      <Route path='/nosotros' element={<Nosotros/>}/>
      <Route path='/' element={<Inicio/>}/>
      <Route path='/signin' element={<Signin />} />
      <Route path='/home' element={<Protected> <Home/> </Protected>} />
      <Route path='/chat' element={<Protected> <Chat/> </Protected>} />
      <Route path='/account' element={ <Protected> <Account/> </Protected> }/>
    </Routes>
    <Footer/>
    </AuthContextProvider>
   
  );
}

export default App;
