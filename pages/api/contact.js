const nodemailer = require("nodemailer");

export default function handler(req, res) {
  const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.SMTP_MAIL,
        pass: process.env.SMTP_PASSWORD,
    },
  });

  contactEmail.verify((error) => {
      if (error) {
          console.log(error);
      } else {
          console.log("Ready to Send");
      }
  });

  const name = req.body.name;
  const email = req.body.email.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) ? req.body.email : null;
  const message = req.body.message; 
  const mail = {
    from: name,
    to: process.env.SMTP_MAIL,
    subject: "Contact Depuis Portfolio",
    html: `<p>Name: ${name}</p>
          <p>Email: ${email}</p>
          <p>Message: ${message}</p>`,
  };
  if(email != null){
    contactEmail.sendMail(mail, (error) => {
      if (error) {
        res.status(500).json({ status: "Un problème est survenu : " + error });
      } else {
        res.status(200).json({ status: 'Message envoyé !' })
      }
    });
  }else{
    res.status(500).json({ status: "L'email doit être valide" }); 
  }
}
