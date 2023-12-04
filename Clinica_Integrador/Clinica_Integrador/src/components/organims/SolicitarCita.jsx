import React, { useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Title from '../atoms/Title';
import { Link } from 'react-router-dom';
import logo from '../../assets/imagenes/dental1.png';
import serverHandler from '../../utils/server_handler'


 function SolicitarCita() {
  const [nombrecompleto, setNombreCompleto] = useState('');
  const [numerotelefono, setNumeroTelefono] = useState('');
  const [motivo, setMotivo] = useState('');
  const [correocita, setCorrreoCita] = useState('');

  const MySwal = withReactContent(Swal);

  const handleNumeroTelefonoChange = (e) => {
    const inputValue = e.target.value.replace(/[^0-9]/g, '');
    setNumeroTelefono(inputValue);
  };

 
  const confirmarEnvioCita = async () => {
    const confirmacion = await MySwal.fire({
      title: '¿Estás seguro?',
      text: '¿Quieres enviar la cita?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sí, enviar',
      cancelButtonText: 'No, cancelar',
    });

    if (confirmacion.isConfirmed) {
      try {
        const message = { nombre: nombrecompleto, motivo: motivo, correocita: correocita };
        const server = new serverHandler('http://localhost:3000');
        const response = await server.postData('correo/enviar', message);
        console.log(response);

        // Aquí puedes agregar la lógica para confirmar la cita, si es necesario

        // Finalmente, puedes mostrar un mensaje de éxito
        MySwal.fire({
          title: 'Éxito',
          text: 'La cita ha sido enviada y confirmada correctamente.',
          icon: 'success',
        });
      } catch (error) {
        console.error('Error al enviar y confirmar la cita:', error);

        // Muestra un mensaje de error si algo sale mal
        MySwal.fire({
          title: 'Error',
          text: 'Hubo un error al enviar y confirmar la cita.',
          icon: 'error',
        });
      }
    }
  };

  const handleGuardarDatosCita = async () => {
    try {
     
      const datosCita = {
        nombre_completo: -nombrecompleto,
        telefono: numerotelefono,
        motivo_consulta: motivo,
        correo_cita: correocita
      };

      if (!nombrecompleto || !numerotelefono || !motivo || !correocita ) {
        MySwal.fire({
          title: "Error",
          text: "Por favor, completa todos los campos antes de registrarte.",
          icon: "error",
        });
        return;
      }
    
      
      const respuesta = await fetch('http://localhost:3000/cita/crearCita/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(datosCita),
      });

      if (respuesta.ok) {
      
        const pacienteCreado = await respuesta.json();
        console.log('Datos enviados exitosamente ', pacienteCreado);

       
        MySwal.fire({
          title: 'Éxito',
          text: 'Los datos han sido enviados exitosamente .',
          icon: 'success',
        });

      } else {
      
        console.error('Error al enviar datos ');

      
        MySwal.fire({
          title: 'Error',
          text: 'Hubo un error al enviar los datos .',
          icon: 'error',
        });
      }

      setNombreCompleto('');
      setNumeroTelefono('');
      setMotivo('');

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
            to='/inicioUsuarios'
          >
            <img src={logo} alt="" className="w-full" />
          </Link>

          <label
            htmlFor="menu"
            className="bg-open-menu w-6 h-5 bg-cover bg-center cursor-pointer peer-checked:bg-close-menu transition-all z-50 md:hidden"
          ></label>
        </nav>
      </header>

      <div className="">
        <div className="flex justify-center items-center">
          <Title msn="Solicitar Cita" />
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">

            <div>
              <label htmlFor="Nombrecompleto" className="block text-sm font-medium leading-6 text-gray-900">
                Nombre Completo
              </label>
              <div className="mt-2">
                <input
                  id="nombrecompleto"
                  name="nombrecompleto"
                  type="text"
                  value={nombrecompleto}
                  onChange={(e) => setNombreCompleto(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label htmlFor="numerotelefono" className="block text-sm font-medium leading-6 text-gray-900">
                Telefono
              </label>
              <div className="mt-2">
                <input
                  id="numerotelefono"
                  name="numerotelefono"
                  type="number"
                  value={numerotelefono}
                  onChange={handleNumeroTelefonoChange}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label htmlFor="Motivo" className="block text-sm font-medium leading-6 text-gray-900">
                Motivo de Consulta
              </label>
              <div className="mt-2">
                <input
                  id="motivo"
                  name="motivo"
                  type="text"
                  value={motivo}
                  onChange={(e) => setMotivo(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label htmlFor="Motivo" className="block text-sm font-medium leading-6 text-gray-900">
                correo para enviar cita
              </label>
              <div className="mt-2">
                <input
                  id="correocita"
                  name="correocita"
                  type="email"
                  value={correocita}
                  onChange={(e) => setCorrreoCita(e.target.value)}
                 required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <center>
            <button
              type="button"
              onClick={() => {
                confirmarEnvioCita(); 
                handleGuardarDatosCita();        
              }}
              className="bg-blue-500 text-white p-2 rounded-md w-[calc(400px)]"
              required
            >
              Enviar
            </button>
            </center>

            <div id='alert'> </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SolicitarCita;
