const mongoose = require('mongoose')
require('dotenv').config();
const db = mongoose
    .connect(process.env.MONGODB_URI,{  // MONGODB_URI variable contieneurl de mongo atlas  en el archivo que se tiene que crear .env
        useNewUrlParser: true, 
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('DB connected')
    })
    .catch((err) => {
        console.log(err)
    });
    //db.on('error', (error) => console.error(error));
    //db.once('open', () => console.log('Conectado a BB.DD'));

module.exports = db;