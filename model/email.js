import nodemailer from 'nodemailer';

class EmailTest {
  constructor() {
      
    this.transporter = nodemailer.createTransport({
      host: "smtp-mail.outlook.com",
      secureConnection: false,
      port: 587,
      tls:{
          ciphers: "SSLv3"
      },
      auth: {
          user: "adresse@mail.com",
          pass: "pass000"
      }
    });
  }

  async sendEmail(to, subject, text) {
    try {
      const info = await this.transporter.sendMail({
        from: "adresse@mail.com",
        to:to,
        subject: subject,
        text: text,
      });

      console.log('E-mail envoyé :', info.messageId);
      return info;
    } catch (error) {
      console.error('Erreur lors de l\'envoi de l\'e-mail :', error);
      throw error;
    }
  }
}

export default EmailTest;