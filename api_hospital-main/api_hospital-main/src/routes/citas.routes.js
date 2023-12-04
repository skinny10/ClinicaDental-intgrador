const express = require('express');
const router = express.Router();
const controlador = require('../controllers/citas.controller');

router.get('/obtenerCita/', async (req, res) => {
  const carrera = await controlador.obtenerCita();
  res.json(carrera);
});

router.get('/obtenerCita/:id', async (req, res) => {
  const carreraId = req.params.id;
  const carrera = await controlador.obtenerCitaPorid(carreraId);

  if (carrera) {
    res.json(carrera);
  } else {
    res.status(404).json({ message: 'Cita no encontrado' });
  }
});

router.post('/crearCita/', async (req, res) => {
  console.log("entro crear cita");
  const user = req.body;
  await controlador.crearCita(user);
  res.json({message: 'Cita creado'});
}); 

router.put('/actualizarCita/:id', async (req, res) => {
  const user = req.body;
  await controlador.actualizarCita(req.params.id, user);
  res.json({ message: 'Cita actualizado' });
});


router.delete('/borrarCita/:id', async (req, res) => {
  await controlador.borrarCita(req.params.id);
  res.json({ message: 'Cita borrado' });
});

router.put('/confirmarCita/:id', async (req, res) => {
  const citaId = req.params.id;

  try {
    // Lógica para confirmar la cita en el controlador
    await controlador.confirmarCita(citaId);

    // Responder con éxito
    res.json({ message: 'Cita confirmada' });
  } catch (error) {
    console.error('Error al confirmar la cita:', error);
    res.status(500).json({ error: 'Error al confirmar la cita' });
  }
});

module.exports = router;