import React from 'react'
import './contacto.css';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import imagenuct1 from '../images/uctsanfrancisco.jpg'
import imagenuct2 from '../images/UCT.jpg'
import imagenuct3 from '../images/uct1.jpg'

const Contacto = () => {
 
  return (
    
    <div className="container" id="contacto">
    <h1 className="py-3 "><i>¡Bienvenid@ a Tu Pagina De Contacto En La UCT!</i></h1>
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
            
            <p>¡Formulario De Contacto Con La UCT!</p>
            
            <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Dirección de correo electrónico.</Form.Label>
        <Form.Control type="email" placeholder="NombreDelUsuario@Ejemplo.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Escribe Tu Mensaje.</Form.Label>
        <Form.Control as="textarea" rows={3} />
        <Button variant="primary" type="submit">
        Enviar
      </Button>
      </Form.Group>
    </Form>
            
            <hr />
            </div>
        
       
      

  )
}

export default Contacto