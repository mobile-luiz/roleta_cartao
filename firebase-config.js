// Configuração do Firebase — PAD Saúde+
// Projeto: inventario-f8794
const firebaseConfig = {
  apiKey: "AIzaSyBNevFEEvg4E7LXBk_-LEq6dfTkBHlhhOw",
  authDomain: "inventario-f8794.firebaseapp.com",
  projectId: "inventario-f8794",
  storageBucket: "inventario-f8794.firebasestorage.app",
  messagingSenderId: "499180546382",
  appId: "1:499180546382:web:dabed88a574ef77b0d161f",
  measurementId: "G-3NKBHHRSWB"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
const functions = firebase.app().functions("southamerica-east1");
