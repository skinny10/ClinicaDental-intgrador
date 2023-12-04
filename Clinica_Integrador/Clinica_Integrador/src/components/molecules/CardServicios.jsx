import React from "react";

function CardServicios({ src, name, subtitle }) {
  return (
    <div className="flex flex-col items-center">
      <img  className="max-w-200px h-64 object-cover object-center rounded-lg" src={src} alt={name} />
      <h3 className="  text-xl font-bold text-black mn:text-xl">{name}</h3>
      <p >{subtitle}</p>
    </div>
  );
}

export default CardServicios;