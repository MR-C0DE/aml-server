import nodemailer from 'nodemailer';

class EmailSender {
  constructor() {
      
    this.transporter = nodemailer.createTransport({
      service: process.env.EMAIL_SENDER_SERVICE, 
      auth: {
        user: process.env.EMAIL_SENDER_FROM,
        pass: process.env.EMAIL_SENDER_PASS,
      },
    });
  }

  async sendEmail(to, subject, text) {
    try {
      const info = await this.transporter.sendMail({
        from: process.env.EMAIL_SENDER_FROM,
        to,
        subject,
        text,
      });

      console.log('E-mail envoyé :', info.messageId);
      return info;
    } catch (error) {
      console.error('Erreur lors de l\'envoi de l\'e-mail :', error);
      throw error;
    }
  }
}

export default EmailSender;
