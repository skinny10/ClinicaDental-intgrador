import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import TextAtom from "../atoms/TextAtom";

const Footer = () => {
  return (
    <footer className="bg-sky-950 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">

        <nav>
        <div className="text-left underline decoration-sky-500">
        <TextAtom  text="Ubicacion" />
        </div>
   <TextAtom text="Calle Margarita n136 colonia potinaspak entre prolongacion 5ta poniente y calle sause" />
        <div className="text-left underline decoration-sky-500">
   <TextAtom  text="Telefono" /> 
        </div>
        <TextAtom  text="9612715310" />
        </nav>
     
         
         
          
           
        <div className="text-right">
          <a href="https://www.facebook.com/Rg.dentall" className="text-gray-300 hover:text-white mx-2">
            <FaFacebook />
          </a>
          
          <a href="https://www.instagram.com/rg.dentall/" className="text-gray-300 hover:text-white mx-2">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
