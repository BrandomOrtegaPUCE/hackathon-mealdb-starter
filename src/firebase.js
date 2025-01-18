import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 


const firebaseConfig = {
  apiKey: "AIzaSyC3rTTVMs5s6fC1JYK1ZTMGES3vieEHPbQ",
  authDomain: "mealdb-e0971.firebaseapp.com",
  projectId: "mealdb-e0971",
  storageBucket: "mealdb-e0971.appspot.com", 
  messagingSenderId: "934530080516",
  appId: "1:934530080516:web:38cd6730d64429530ffa51",
  measurementId: "G-FZWL91YFRG"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Inicializa el servicio de autenticación
export const auth = getAuth(app);
