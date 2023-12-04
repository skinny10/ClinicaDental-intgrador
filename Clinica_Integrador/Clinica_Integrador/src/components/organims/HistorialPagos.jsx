import React, { useState, useEffect } from 'react';
import AtomicInput from '../molecules/AtomicInput';
import { Link } from 'react-router-dom';
import logo from '../../assets/imagenes/dental1.png';

function HistorialPagos() {
  const [nombreCompleto, setNombreCompleto] = useState('');
  const [motivodeconsulta, setMotivoDeConsulta] = useState('');
  const [fecha, setFecha] = useState('');
  const [monto, setMonto] = useState('');
  const [historialPagos, setHistorialPagos] = useState([]);
  const [pacienteSeleccionado, setPacienteSeleccionado] = useState(null);

  useEffect(() => {
 
    fetch('http://localhost:3000/pago/obtenerPago/')
      .then((response) => response.json())
      .then((data) => setHistorialPagos(data))
      .catch((error) => console.error('Error al obtener el historial de pagos:', error));
  }, []);

  const guardarDatosHistorial = async (e) => {
    e.preventDefault();

    const nuevoPago = {
      nombreCompleto,
      motivodeconsulta,
      fecha,
      monto,
    };

    try {
  
      const response = await fetch('http://localhost:3000/pago/crearPago/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(nuevoPago),
      });

      if (response.ok) {
        const data = await response.json();
        setHistorialPagos([...historialPagos, data]);


        setNombreCompleto('');
        setMotivoDeConsulta('');
        setFecha('');
        setMonto('');
      } else {
        console.error('Error al guardar el pago:', response.statusText);
      }
    } catch (error) {
      console.error('Error al enviar la solicitud:', error);
    }
  };

  const pacientes = [
    { id: 1, nombre: 'Ricardo Gomez', correo: 'paciente1@example.com' },
    { id: 2, nombre: 'Lucia Fernanda', correo: 'paciente2@example.com' },
  ];

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
            {pacientes.map((paciente) => (
              <li
                key={paciente.id}
                className={`flex py-4 cursor-pointer hover:bg-stone-200${
                  pacienteSeleccionado && pacienteSeleccionado.id === paciente.id
                    ? 'bg-gray-200'
                    : ''
                }`}
                onClick={() => setPacienteSeleccionado(paciente)}
              >
                <div className="h-10 w-10 rounded-full bg-cyan-950"></div>
                <div className="ml-3 overflow-hidden">
                  <p className="text-sm font-medium text-slate-900">{paciente.nombre}</p>
                  <p className="text-sm text-slate-500 truncate">{paciente.correo}</p>
                </div>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex-1 p-4">
          <form
            onSubmit={guardarDatosHistorial}
            className="space-y-6"
            action="#"
            method="POST"
          >
            <div className="flex flex-col">
              <AtomicInput
                label="Nombre Completo"
                value={nombreCompleto}
                onChange={(e) => setNombreCompleto(e.target.value)}
              />
              <AtomicInput
                label="Motivo de Consulta"
                value={motivodeconsulta}
                onChange={(e) => setMotivoDeConsulta(e.target.value)}
              />
              <AtomicInput
                label="Fecha"
                value={fecha}
                onChange={(e) => setFecha(e.target.value)}
              />
              <AtomicInput
                label="Monto"
                value={monto}
                onChange={(e) => setMonto(e.target.value)}
              />

              <div className="flex">
                <center>
                  <button
                    type="submit"
                    className="bg-blue-500 text-white p-2 rounded-md w-[calc(225px)] mt-4 mr-2"
                  >
                    Guardar Datos
                  </button>
                </center>
              </div>
            </div>
          </form>

        
          <div>
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Historial de Pagos Guardados
            </h2>
            <ul>
              {historialPagos.map((pago, index) => (
                <li key={index} className="mb-2">
                  <strong>Nombre Completo:</strong> {pago.nombreCompleto},{' '}
                  <strong>Motivo de Consulta:</strong> {pago.motivodeconsulta},{' '}
                  <strong>Fecha:</strong> {pago.fecha}, <strong>Monto:</strong> {pago.monto}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}

export default HistorialPagos;
