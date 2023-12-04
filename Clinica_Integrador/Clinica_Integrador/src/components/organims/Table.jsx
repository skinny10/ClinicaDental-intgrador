import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/imagenes/dental1.png';

const DataTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const requestOptions = {
          method: 'GET',
          redirect: 'follow',
        };

        const response = await fetch("http://localhost:3000/clinico/obtenerClinico/", requestOptions);

        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      
      }
    };

    fetchDataAsync();
  }, []); 

  return (
    <>
    <header>
        <nav className="h-20 wrapper items-center justify-between flex py-10 px-10">
          <Link
            className="w-1/3 max-w-[140px] md:py-10 px-2 md:px-10"
            to="/inicioDoctor"
          >
            <img src={logo} alt="" className="w-full" />
          </Link>

          <label
            htmlFor="menu"
            className="bg-open-menu w-6 h-5 bg-cover bg-center cursor-pointer peer-checked:bg-close-menu transition-all z-50 md:hidden"
          ></label>
        </nav>
      </header>
    
      <div>
            {data.map((item) => (
              <div key={item.id}>
                <h2 className="mr-2 md:mr-5 text-xl font-bold text-black mn:text-xl rounded-xl">HISTORIAL CLINICO</h2>
                <table className='custom-table'>
                  <thead>
                    <tr>
                     <th>ID</th>
            <th>Nombre Completo</th>
            <th>Edad</th>
            <th>Tipo de Sangre</th>
            <th>Estado Civil</th>
            <th>Correo Electronico</th>
            <th>Numero de Telefono</th>
            <th>Generales</th>
            <th>Fisiologicos</th>
            <th>Inmunologicos</th>
            <th>Patologicos</th>
            <th>Familiares</th>
            <th>EspecificacionAntecedentes</th>
            <th>Fecha</th>
            <th>Hora de Atencion</th>
            <th>Motivo</th>
            <th>Tipo de Enfermedad</th>
            <th>SintomasPrincipales</th>
            <th>EstadoGeneral</th>
            <th>peso</th>
            <th>talla</th>
            <th>Examen Extraoral</th>
            <th>Examen Intraoral</th> 
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{item.id}</td>
                      <td>{item.nombre_completo}</td>
                      <td>{item.edad}</td>
                      <td>{item.tipo_sangre}</td>
                      <td>{item.estado_civil}</td>
                      <td>{item.email}</td>
                      <td>{item.numeroTelefono}</td>
                      <td>{item.Generales}</td>
                      <td>{item.fisiologicos}</td>
                      <td>{item.inmunologicos}</td>
                      <td>{item.patologicos}</td>
                      <td>{item.familiares}</td>
                      <td>{item.EspecificacionAntecedentes}</td>
                      <td>{item.fecha}</td>
                      <td>{item.HoradeAtencion}</td>
                      <td>{item.motivo}</td>
                      <td>{item.TipoEnfermedad}</td>
                      <td>{item.SintomasPrincipales}</td>
                      <td>{item.EstadoGeneral}</td>
                      <td>{item.peso}</td>
                      <td>{item.talla}</td>
                      <td>{item.ExamenExtraoral}</td>
                      <td>{item.ExamenIntraoral}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ))}
          </div>
          
    </>
     
           
  );
};

export default DataTable;