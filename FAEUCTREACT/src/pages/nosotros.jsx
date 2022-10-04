import React from 'react'
import './nosotros.css'
import { Link } from 'react-router-dom';
import jorge from '../images/nosotros/jorge.jpg'
import juan from '../images/nosotros/juan.jpg'
import nico from '../images/nosotros/nicolagos.png'
import mati from '../images/nosotros/mati.jpg'
import jose from '../images/nosotros/Jose.jpg'


const nosotros = () => {
  return (
    <div className="container text-center " >
    
    <div className="carousel-inner  " id="carrusel">
       
        <div className="carousel-item active">
            <div className="container ">
                <div className="row">
                    <div className="col-lg-4">
                    <Link to='/sudologin'><img className="rounded-circle shadow-1-strong mb-4" src={jorge} alt="avatar" /></Link>
                        <h5 className="mb-3"><a href="https://github.com/Linich14">Jorge Soto C</a></h5>
                        <p>Web Developer</p>
                        <p className="text-muted">
                            <i className="fas fa-quote-left pe-2"></i>
                            Taller de Integracion <br/> Seccion 1 <br/>
                            Grupo 2 <br/>

                        </p>

                    </div>

                    <div className="col-lg-4 d-none d-lg-block">
                    <img className="rounded-circle shadow-1-strong mb-4" src={nico} alt="avatar" />
                        <h5 className="mb-3"><a href="https://github.com/nlagos1">Nicolas Lagos</a></h5>
                        <p>Web Developer</p>
                        <p className="text-muted">
                            <i className="fas fa-quote-left pe-2"></i>
                            Taller de Integracion <br/> Seccion 1 <br/>
                            Grupo 2 <br/>
                        </p>

                    </div>

                    <div className="col-lg-4 d-none d-lg-block">
                    <img className="rounded-circle shadow-1-strong mb-4" src={jose} alt="avatar" />
                        <h5 className="mb-3"><a href="https://github.com/JJ3972433">Jose Jimenez</a></h5>
                        <p>Web Developer</p>
                        <p className="text-muted">
                            <i className="fas fa-quote-left pe-2"></i>
                            Taller de Integracion <br/> Seccion 1 <br/>
                            Grupo 2 <br/>
                        </p>

                    </div>
                    <div className="col-lg-4 d-none d-lg-block">
                    <img className="rounded-circle shadow-1-strong mb-4" src={mati} alt="avatar" />
                        <h5 className="mb-3"><a href="https://github.com/MatiasHGT">Matias Gajardo</a></h5>
                        <p>Web Developer</p>
                        <p className="text-muted">
                            <i className="fas fa-quote-left pe-2"></i>
                            Taller de Integracion <br/> Seccion 1 <br/>
                            Grupo 2 <br/>
                        </p>

                    </div>
                    <div className="col-lg-4 d-none d-lg-block">
                    <img className="rounded-circle shadow-1-strong mb-4" src={juan} alt="avatar" />
                        <h5 className="mb-3"><a href="https://github.com/der-kaffe">Juan Cardenas</a></h5>
                        <p>Web Developer</p>
                        <p className="text-muted"><i className="fas fa-quote-left pe-2"></i> Taller de Integracion <br/> Seccion 1 <br/>Grupo 2 <br/></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default nosotros