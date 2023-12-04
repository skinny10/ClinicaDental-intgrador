
import React, { useState } from 'react';
import AtomicInput from '../molecules/AtomicInput';
import ServerHandler from '../../utils/server_handler';
import { showInfo } from '../../utils/alerts';

function DatosHistorial() {
  const [nombre_completo, setnombre_completo] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [sexo, setSexo] = useState('');
  const [edad, setEdad] = useState('');
  const [email, setemail] = useState('');
  const [numeroTelefono, setNumeroTelefono] = useState('');
  const [estado_civil, setestado_civil] = useState('');
  const [tipo_sangre, settipo_sangre] = useState('');
  const [Generales, setGenerales] = useState('');
  const [fisiologicos, setFisiologicos] = useState('');
  const [inmunologicos, setInmunologicos] = useState('');
  const [patologicos, setPatologicos] = useState('');
  const [familiares, setFamiliares] = useState('');
  const [EspecificacionAntecedentes, setEspecificacionAntecedentes] = useState('');
  const [fecha, setFecha] = useState('');
  const [HoradeAtencion, setHoradeAtencion] = useState('');
  const [motivo, setMotivo] = useState('');
  const [TipodeEnfermedad, setTipodeEnfermedad] = useState('');
  const [SintomasPrincipales, setSintomasPrincipales] = useState('');
  const [EstadoGeneral, setEstadoGeneral] = useState('');
  const [peso, setPeso] = useState('');
  const [talla, setTalla] = useState('');
  const [ExamenExtraoral, setExamenExtraoral] = useState('');
  const [ExamenIntraoral, setExamenIntraoral] = useState('');

  const guardarDatosHistorial = async (e) => {
    e.preventDefault();

    try {
      const datos = {
        nombre_completo,
        apellidos,
        sexo,
        edad,
        tipo_sangre,
        estado_civil,
        email,
        numeroTelefono,

        Generales,
        fisiologicos,
        inmunologicos,
        patologicos,
        familiares,     
        EspecificacionAntecedentes,

        fecha,
        HoradeAtencion,
        motivo,
        TipodeEnfermedad,
        SintomasPrincipales,

        EstadoGeneral,
        peso,
        talla,

        ExamenExtraoral,
        ExamenIntraoral,
      };

      const server = new ServerHandler('http://localhost:3000')
      const historiales = await server.getData('clinico/obtenerClinico/', datos);
      if (historiales) {
        showInfo(
          ""
      )}

      const response = await server.postData('clinico/crearClinico/', datos);
      if (response) {
        showInfo("Exito", "Historial Registrado")
        setnombre_completo('');
        setApellidos('');
        setSexo('');
        setEdad('');
        setestado_civil('');
        setemail('');
        setNumeroTelefono('');
        settipo_sangre('');
        
        setGenerales('');
        setFisiologicos('');
        setInmunologicos('');
        setPatologicos('');
        setFamiliares('');
        setEspecificacionAntecedentes('');

        setFecha('');
        setHoradeAtencion('');
        setMotivo('');
        setTipodeEnfermedad('');
        setSintomasPrincipales('');

        setEstadoGeneral('');
        setPeso('');
        setTalla('');

        setExamenExtraoral('');
        setExamenIntraoral('');
      }else{
        showInfo("Error", "No se registró el historial")
      }

      // if (historiales) {
      //   const historialesJson = await historiales.json();
      //   console.log('Datos obtenidos exitosamente a la API:', historialesJson);
      // } else {
      //   console.error('Error al recibir datos a la API');
      // }
    } catch (error) {
      console.error('Error al procesar la solicitud:', error);
    }
  };

  return (

    <form onSubmit={guardarDatosHistorial} className="space-y-6" action="#" method="POST">

 <div className='flex'>

 <div className="mb-4 mr-5">
  <AtomicInput
  label="Nombre Completo"  htmlFor="nombre_completo"
  id="nombre_completo"
  type="text"
  value={nombre_completo}
  onChange={(e) => setnombre_completo(e.target.value)}
  required
  /> 
 </div>

<div className="mb-4 mr-5">
  <AtomicInput
  label="apellidos"  htmlFor="apellidos"
  id="apellidos"
  type="text"
  value={apellidos}
  onChange={(e) => setApellidos(e.target.value)}
  required
  /> 
</div>

<div className='mb-4 mr-5'>
  <AtomicInput
  label="Sexo" htmlFor="sexo"
  id="sexo"
  type="text"
  value={sexo}
  onChange={(e) => setSexo(e.target.value)}
  required
  />
</div>

<div className='mb-4 mr-5 '>

  <label htmlFor="Edad"
  >Edad</label>
<input  id="edad"
  type={"number"}
  value={edad}
  onChange={(e) => setEdad(e.target.value)}
  required
  className="mt-1 p-2 border border-gray-300 rounded-md w-[calc(225px)]"
  />
</div>

<div className="mb-4 mr-5">
  <label htmlFor="tipo_sangre">Tipo de Sangre</label>
  <select 
    id="tipo_sangre" 
    value={tipo_sangre} 
    onChange={(e) => settipo_sangre(e.target.value)} 
    required
  >
    <option value="">Selecciona un tipo de sangre</option>
    <option value="A+">A+</option>
    <option value="A-">A-</option>
    <option value="B+">B+</option>
    <option value="B-">B-</option>
    <option value="AB+">AB+</option>
    <option value="AB-">AB-</option>
    <option value="O+">O+</option>
    <option value="O-">O-</option>
  </select>
</div>

</div>

<div className='flex'>

      
  <div className="mb-4 mr-5">
  <AtomicInput
  label="Estado Civil" htmlFor="estado_civil"
  id="estado_civil"
  type="text"
  value={estado_civil}
  onChange={(e) => setestado_civil(e.target.value)}
  required
  />
  </div>

<div className="mb-4 mr-5">
<AtomicInput
  label="Email" htmlFor="email"
  id="email"
  type={"email"}
  value={email}
  onChange={(e) => setemail(e.target.value)}
  required
  />
  </div>

<div className="mb-4 mr-5">
<AtomicInput
  label="Telefono" htmlFor="numeroTelefono"
  id="numeroTelefono"
  type="number"
  value={numeroTelefono}
  onChange={(e) => setNumeroTelefono(e.target.value)}
  required
  />
  </div>
</div>

{/* //Antecedentes */}
<div className="px-4 sm:px-0">
<h3 className="text-base text-center font-semibold leading-7 text-gray-900">ANTECEDENTES</h3>
</div>


    <div className='flex'>

  <div className="mb-4 mr-5">
  <AtomicInput
  label="Generales" htmlFor="Generales"
  id="generales"
  type="text"
  value={Generales}
  onChange={(e) => setGenerales(e.target.value)}
  required
  />
  </div>

  <div className="mb-4 mr-5">
  <AtomicInput
  label="Fisiologicos" htmlFor="Fisiologicos"
  id="fisiologicos"
  type="text"
  value={fisiologicos}
  onChange={(e) => setFisiologicos(e.target.value)}
  required
  />
  </div>

  <div className="mb-4 mr-5">
  <AtomicInput
  label="Inmunologicos" htmlFor="Inmunologicos"
  id="inmunologicos"
  type="text"
  value={inmunologicos}
  onChange={(e) => setInmunologicos(e.target.value)}
  required
  />
  </div>

  <div className="mb-4 mr-5">
  <AtomicInput
  label="Patologicos" htmlFor="Patologicos"
  id="patologicos"
  type="text"
  value={patologicos}
  onChange={(e) => setPatologicos(e.target.value)}
  required
  />
  </div>
    </div>

    
    <div className='flex'>

      
  <div className="mb-4 mr-5">
  <AtomicInput
  label="Familiares" htmlFor="Familiares"
  id="familiares"
  type="text"
  value={familiares}
  onChange={(e) => setFamiliares(e.target.value)}
  required
  />
  </div>

<div className="mb-4 mr-5">
  <AtomicInput
  label="Especificacion de Antecedentes" htmlFor="EspecificacionAntecedentes"
  id="EspecificacionAntecedentes"
  type="text"
  value={EspecificacionAntecedentes}
  onChange={(e) => setEspecificacionAntecedentes(e.target.value)}
  required
  />
  </div>

    </div>


{/* ENFERMEDAD ACTUAL */}
    <div className="px-4 sm:px-0">
<h3 className="text-base text-center font-semibold leading-7 text-gray-900">ENFERMEDAD ACTUAL</h3>
</div>

 <div className='flex'>

 <div className="mb-4 mr-5">
  <AtomicInput
  label="Fecha" htmlFor="Fecha"
  id="fecha"
  type={"date"}
  value={fecha}
  onChange={(e) => setFecha(e.target.value)}
  required
  />
  </div>

  <div className="mb-4 mr-5">
  <AtomicInput
  label="Hora de Atencion" htmlFor="HoradeAtencion"
  id="HoradeAtencion"
  type={"number"}
  value={HoradeAtencion}
  onChange={(e) => setHoradeAtencion(e.target.value)}
  required
  />
  </div>

  <div className="mb-4 mr-5">
  <AtomicInput
  label="Motivo" htmlFor="Motivo"
  id="motivo"
  type="text"
  value={motivo}
  onChange={(e) => setMotivo(e.target.value)}
  required
  />
  </div>

  <div className="mb-4 mr-5">
  <AtomicInput
  label="Tipo de Enfermedad" htmlFor="TipodeEnfermedad"
  id="TipodeEnfermedad"
  type="text"
  value={TipodeEnfermedad}
  onChange={(e) => setTipodeEnfermedad(e.target.value)}

  required
  />
  </div>
    
</div>

<div className='flex'>

<div className="mb-4 mr-5">
  <AtomicInput
  label="Sintomas Principales" htmlFor="SintomasPrincipales"
  id="SintomasPrincipales"
  type="text"
  value={SintomasPrincipales}
  onChange={(e) => setSintomasPrincipales(e.target.value)}
  required
  />
  </div>  
</div>

{/* EXAMEN CLINICO */}
<div className="px-4 sm:px-0">
<h3 className="text-base text-center font-semibold leading-7 text-gray-900">EXAMEN CLINICO</h3>
</div>

<div className='flex'>
<div className="mb-4 mr-5">
  <AtomicInput
  label="Estado General" htmlFor="EstadoGeneral"
  id="EstadoGeneral"
  type="text"
  value={EstadoGeneral}
  onChange={(e) => setEstadoGeneral(e.target.value)}
  required
  />
  </div>     

  <div className="mb-4 mr-5">
  <AtomicInput
  label="Peso" htmlFor="Peso"
  id="peso"
  type={"number"}
  value={peso}
  onChange={(e) => setPeso(e.target.value)}
  required
  />
  </div>    

  <div className="mb-4 mr-5">
  <AtomicInput
  label="Talla" htmlFor="Talla"
  id="talla"
  type="text"
  value={talla}
  onChange={(e) => setTalla(e.target.value)}
  required
  />
  </div>    

</div>

{/* Evaluacion Odontologica */}
<div className="px-4 sm:px-0">
<h3 className="text-base text-center font-semibold leading-7 text-gray-900">Evaluacion Odontologica  </h3>
</div>

<div className='flex'>

<div className="mb-4 mr-5">
  <AtomicInput
  label="Examen Extraoral" htmlFor="ExamenExtraoral"
  id="ExamenExtraoral"
  type="text"
  value={ExamenExtraoral}
  onChange={(e) => setExamenExtraoral(e.target.value)}
  required
  />
  </div>      

  <div className="mb-4 mr-5">
  <AtomicInput
  label="Examen Intraoral" htmlFor="ExamenIntraoral"
  id="ExamenIntraoral"
  type="text"
  value={ExamenIntraoral}
  onChange={(e) => setExamenIntraoral(e.target.value)}
  required
  />
  </div> 
</div>

<center> 
      <button type="submit" className="bg-blue-500 text-white p-2 rounded-md w-[calc(400px)]">
        Guardar Datos 
      </button>
</center>
    </form>
    
  );
}

export default DatosHistorial;
