import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { createBrowserRouter, RouterProvider, redirect } from "react-router-dom";
import "./index.css";

import Navbar from "./Components/Navbar/Navbar";
import Home from "./Routes/Home";
import Login from "./Routes/Login";
import Detail from "./Routes/Detail";
import Footer from "./Components/Footer/Footer";


const root = ReactDOM.createRoot(document.getElementById("root"));
//Lembre-se de configurar suas rotas e seu contexto aqui
const route = createBrowserRouter([
  {
    path: 'home',
    element: <Home />
  },  
  {
    path: 'login',
    element: <Login />
  },
  {
    path: 'detail',
    element: <Detail />
  }
  ,
  {
    path: "",
    loader: () => redirect("/home")
  }
])

root.render(
  <React.StrictMode>
    <Navbar />
    <RouterProvider router = {route} />
    <Footer />
  </React.StrictMode>
);
