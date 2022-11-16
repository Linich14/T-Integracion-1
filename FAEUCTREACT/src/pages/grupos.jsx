import React, { useEffect, useState } from 'react'
import Menu from '../components/Menu'
import './grupos.css'
import { UserAuth } from '../context/AuthContext';
import Photo from './fotosperfil'
import PostFrom from '../components/form';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../components/firebase'
import Delete from '../components/Delete'

const Grupos = () => {
    const { user } = UserAuth();
    const [blogs, setblogs] = useState([]);

    useEffect(() => {
        const blogref = collection(db, "Blogs");
        const q = query(blogref, orderBy("createdat", "desc"))
        onSnapshot(q, (snapshot) => {
            const allBlogs = snapshot.docs.map((docs) => (
                {
                    id: docs.id,
                    ...docs.data()
                }
            ))
            setblogs(allBlogs)
        })
    }, [])
    return (
        <div>
            <br /><br /><br /><br />
            <div className='container'>
                <div className='row'>
                    <div className='col-2'>
                        <br /><Menu /></div>
                    <div className='col-10'>
                        <div className='row rounded' style={{ backgroundColor: " rgba(239, 247, 168, 0.89)" }}>
                            <div className=''>
                                <PostFrom />
                                <hr />
                            </div>
                        </div>
                        <br />
                        <div className='row rounded' style={{ backgroundColor: " rgba(239, 247, 168, 0.89)" }}>

                            <div className='py-1'>
                            <div className='blog-cont' >
                                {blogs.length === 0 ? (<p>No hay blogs</p>) : (blogs.map(({ id, title, description, imgurl, usuario, createdat }) =>
                                    <div className='blog-cont posting' key={id}>
                                        
                                        <div className='section1 '>
                                            <h2>{title}</h2>
                                            <p>Publicado por: {usuario}</p>
                                            <hr />
                   
                                        </div>
                                        <div className='section2'><p>{description}</p></div>
                                        <div className='section3'><img src={imgurl} width='200' height='200' alt=' . . .' /></div>
                                        <div className='section4'>
                                            <p>- {createdat}</p>
                                            
                                        </div>
                                        <hr />
                                    
                                       <div className='comentariado mb-3'>

                                        
                                        <button className='btn btn-primary botonardoespecial'>Like</button>
                                        <textarea name="" id="" cols="70" rows="5"></textarea>
                                        <button className='btn btn-primary botonardo'>Comentar</button>
                                        <button className='btn btn-primary botonardo2'><img src={user.photoURL} alt="" id='user'/></button>
        
                                       </div>
                                       {(user.displayName == usuario || user.displayName =="AdminUCT" ) ? (<div>
                                        <Delete id={id} className="deleteao"/>
                                        </div>):(<div></div>)}
                                    </div>
                                    
                                ))}
                                
                            </div>
                        </div>
                    </div>
                </div>

                </div>
            </div>
        </div>
    )
}

export default Grupos;

