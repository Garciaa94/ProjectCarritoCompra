const mongoose = require('mongoose')
require('dotenv').config();
const db = mongoose
    .connect(process.env.MONGODB_URI,{  // MONGODB_URI variable contieneurl de mongo atlas  en el archivo que se tiene que crear .env
        useNewUrlParser: true, 
        useUnifiedTopology: true
    })
    .then(() => {
        const db = mongoose.connection; // boorrar
        console.log('DB connected')
    })
    .catch((err) => {
        console.log(err)
    });

module.exports = db;