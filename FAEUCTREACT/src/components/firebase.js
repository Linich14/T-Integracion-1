
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
      // aqui van las credenciales de firebase
};

// inicia firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);