import {React, useState, useEffect} from 'react';
import './home.css';
import Menu from '../components/Menu';
import { Link } from 'react-router-dom';
import {ref, listAll, getDownloadURL} from 'firebase/storage'
import {storage} from '../components/firebase'


const Home = () => {

  const postListRef = ref(storage, 'post-home/')
  const [postList, setPostList] = useState([]);
  
  const pathNoti = ref(storage, 'faeuct-test.appspot.com/post-home/tablet.txt')
  const [raw, setRaw] = useState()

  fetch({pathNoti})
  .then(r => r.text(String))
  .then(text => {setRaw(text)});


  useEffect(() =>{

    listAll(postListRef).then((response) => {

        response.items.forEach((item)=>{
            getDownloadURL(item).then((url) =>{
                setPostList((prev)=>[...prev, url]);
            });
        });
    });
    }, []);




  return (
    <div className=' container'>
      <div className='row'>
        <div className='col-2'>
        <br /><br /><br /><br />
      <Link to="/posts" className='btn btn-primary'>Hacer una publicación</Link>
      <Menu className='sticky-bottom'style={{backgroundColor:" rgba(239, 247, 168, 0.89)"}}/>
    </div>
    
    <div className='col-10'>
    <main className='' id='body'>
      
      <div className="Articulo-mayor">
      
          <h1 className="Titulo">Memes de la comunidad</h1>
          {postList.map((url)=>{
            var count = 0;
              while(postList.map){
                if(count == 1){
                      return <img
                      height='220px'
                      width='220px'
                      margin-left='20px'
                      src={url} />;
                }
              count = +1;
                  }
                    }
                      )}
      </div> 

      <div className='Subarticulo-izq'>
        <h3 className='Titulo-sub'>Noticias</h3>
        <p>{raw}</p>
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
    </div>
   
    </div>
    </div>
  )
}

export default Home
