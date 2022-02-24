const express = require('express');
const { google } = require('googleapis');
const cors = require('cors');
const nodemailer = require('nodemailer');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.get('/', cors(), async (req, res) => {
  res.send('working');
})

app.post('/contacto', async (req, res) => {
  const {name, brand, model, service} = req.body;

  const auth = new google.auth.GoogleAuth({
    keyFile: "credentials.json",
    scopes: "https://www.googleapis.com/auth/spreadsheets"
  });

  const client = await auth.getClient();
  const googleSheets = google.sheets({version: 'v4', auth: client})
  const spreadsheetId = "1y6FtSW2aU4gYLs2ZkirI85ydZUWd4guHU4EYHxDCFGM";

  await googleSheets.spreadsheets.values.append({
    auth,
    spreadsheetId,
    range: "Contacto!A:D",
    valueInputOption: "RAW",
    resource: {
      values: [
        [name, brand, model, service]
      ]
    }
  });

  const trasporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'ttesttfeb22@gmail.com',
      pass: 'test1test2@'
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  let mailOptions = {
    from: 'ttesttfeb22@gmail.com',
    to: 'jobs@talentscode.com',
    subject: `Nuevo contacto - ${name}`,
    text: `Tienes un nuevo contacto.
    Cliente: ${name}
    Intereado en Despachador:
    Marca: ${brand}
    Modelo: ${model}
    para ${service}
  Comunicate lo antes posible!
  
  Consulta tu tabla de clientes:
  https://docs.google.com/spreadsheets/d/1c9K4YLcJlqwi8HF6U09_GSRROXqPFDzx9ab1UVCcIlo/edit?usp=sharing
  `
  }

  trasporter.sendMail(mailOptions, (err, success) => {
    if (err){
      console.log(err);
    } else {
      console.log('Your email has been send')
    }
  })

})

app.listen(5000, (req, res) => {console.log('server started on port 5000')});