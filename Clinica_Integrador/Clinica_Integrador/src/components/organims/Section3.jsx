import React from "react";
import CarfMolecule from "../molecules/CarfMolecule";
import doctor2 from '../../assets/imagenes/doctor2.jpeg'
import doctor3 from '../../assets/imagenes/doctor3.jpeg'
import doctor4 from '../../assets/imagenes/paciente4.jpeg'
import insta from '../../assets/imagenes/paciente3.jpeg'
import insta1 from '../../assets/imagenes/paciente2.jpeg'
import insta2 from '../../assets/imagenes/paciente1.jpeg'
import Title from "../atoms/Title";

function Section3() {
  return (
    <>
      <section id="pacientes" className="screen grid gap-6 mb-8 ">
        <div className="flex justify-center items-center">
            <Title msn="Pacientes" />
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-6">
            <CarfMolecule iamges={doctor2}/>
            <CarfMolecule iamges={doctor3}/>
            <CarfMolecule iamges={doctor4}/>
            <CarfMolecule iamges={insta}/>
            <CarfMolecule iamges={insta1}/>
            <CarfMolecule iamges={insta2}/>
  
        </div>
      </section>
    </>
  );
}

export default Section3;
