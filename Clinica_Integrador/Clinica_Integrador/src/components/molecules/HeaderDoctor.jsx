import React from "react";
import logo from '../../assets/imagenes/dental1.png'
import { Link } from "react-router-dom";

function HeaderDoctor() {
  return (
    <header>
      <nav className=" h-20 wrapper items-center justify-between flex py-10 px-10">
        <a href="./" className=" w-1/3 max-w-[140px] py-10 px-10">
          <img src={logo} alt="" className="w-full" />
        </a>

        <label
          htmlFor="menu"
          className=" bg-open-menu w-6 h-5 bg-cover bg-center cursor-pointer peer-checked:bg-close-menu transition-all z-50 md:hidden"
        ></label>

        <div className="fixed inset-0 bg-gradient-to-b from-white/70 to-black/70 translate-x-full peer-checked:translate-x-0 transition-transform md:static md:translate-x-0 md:bg-none">
        <Link 
            className="mr-2 md:mr-5 text-xl font-bold text-black mn:text-xl  hover:bg-teal-600 rounded-xl"
            to='/historialclinico'
          >
            Historial Clinico
          </Link>

          <Link 
            className="mr-2 md:mr-5 text-xl font-bold text-black mn:text-xl  hover:bg-teal-600 rounded-xl"
            to='/historialpagos'
          >
            Registro de Pagos
          </Link>


        </div>

       
      </nav>
    </header>
  );
}

export default HeaderDoctor;