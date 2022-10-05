import React from 'react';
import './footer.css';
import footercito from '../images/footerRRSS_negro.png';

const Footer = () => {
  return (
    <div className='container' id="footercontainer">
        <img src={footercito} alt="?" id="footerimagen"/>
    </div>
  )
}

export default Footer