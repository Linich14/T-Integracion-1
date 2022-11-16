import { deleteDoc, doc } from 'firebase/firestore'
import React from 'react'
import { db, storage } from '../components/firebase'
import { toast } from 'react-toastify';
import { deleteObject, ref } from 'firebase/storage';
import '../pages/grupos.css'

export default function Delete({ id }) {

    const handleDelete = async () => {
        try {
            await deleteDoc(doc(db, "Blogs", id))
            toast("Articulo borrao", { type: "sucess" })
            const storageRef = ref(storage)
            await deleteObject(storageRef)
        } catch (error) {
            toast("Error", { type: error })
            console.log(error)
        }
    }

    return (
        <div><button className='btn btn-danger deleteao' onClick={handleDelete}>Delete</button></div>
    )
}
