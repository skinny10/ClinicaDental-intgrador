import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Login from './components/organims/Login.jsx';
import RegistrationForm from './components/organims/RegistrationForm.jsx';
import HistorialClinico from './components/organims/HistorialClinico.jsx';
import HistorialPagos from './components/organims/HistorialPagos.jsx';
import InicioUsuarios from './components/Pages.jsx/InicioUsuarios.jsx';
import InicioDoctor from './components/Pages.jsx/InicioDoctor.jsx';
import SolicitarCita from './components/organims/SolicitarCita.jsx';
import Table from './components/organims/Table.jsx';
import VerCitas from './components/organims/VerCitas.jsx';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";





const router = createBrowserRouter([
  {
    path: "/",
    element: <App /> ,
  },
  {
    path:'/login',
    element: <Login/>
  },

  {
    path:"/registrar",
    element: <RegistrationForm/>
  },

  {
    path:"/historialclinico",
    element: <HistorialClinico/>
  },
  
  {
    path:"/historialpagos",
    element: <HistorialPagos/>
  },

  {
    path:"/inicioDoctor",
    element: <InicioDoctor/>
  },

  {
    path:"/inicioUsuarios",
    element: <InicioUsuarios/>
  },

  {
    path:"/cita",
    element: <SolicitarCita/>
  },

  {
    path:"/Table",
    element: <Table/>
  },

  {
    path:"/vercitas",
    element: <VerCitas/>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)