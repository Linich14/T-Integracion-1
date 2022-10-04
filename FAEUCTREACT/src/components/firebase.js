
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
//credenciales firebase aqui
};

// inicia firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
