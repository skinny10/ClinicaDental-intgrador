import React from "react";
import logo from '../../assets/imagenes/dental1.png'
import { Link } from "react-router-dom";
import { Link as ScrollLink } from 'react-scroll';

function Header() {
  return (
    <header>
      <nav className=" h-20 wrapper items-center justify-between flex py-4 md:py-10 px-4 md:px-10">
        <Link 
          className="w-1/3 max-w-[140px] md:py-10 px-2 md:px-10"
          to='/'
        >
          <img src={logo} alt="" className="w-full" />
        </Link>

        <div className="fixed inset-0 bg-gradient-to-b from-white/70 to-black/70 translate-x-full peer-checked:translate-x-0 transition-transform md:static md:translate-x-0 md:bg-none md:flex items-center">

          <Link 
            className="mr-2 md:mr-5 text-xl font-bold text-black mn:text-xl hover:bg-teal-600 rounded-xl"
            to='/login'
          >
            Solicitar cita
          </Link>

          <ScrollLink 
            to="pacientes" 
            smooth={true} 
            duration={500} 
            className="mr-2 md:mr-5 text-xl font-bold text-black mn:text-xl hover:bg-teal-600 rounded-xl cursor-pointer"
          >
            Pacientes
          </ScrollLink>

          <ScrollLink 
            to="servicios" 
            smooth={true} 
            duration={500} 
            className="mr-2 md:mr-5 text-xl font-bold text-black mn:text-xl hover:bg-teal-600 rounded-xl cursor-pointer"
          >
            Servicios
          </ScrollLink>
        </div>
      </nav>
    </header>
  );
}

export default Header;
