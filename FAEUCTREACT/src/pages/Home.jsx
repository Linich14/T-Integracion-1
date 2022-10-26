import React from 'react'
import { Link } from 'react-router-dom'
import './home.css';
import Posts from './posts';

const Home = () => {
  return (
    <main className='container' id='body'>
      <Link to="/posts" className='btn btn-primary'>Hacer una publicación</Link>
      <div className="Articulo-mayor">
          <h1 className="Titulo">Titulo</h1>
          <p className='Contenido-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus perspiciatis similique, totam illo voluptas eveniet ea corporis accusamus nihil vitae!</p>
      </div> 

      <div className='Subarticulo-izq'>
        <h3 className='Titulo-sub'>Titulo</h3>
        <p className='Contenido-sub1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed odio, cum tempore ut ipsam blanditiis libero, accusamus impedit optio commodi, ullam beatae eligendi. Laboriosam inventore provident ratione.</p>
      </div>

      <div className='Subarticulo-der'>
        <h3 className='Titulo-sub'>Titulo</h3>
        <p className='Contenido-sub2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias voluptatibus facilis adipisci eum error a quaerat quae molestiae voluptates qui in cum nobis, atque magni delectus. Sequi molestias facilis iste quod explicabo?</p>
      </div>

      <div className='Columna'>
        <h2 className='Titulo-col'>Titulo</h2>
      </div>

      <div className='Col-opinion'>
        <h2 id='Titulo-op'>Titulo</h2>
        <p id='Cont-op'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos nihil totam itaque aliquam reprehenderit, illo nostrum nulla deleniti, repellat odit voluptas? Fugit eligendi beatae animi, sequi dolorem, debitis blanditiis ducimus, nemo quae tempore facilis rem? Doloremque odio veritatis inventore maxime?</p>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit.</li>
        <li>Lorem, ipsum dolor.</li>
        <h2 id='Titulo-op'>Titulo 2</h2>
        <p id='Cont-op'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum fuga, ex suscipit quisquam temporibus magni? Et soluta quis laborum nulla quam ad nisi, pariatur sit mollitia laudantium architecto ipsum ipsam omnis doloribus inventore adipisci in sapiente voluptatem amet reiciendis aliquam cumque esse veritatis? Modi ipsa quo qui? Ab, quo molestias?</p>
      </div>

      <div className='rec-der'>
        <h4 className='Titulo-subder'>Title</h4>
        <p className='Cont-subder'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis dolor quo repudiandae praesentium eveniet distinctio beatae quas in quaerat porro vitae illo totam, ea laboriosam?</p>
      </div>

      <div className='rec-der2'>
        <h4 className='Titulo-subder'>Hipervinculos</h4>
          <li><a href="" id='hip'>Lorem, ipsum dolor</a></li>
          <li><a href="" id='hip'>Lorem.</a></li>
          <li><a href="" id='hip'>Lorem ipsum dolor sit.</a></li>
      </div>

      <div className='Final'>
        <h1 className='Titulo-fin'>Final Title</h1>
        <p className='Cont-fin'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quos ea doloribus recusandae corrupti velit saepe, laborum aliquam delectus voluptatem. Dignissimos consequuntur dolorum ad quam, animi nostrum quae enim modi.</p>
      </div>
    </main>

  )
}

export default Home
