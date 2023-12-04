import React from "react";

function CarfMolecule({iamges}) {
  return (
    <>
      <div>
        <img
          alt="Politics Story Image"
          className="w-full h-64 object-cover object-center rounded-lg"
          height="400"
          src={iamges}
          width="600"
        />
        

      </div>
    </>
  );
}

export default CarfMolecule;
