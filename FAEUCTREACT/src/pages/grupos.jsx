import React, { useEffect, useState } from 'react'
import Menu from '../components/Menu'
import './grupos.css'
import { UserAuth } from '../context/AuthContext';
import Photo from './fotosperfil'
import PostFrom from '../components/form';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../components/firebase'

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
                            <h1>aqui van los posteos</h1>
                            <div className='py-1' style={{ backgroundColor: " rgba(239, 247, 168, 0.89)" }}>
                                {blogs.length === 0 ? (<p>No hay blogs</p>) : (blogs.map((blog) =>
                                    <div className='blog-cont' key={blog.id}>
                                        <hr />
                                        <div className='section1'>
                                            <h2>{blog.title}</h2>
                                            <p>Publicado por: {blog.usuario}</p>
                                        </div>
                                        <div className='section2'><p>{blog.description}</p></div>
                                        <div className='section3'><img src={blog.imgurl} width='200' height='200' alt=' . . .' /></div>
                                        <div className='section4'>
                                            <p>- {blog.createdat}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Grupos;