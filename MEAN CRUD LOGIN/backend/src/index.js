const express = require('express');
const cors = require('cors'); 
const connectLocalDB = require('./config/mongoDBLocal');
const { PORT } = require('./config/properties');
connectLocalDB();

const app = express();

// MiddleWares
app.use(cors()) // cors origin requests, aceptar peticiones en el server
app.use(express.json()); // parse application/json
app.use(express.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded
 
app.use('/api', require('./routes/login.routes'));

app.listen(PORT, () => console.log(`Escuchando por el puerto ${PORT}`) );