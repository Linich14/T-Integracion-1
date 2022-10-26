import { initializeApp } from "firebase/app";
import {getStorage, ref, uploadBytes} from 'firebase/storage'
import { v4 } from 'uuid'

const firebaseConfig = {
  apiKey: "AIzaSyDFvSq1QOmmdJ1ttp97a6YXYvNuqtVGY70",
  authDomain: "fir-react-posteo.firebaseapp.com",
  projectId: "fir-react-posteo",
  storageBucket: "fir-react-posteo.appspot.com",
  messagingSenderId: "696048748469",
  appId: "1:696048748469:web:eea293c57e80fdbf263bfc"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)

export async function subirArchivo(file){
    const storageRef = ref(storage, v4())
    return await uploadBytes(storageRef, file)
}
