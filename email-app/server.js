// server.js

const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = process.env.PORT || 3001;
const cors = require('cors');

const corsOptions = {
  origin: '*', // Change this to your frontend's actual origin in production
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.post('/send-email', async (req, res) => {
  try {
    const { email, firstName, lastName, subject } = req.body;

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      // Configure your email provider here
    });

    // Send the email
    await transporter.sendMail({
      from: 'your@email.com',
      to: 'recipient@email.com',
      subject: subject,
      text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nMessage: ${subject}`,
    });

    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.use(cors());


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
