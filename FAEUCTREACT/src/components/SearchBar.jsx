import React, { useContext, useState } from 'react';
import {collection, query, where, getDocs, setDoc, updateDoc, serverTimestamp} from 'firebase/firestore';
import {db} from './firebase';
import {AuthContext} from '../context/AuthContext'
import { getDoc } from 'firebase/firestore';

const Search = () =>{
    const [username, setUsername] = useState("")
    const [user, setUser] = useState(null)
    const [err, setErr] = useState(false)

    const {currentUser} = useContext(AuthContext)

    const handleSearch = async () => {
        const q = query(
            collection(db, "chatpeople"),
            where("displayName", "==", username)
        );
        
    try {

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc)=> {
        setUser(doc.data())
    });
    }catch (err) {
    setErr(true);
    }
    };
    const handleKey = e=>{
        e.code === "Enter" && handleSearch()
    }
    const handleSelect = async () =>{
        const combinedId =
            currentUser.uid > user.uid 
            ? currentUser.uid + user.uid 
            : user.uid + currentUser.uid;
        try{
            
            const res = await getDoc(doc(db, "chatpeople", combinedId));

            if (!res.exists()){

                


                await setDoc(doc (db, "chatpeople", combinedId), {messages : [] });

                await updateDoc(doc(db, "chatpeople", currentUser.uid), {
                    [combinedId+ ".userInfo"]: {
                        uid: user.uid,
                        displayName: user.displayName,
                        photoURL: user.photoURL
                    },
                    [combinedId+".date"]: serverTimestamp()
                })

                await updateDoc(doc(db, "chatpeople", user.uid), {
                    [combinedId+ ".userInfo"]: {
                        uid: currentUser.uid,
                        displayName: currentUser.displayName,
                        photoURL: currentUser.photoURL
                    },
                    [combinedId+".date"]: serverTimestamp()
                })
            }

        } catch(err){}
        
        setUser(null);
        setUsername("");
    }

    return (    
        <div className="search" id='barrita_busqueda'>
            <div className="searchForm" id='forma_busqueda'>
                <input type="text"
                       placeholder="Busca un usuario"
                       onKeyDown={handleKey}
                       onChange={e => setUsername(e.target.value)}  
                       value ={username}
                       /> 
            </div>
            {err && <span>No se ha encontrado el usuario.</span>}
            {user && <div className="userChat" onCLick={handleSelect}>
                <img src="{user.photoURL}"
                     alt=""
                />
                <div className="userChatInfo">
                    <span>{user.displayName}</span>
                </div>
            </div>}
        </div>
    )
}
export default Search;