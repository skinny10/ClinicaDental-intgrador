const express = require('express');
const router = express.Router();
const EmailSender = require('../config/mail');


router.post('/enviar', async (req, res) => {
    const message = req.body;
    const emailSender = new EmailSender();
    emailSender.enviarCorreo(message.correocita, 'ramosmolina04@gmail.com', message.nombre, message.motivo);
    res.json({message: 'Correo Enviado'});
});


module.exports = router