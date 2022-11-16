
  import React from 'react'
  import './Asignaturas.css';
  import ListGroup from 'react-bootstrap/ListGroup';
  import Toast from 'react-bootstrap/Toast';
  import Badge from 'react-bootstrap/Badge';

  const Asignaturas = () => {
    return (
    <main className='container' id='body'>
        <div className="Articulo-mayor">
          <h1 className="Titulo">"Asignaturas"</h1>
          <p className='Contenido-1'> <Badge bg="primary"><h2>Todo Relacionado Con Tus Ramos y Calificaciones.</h2></Badge>
       



          <br />
          
          
          <>
      {[
        
        'Info',
        
      ].map((variant, idx) => (
        <Toast
          className="d-inline-block m-1"
          bg={variant.toLowerCase()}
          key={idx}
        >
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">¡Aviso!</strong>
            <small>Hace 3 Minutos</small>
          </Toast.Header>
          <Toast.Body className={variant === 'Dark' && 'text-white'}>
            Recuerda Estamos Para Ayudarte Somos UCT.
          </Toast.Body>
        </Toast>
      ))}
    </>
          
          </p>
      </div> 

      <div className='Subarticulo-izq'>
        <h3 className='Titulo-sub'>"Ramos Inscritos"</h3>
        <p className='Contenido-sub1'>
        <ListGroup as="ol" numbered>
      <ListGroup.Item as="li">Mantencion y Administracion De Sistemas</ListGroup.Item>
      <ListGroup.Item as="li">Programacion III</ListGroup.Item>
      <ListGroup.Item as="li">Diseño De Software</ListGroup.Item>
      <ListGroup.Item as="li">Arquitectura De Hardware</ListGroup.Item>
      <ListGroup.Item as="li">Calculo Intermedio</ListGroup.Item>
      <ListGroup.Item as="li">Algebra Lineal</ListGroup.Item>
      <ListGroup.Item as="li">Teoria De Grafos</ListGroup.Item>
      <ListGroup.Item as="li">Interconexion De Redes</ListGroup.Item>
        </ListGroup>
         </p>
      </div>

      <div className='Subarticulo-der'>
        <h3 className='Titulo-sub'>"Notas"</h3>
        <p className='Contenido-sub1'>
        <ListGroup>
      <ListGroup.Item>Calificaciones De Ramos Inscritos.</ListGroup.Item>
      <ListGroup.Item action variant="primary">7.0</ListGroup.Item>
      <ListGroup.Item action variant="primary">
        7.0
      </ListGroup.Item>
      <ListGroup.Item action variant="primary">
        7.0
      </ListGroup.Item>
      <ListGroup.Item action variant="success">
        4.5
      </ListGroup.Item>
      <ListGroup.Item action variant="success">
        4.5
      </ListGroup.Item>
      <ListGroup.Item action variant="danger">
        3.5
      </ListGroup.Item>
      <ListGroup.Item action variant="danger">
        3.3
      </ListGroup.Item>
      <ListGroup.Item action variant="danger">
        2.8
      </ListGroup.Item>
    </ListGroup>
    </p>
      </div>






    </main>
    
      

















    )
  }

 
  export default Asignaturas
  

