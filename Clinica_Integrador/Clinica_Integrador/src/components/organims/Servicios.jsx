import React from "react";
import CardServicios from "../molecules/CardServicios";
import Title from "../atoms/Title";

import icono1 from "../../assets/imagenes/icono1.jpg"
import icono2 from "../../assets/imagenes/icono2.jpg"
import icono3 from "../../assets/imagenes/icono3.jpg"
import icono4 from "../../assets/imagenes/icono4.jpg"
import icono5 from "../../assets/imagenes/icono5.jpg"
import icono6 from "../../assets/imagenes/icono6.jpg"

function Servicios() {
  return (
    <section id="servicios" className="referentes">
         <div className="flex justify-center items-center">
            <Title msn="Servicios" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-[#000]">
      <CardServicios src={icono1} name="Protesis" subtitle=""  />
      <CardServicios src={icono2} name="Ortodoncia" subtitle="" />
      <CardServicios src={icono3} name="limpieza dental" subtitle="" />
      <CardServicios src={icono4} name="Amalgamas" subtitle="" />
      <CardServicios src={icono5} name="Resinas" subtitle="" />
      <CardServicios src={icono6} name="Extracciones" subtitle="" />
        </div>
    </section>
  );
}

export default Servicios;
