
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'
import { getStorage, ref } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyAQQ6QbZCYfH5ZX9DB3sruh_f-yhHq69P8",
  authDomain: "faeuct-test.firebaseapp.com",
  databaseURL: "https://faeuct-test-default-rtdb.firebaseio.com/",
  projectId: "faeuct-test",
  storageBucket: "faeuct-test.appspot.com",
  messagingSenderId: "569802921949",
  appId: "1:569802921949:web:c0510e7b29453b9ff28834"
  //credenciales firebase
};

// inicia firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)
const storage = getStorage(app);
