import { initializeApp } from "firebase/app"; 
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"; // Importar getAuth

const firebaseConfig = {
  apiKey: "AIzaSyDkD9t2UVpZggRwGc84q4a85ropXPSUXe8",
 
  authDomain: "apprefeicaoaline.firebaseapp.com",
 
  projectId: "apprefeicaoaline",
 
  storageBucket: "apprefeicaoaline.appspot.com",
 
  messagingSenderId: "195867651474",
 
  appId: "1:195867651474:web:070e3e74749861111f654b"
  };

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const auth = getAuth(app); // Exportar auth
