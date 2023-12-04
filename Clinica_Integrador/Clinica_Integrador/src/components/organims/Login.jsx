import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import serverHandler from '../../utils/server_handler'


var USER_DOCTOR = {'email': 'dental.jrgg@gmail.com', 'password': '1'}

function identificar_usuario(data_usuario) {
  if (data_usuario.email === USER_DOCTOR.email && data_usuario.password === USER_DOCTOR.password) {
    return 'doctor';
  } else {
    return 'otro';
  }
}


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navegacion = useNavigate();

  const validar_usuario = async () => {
    const data_usuario = {
      email: email,
      password: password,
    };

    const tipoUsuario = identificar_usuario(data_usuario);

    if (tipoUsuario === 'doctor') {
        const data = {email: email, password: password};
        const server = new serverHandler('http://localhost:3000')
        const response = await server.getData('users/obtenerUser/')
        console.log(response);
      navegacion('/inicioDoctor');
    } else {
      navegacion('/cita')
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Construir el objeto de datos a enviar
    const data = {
      email: email,
      password: password,
    };

    try {
      const response = await fetch("http://localhost:3000/users/crearUser/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // La solicitud fue exitosa, puedes manejar la respuesta aquí
        const responseData = await response.json();
        console.log("Respuesta del servidor:", responseData);
      } else {
        // La solicitud falló, manejar el error
        console.error("Error en la solicitud al servidor");
      }
    } catch (error) {
      console.error("Error al realizar la solicitud:", error);
    }

    // Restablecer los campos después del envío del formulario
    setEmail("");
    setPassword("");
  };

  return (
    <>
     <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 
                        tracking-tight text-gray-900">
            Login
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Correo Electrónico
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 
                  rounded-md text-sm shadow-sm placeholder-slate-400
                  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                  invalid:border-pink-500 invalid:text-pink-600
                  focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                  placeholder="tucorreo@example.com"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium 
                                                     leading-6 text-gray-900">
                  Contraseña
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5
                             text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300
                             placeholder:text-gray-400 focus:ring-2 focus:ring-inset
                             focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button onClick={validar_usuario}>
                <Link
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold 
                leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 
                focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  to={"/cita"}>
                  Iniciar Sesión
                </Link>
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            No tienes cuenta?{' '}
            <Link 
            className="font-semibold leading-6 text-indigo-600
                                  hover:text-indigo-500" 
            to={"/registrar"}>Registrate</Link>
          </p>

        </div>
      </div>
    </>
  );
}

export default Login;
