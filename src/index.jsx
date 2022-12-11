import React from "react";
import ReactDOM from "react-dom/client";
// import {BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Footer from "./Components/Footer";
import LoginForm from "./Components/LoginForm";
//import Login from './Login';
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
//Lembre-se de configurar suas rotas e seu contexto aqui


root.render(
  <React.StrictMode>
    {/* <BrowserRouter>
      <Routes> */}
        {/* <Route path='/' element={<Login/>} /> */}
        <Navbar />
        <Home />
        <Footer />
        
      {/* </Routes>
    </BrowserRouter> */}
  </React.StrictMode>
);
