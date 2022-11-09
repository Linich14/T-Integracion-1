import React from 'react'
import './contacto.css';
import '../pages/Contacto'

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import imagenuct1 from '../images/uctsanfrancisco.jpg'
import imagenuct2 from '../images/UCT.jpg'
import imagenuct3 from '../images/uct1.jpg'

const Contacto = () => {
 
  return (
    
    <div className="container" id="contacto">
    <h1 className="py-3 "><i>¡Contáctate Con Nosotros!</i></h1>
    <p className='contact'>Solo ingrese su correo electrónico y escribanos un mensaje </p>
    <Form>
        <Form.Group id='msj' controlId="exampleForm.ControlInput1">
            <Form.Label>Dirección de correo electrónico</Form.Label>
            <Form.Control id='correo' type="email" placeholder="NombreUsuario@Ejemplo.com" />
            </Form.Group>
            <Form.Group id='msj' controlId="exampleForm.ControlTextarea1">
                <Form.Label>Mensaje</Form.Label>
                <Form.Control id='mensaje' as="textarea" rows={5} />
                <Button id='enviar' variant="primary" type="submit">
                    Enviar
                    </Button>
                    </Form.Group>
                    </Form>
            
            <hr />
            </div>
        
       
      

  )
}

export default Contacto