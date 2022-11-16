import React from 'react'

import {profesores} from '../components/firebase'
import { UserAuth } from '../context/AuthContext';
import MenuAsignaturas from '../components/menuasignaturas'
import './controlasignaturas.css'
import Carousel from 'react-grid-carousel'


import sistemas from '../images/sistemas.png'
import programacion from '../images/programacion.jpg'
import algebra from '../images/algebra.jpg'
import calculo from '../images/calculo.jpg'

const controlasignaturas = () => {
    const { user } = UserAuth();
  return ( 
    <>
      <br></br><br></br>
      <br></br><br></br>
       {profesores.includes(user?.uid) || user.displayName == "AdminUCT" ? 
        <div className="container" >
            <div className='row'>
                <div className='col-2 custom' ><MenuAsignaturas/></div>
                <div className='col-1 invis'></div>
                <div className='col-8 custom  py-3' ><h1>Hola Profesor: {user.displayName}</h1>
                <section className="slider">
                        <Carousel cols={1} rows={1} gap={10} loop>
                          <Carousel.Item>
                            <a href="#"><img width="80%" src={sistemas} /></a>
                              <h4>Mantencion y Administracion de Sistemas</h4>
                          </Carousel.Item>
                          <Carousel.Item>
                          <a href=""><img width="80%" src={calculo} /></a>
                            <h4>Introduccion al Calculo</h4>
                          </Carousel.Item>
                          <Carousel.Item>
                          <a href=""><img width="80%" src={programacion} /></a>
                          <h4>Programacion III</h4>
                          </Carousel.Item>
                          <Carousel.Item>
                          <a href=""><img width="80%" src={algebra} /></a>
                          <h4>Algebra Lineal</h4>
                          </Carousel.Item>
                          </Carousel>   
            
                   </section>
                   <hr />
                   <h3>¿Que Asignatura desea modificar?</h3>
                </div>
                <div className='col-1 invis'></div>
            </div>
        </div>
        :    <div className="container" style={{ backgroundColor: " rgba(239, 247, 168, 0.89)" }}>
        Usted no es un Docente habilitado para ver esta pagina.
      </div>}
      </>
  )
}

export default controlasignaturas