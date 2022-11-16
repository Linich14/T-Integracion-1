
import React from 'react';
import './inicio.css';

import Carousel from 'react-grid-carousel'

import imagenuct1 from '../images/uctsanfrancisco.jpg'
import imagenuct2 from '../images/UCT.jpg'
import imagenuct3 from '../images/uct1.jpg'

const Inicio = () => {

  return (
    <div className="container py-2" id="inicio">
    <h1 id="bnvd"><i>¡Bienvenid@ a FÆUCT!</i></h1>
          <section className="slider">
          <Carousel cols={1} rows={1} gap={10} loop>
            <Carousel.Item>
                <img width="80%" src={imagenuct1} />
            </Carousel.Item>
            <Carousel.Item>
                <img width="80%" src={imagenuct2} />
            </Carousel.Item>
            <Carousel.Item>
                <img width="80%" src={imagenuct3} />
            </Carousel.Item>
            <Carousel.Item>
                <img width="80%" src={imagenuct1} />
            </Carousel.Item>
            </Carousel>    

            
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