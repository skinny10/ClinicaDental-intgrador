

const nodemailer = require('nodemailer');

class EmailSender {
  constructor() {
   
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'ramosmolina04@gmail.com',
        pass: 'nrnk ploq jtjm bwxu', 
      },
    });
  }

  async enviarCorreo(from, destinatario, asunto, cuerpo) {

    const mailOptions = {
      from: from,
      to: destinatario,
      subject: asunto,
      text: cuerpo,
    };

    try {
  
      const info = await this.transporter.sendMail(mailOptions);
      console.log('Correo enviado:', info);
    } catch (error) {
      console.error('Error al enviar el correo:', error);
    }
  }
}

module.exports = EmailSender;
