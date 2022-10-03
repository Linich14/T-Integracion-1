import React from 'react';
import { Route, Routes ,Router} from 'react-router-dom';
import Protected from './components/Protected';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Account from './pages/Account';
import Signin from './pages/Signin';
import './App.css';
import { AuthContextProvider } from './context/AuthContext';


function App() {
  return (
    
    <AuthContextProvider>
    <Navbar/>
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Signin' element={<Signin />} />
          <Route
            path='/Account'
            element={
              <Protected>
                <Account />
              </Protected>
            }
          />
    </Routes>
    </AuthContextProvider>
   
  );
}

export default App;
