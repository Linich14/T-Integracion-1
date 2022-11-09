
import React from 'react';
import './inicio.css';
import '../pages/Contacto'

import imagenuct1 from '../images/uctsanfrancisco.jpg'
import imagenuct2 from '../images/UCT.jpg'
import imagenuct3 from '../images/uct1.jpg'

const Inicio = () => {

  return (
    <div className="container" id="inicio">
    <h1 id="bnvd"><i>¡Bienvenid@ a FÆUCT!</i></h1>
          <section className="slider">
                
          <div className="slider_container container ">
                <svg xmlns="http://www.w3.org/2000/svg" fill= "black" className="slider_arrow" viewBox="0 0 16 16" id="before">
                    <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
                </svg>
              
                <section className="slider_body slider_body-show" data-id="1">            
                    <figure className="slider_picture">
                        <img src={imagenuct1} className="slider_img" alt=""/>
                    </figure>
                </section>
                
                <section className="slider_body" data-id="2">        
                    <figure className="slider_picture">        
                        <img src={imagenuct2} className="slider_img" alt=""/>
                    </figure>
                </section>

                <section clasNames="slider_body" data-id="3">        
                    <figure className="slider_picture">        
                        <img src={imagenuct3} className="slider_img" alt=""/>
                    </figure>
                </section>
                <svg xmlns="http://www.w3.org/2000/svg" fill="black" className="slider_arrow" viewBox="0 0 16 16" id="next">
                    <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                </svg>
            </div>
        </section>
       <hr />
      <h5 className='cont-index'>
        Un Lugar donde encontraras la conexion a las demas herramientas virtuales que ofrece la Universidad Catolica de Temuco.<br></br>
        Donde tambien podras encontrar a tus compañeros, enviarles mensajes a las personas que conoces, ver tus asignaturas, <br></br>crear grupos y
        seguir las noticias mas importantes y destacadas de la universidad.
        <br></br>
        <br></br>
        ¡Solo Tienes que ingresar con tu cuenta de Google perteneciente a la Universidad!
      </h5>
      <hr />
    </div>
  )
}

export default Inicio