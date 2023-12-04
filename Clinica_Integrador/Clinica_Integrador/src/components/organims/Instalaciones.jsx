import React from "react";
import CarfMolecule from "../molecules/CarfMolecule";
import Instalacion1 from '../../assets/imagenes/Instalacion1.jpeg'
import Instalacion2 from '../../assets/imagenes/Instalacion2.jpeg'
import Instalacion3 from '../../assets/imagenes/Instalacion3.jpeg'
import Title from "../atoms/Title";

function Instalaciones() {
  return (
    <>
      <section className="screen grid gap-6 mb-8">
        <div className="flex justify-center items-center">
            <Title msn="Instalaciones" />
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-6">
            <CarfMolecule iamges={Instalacion1}/>
            <CarfMolecule iamges={Instalacion2}/>
            <CarfMolecule iamges={Instalacion3}/>
        </div>
      </section>
    </>
  );
}

export default Instalaciones;
