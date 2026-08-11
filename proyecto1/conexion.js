require('dotenv').config();
const mongoose = require('mongoose');

async function conectarBD() {
  try {
    // Lee la URL de la base de datos desde el archivo .env
    const mongoURI = process.env.MONGO_URI;

    if (!mongoURI) {
      throw new Error('No se encontró la variable MONGO_URI en el archivo .env');
    }

    await mongoose.connect(mongoURI);
    console.log('Conexión exitosa a MongoDB usando .env yei');
  } catch (error) {
    console.error('Error al conectar con la base de datos:', error.message);
    process.exit(1); // Detiene el proceso si no se puede conectar
  }
}

module.exports = conectarBD;