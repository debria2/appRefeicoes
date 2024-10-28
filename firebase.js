import { initializeApp } from "firebase/app"; 
import { getFirestore } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, initializeAuth, getReactNativePersistence } from "firebase/auth"; 
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyDkD9t2UVpZggRwGc84q4a85ropXPSUXe8",
  authDomain: "apprefeicaoaline.firebaseapp.com",
  projectId: "apprefeicaoaline",
  storageBucket: "apprefeicaoaline.appspot.com",
  messagingSenderId: "195867651474",
  appId: "1:195867651474:web:070e3e74749861111f654b"
};

// Inicializar o Firebase
const app = initializeApp(firebaseConfig);

// Inicializar Firestore
export const firestore = getFirestore(app);

// Inicializar Auth com persistência
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

// Exportar funções de autenticação
export { signInWithEmailAndPassword, onAuthStateChanged };
