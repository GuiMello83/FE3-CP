import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { createBrowserRouter, RouterProvider, redirect } from "react-router-dom";
import "./index.css";

import App from './App'
import Home from "./Routes/Home";
import Login from "./Routes/Login";
import Detail from "./Routes/Detail";
import { ThemeProvider } from './hooks/useTheme';
import { TokenProvider } from './hooks/Context/useToken';


const root = ReactDOM.createRoot(document.getElementById("root"));
//Lembre-se de configurar suas rotas e seu contexto aqui
const route = createBrowserRouter([
  {
    path: '',
    element: <App />,
    children: [
      { path: '*', loader: () => redirect('/home') },
      { path: '', element: <Home /> },
      { path: 'home', element: <Home /> },
      { path: 'login', element: <Login /> },
      { path: 'Detail/:matricula', element: <Detail /> },
    ],
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
    <TokenProvider>
    <ThemeProvider>
    <RouterProvider router = {route} />
    </ThemeProvider>
    </TokenProvider>
  </React.StrictMode>
);
