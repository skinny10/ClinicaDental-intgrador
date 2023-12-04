import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


function InicioDoctor() {
  /////
  return (
<div className="flex justify-center items-center h-screen">
      
      <div className="p-6 max-w-3xl mx-auto rounded-xl shadow-lg space-x-6 bg-slate-200	">
        <nav>
          <label
            htmlFor="menu"
            className=" bg-open-menu w-6 h-5 bg-cover bg-center cursor-pointer peer-checked:bg-close-menu transition-all z-50 md:hidden"
          ></label>

          <div className="fixed inset-0 bg-gradient-to-b from-white/70 to-black/70 translate-x-full peer-checked:translate-x-0 transition-transform md:static md:translate-x-0 md:bg-none">
           
          <Link
              className="mr-2 md:mr-5 text-xl font-bold text-black mn:text-xl  hover:bg-teal-600 rounded-xl"
              to="/VerCitas"
            >
             Ver Citas
            </Link>
           
            <Link
              className="mr-2 md:mr-5 text-xl font-bold text-black mn:text-xl  hover:bg-teal-600 rounded-xl"
              to="/historialclinico"
            >
              Historial Clinico
            </Link>

            <Link
              className="mr-2 md:mr-5 text-xl font-bold text-black mn:text-xl  hover:bg-teal-600 rounded-xl"
              to="/inicioUsuarios"
            >
              Inicio Usuarios
            </Link>
          </div>
        </nav>
      </div>

      
    </div>
  );
}

export default InicioDoctor;