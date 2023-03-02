import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAipWs2W2XgBSF1JDKrwQQoxv7WO_zLlRM",
    authDomain: "vue-kino-cms.firebaseapp.com",
    projectId: "vue-kino-cms",
    storageBucket: "vue-kino-cms.appspot.com",
    messagingSenderId: "101386593920",
    appId: "1:101386593920:web:87fe43e8f7a85dd7466865",
    measurementId: "G-VKYDTDP4CC"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);
  
  export { app, auth, db };
 