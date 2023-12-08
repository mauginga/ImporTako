import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { initializeApp } from "firebase/app";

import 'bootstrap/dist/css/bootstrap.min.css';


const firebaseConfig = {
  apiKey: "AIzaSyBs10UkDB5-uhtmk1smuj0SqLm7AyoT71U",
  authDomain: "importako-c157e.firebaseapp.com",
  projectId: "importako-c157e",
  storageBucket: "importako-c157e.appspot.com",
  messagingSenderId: "374259196870",
  appId: "1:374259196870:web:fb11c968d1629a5a7748c7"
};

const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
