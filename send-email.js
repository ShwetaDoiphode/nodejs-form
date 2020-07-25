//import { Contact } from './contact.cs';

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'kpradeep.7137@gmail.com',
    pass: 'Bubby.7137'
  }
});

var mailOptions = {
  from: 'kpradeep.7137@gmail.com',
  to: 'galib.raza2010@gmail.com, kpradeep.7137@gmail.com',
  subject: 'Sending Email using Node.js',
  text: `Hi `,
 html: '<h1>Hi nodejs</h1><p>Your Messsage</p>'        
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
