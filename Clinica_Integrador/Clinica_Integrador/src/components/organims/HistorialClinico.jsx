import React, { useState, useEffect } from 'react';
import DatosHistorial from './DatosHitorial';
import { Link } from 'react-router-dom';
import logo from '../../assets/imagenes/dental1.png';
import ServerHandler from '../../utils/server_handler';
import { useNavigate } from 'react-router-dom';
import { showInfo } from '../../utils/alerts';
import DataTable from './Table';

const getHistoriales = async (e) => {
  
  const server = new ServerHandler('http://localhost:3000')
  const historiales = await server.getData('clinico/obtenerClinico/');
  console.log(historiales);
  if (historiales) {
    return historiales  
  }
}

  
    const redirectToPath = () => {
      const navigate = useNavigate();
     
      navigate('/ruta-destino');
    };

function HistorialClinico() {
  const [pacienteSeleccionado, setPacienteSeleccionado] = useState(null);
  const [historiales, setHistoriales] = useState([]);
  const [listaPacientes, setListaPacientes] = useState([]);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  
  useEffect(() => {
    getHistoriales().then(historiales => {
      setHistoriales(historiales);
    });
  }, []);

  const handlePacienteClick = (paciente) => {
    setPacienteSeleccionado(paciente);
    setMostrarFormulario(false);
  };

  const handleAgregarPaciente = () => {
    setMostrarFormulario(true);
    setPacienteSeleccionado(null);
  };

  const handleAgregarNuevoHistorial = async (nuevosDatos) => {
    try {
      const respuesta = await fetch('http://localhost:3000/clinico/obtenerClinico/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(nuevosDatos),
      });

      if (respuesta.ok) {
        const respuestaJson = await respuesta.json();
        console.log('Datos obtenidos exitosamente a la API:', respuestaJson);

     
        setListaPacientes([...listaPacientes, { id: respuestaJson.id, nombre: respuestaJson.nombreCompleto }]);

        setPacienteSeleccionado({ id: respuestaJson.id, nombre: respuestaJson.nombreCompleto });

        setMostrarFormulario(false);
      } else {
        console.error('Error al enviar datos a la API');
      }
    } catch (error) {
      console.error('Error al procesar la solicitud:', error);
    }
  };

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

      <main className="flex">
        <nav className="w-1/4 p-4 border-r border-gray-100">
          <ul>
            {historiales.map((paciente) => (
              <li
                key={paciente.id}
                className={`flex py-4 cursor-pointer hover:bg-stone-200${
                  pacienteSeleccionado && pacienteSeleccionado.id === paciente.id
                    ? 'bg-gray-200'
                    : ''
                }`}
                onClick={() => handlePacienteClick(paciente)}
              >
                <div className="h-10 w-10 rounded-full bg-cyan-950"></div>
                <div className="ml-3 overflow-hidden ">
                  <p className="text-sm font-medium text-slate-900">{paciente.nombre_completo}</p>
                  <p className="text-sm text-slate-500 truncate">{paciente.email}</p>
                  <p className="text-sm text-slate-500 truncate">{paciente.fecha}</p>
                </div>
              </li>
            ))}
            <li
              className="flex py-4 cursor-pointer hover:bg-stone-200"
              onClick={handleAgregarPaciente}
            >
              <div className="h-10 w-10 rounded-full bg-cyan-950"></div>
              <div className="ml-3 overflow-hidden">
                <p className="text-sm font-medium text-slate-900">Agregar Paciente</p>
              </div>
            </li>
          </ul>
        </nav>

        <div className="flex-1 p-4">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Historial Clinico</h2>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">RG Dental.</p>

          {mostrarFormulario ? (
            <DatosHistorial agregarNuevoHistorial={handleAgregarNuevoHistorial} />
          ) : pacienteSeleccionado ? (
            <DatosHistorial paciente={pacienteSeleccionado} />
          ) : (
            <div>
              <p>Selecciona un paciente o agrega uno nuevo.</p>
            </div>
          )}
        </div>
      </main>
      <Link
              className="mr-2 md:mr-5 text-xl font-bold text-black mn:text-xl  hover:bg-teal-600 rounded-xl"
              to="/Table"
            >
              Historial Clinico
            </Link>
    </>
  );
}

export default HistorialClinico;