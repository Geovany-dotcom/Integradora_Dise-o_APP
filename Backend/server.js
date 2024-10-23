const express = require('express');
const cors = require('cors'); // Importar CORS

const app = express();
const port = 3000;

// Habilitar CORS para todas las solicitudes
app.use(cors());

// Middleware para parsear JSON
app.use(express.json());

// Rutas
const autenticacionRoutes = require('./routes/autenticacion');
app.use('/autenticacion', autenticacionRoutes);

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
