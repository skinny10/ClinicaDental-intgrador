import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Link } from "react-router-dom";
import logo from '../../assets/imagenes/dental1.png';

function VerCitas() {
    const location = useLocation();
    const user = location.state;
    const [citas, setCitas] = useState([]);
  
    useEffect(() => {
      const obtenerCitas = async () => {
        try {
          const respuesta = await fetch("http://localhost:3000/cita/obtenerCita/:id");
          if (!respuesta.ok) {
            throw new Error('Error al obtener las citas');
          }
  
          const citasData = await respuesta.json();
          setCitas(citasData);
        } catch (error) {
          console.error('Error al obtener las citas:', error.message);
        }
      };
  
      obtenerCitas();
    }, []); 
    ////////
    const eliminarCita = async (id) => {
      const confirmacion = await Swal.fire({
        title: '¿Estás seguro?',
        text: 'Esta acción no se puede revertir',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, borrarlo',
        cancelButtonText: 'Cancelar',
      });
  
      if (confirmacion.isConfirmed) {
        try {
          const respuesta = await fetch(`http://localhost:3000/cita/borrarCita/${id}`, {
            method: 'DELETE',
          });
  
          if (!respuesta.ok) {
            throw new Error('Error al eliminar la cita');
          }
  
  
          const citasActualizadas = citas.filter(cita => cita.id !== id);
          setCitas(citasActualizadas);
  

          Swal.fire('Eliminado', 'La cita ha sido eliminada correctamente', 'success');
        } catch (error) {
          console.error('Error al eliminar la cita:', error.message);

          Swal.fire('Error', 'Hubo un problema al eliminar la cita', 'error');
        }
      }
    };
    return(
        <>
        <main>
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

        <nav className="custom-table-container">
        <h2 className="mr-2 md:mr-5 text-xl font-bold text-black mn:text-xl rounded-xl">Citas Registradas</h2>
        <table className="custom-table" >
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Teléfono</th>
              <th>Motivo</th>
              <th>Correo</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {citas.map((cita, index) => (
              <tr key={index}>
                <td>{cita.nombre_completo}</td>
                <td>{cita.telefono}</td>
                <td>{cita.motivo_consulta}</td>
                <td>{cita.correo_cita}</td>
                <td> <button onClick={() => eliminarCita(cita.id)}>Eliminar</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </nav>
        </main>

        </>
    )
}

export default VerCitas