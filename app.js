require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./database/config');
const app = express();
// Conexión a la base de datos
dbConnection();
// Middlewares
app.use(cors());
app.use(express.json());
//Rutas

app.use('/api/artist', require('./routes/artist.routes'));
app.use('/api/album', require('./routes/album.routes'));


app.get('/', (req, res) => {
    res.json({
        ok: true,
        msg: 'Servidor funcionando y conectado a la base de datos'
    });
});
app.listen(process.env.PORT, () => {
    console.log('El servidor está corriendo en el puerto: ' +
        process.env.PORT);
});
