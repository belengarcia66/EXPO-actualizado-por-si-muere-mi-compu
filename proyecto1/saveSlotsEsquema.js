const { Schema, model } = require('mongoose');

// Definir el esquema para los Slots de Guardado de RPG Maker
const saveSlotsSchema = new Schema({
  // Relación con el usuario: guarda el _id del modelo 'Usuario'
  usuarioId: { 
    type: Schema.Types.ObjectId, 
    ref: 'Usuario', 
    required: true 
  },
  
  // Número del slot en el juego (1, 2 o 3)
  numeroSlot: { 
    type: Number, 
    required: true, 
    min: 1, 
    max: 3 
  },

  // Datos rápidos para mostrar en las tarjetas de tu sitio web
  resumen: {
    nivel: { type: Number, default: 1 },
    mapa: { type: String, default: 'Inicio' },
    tiempoJuego: { type: String, default: '00:00:00' },
    oro: { type: Number, default: 0 }
  },

  // Todo el JSON pesado que genera RPG Maker al guardar
  datosRpgMaker: { 
    type: Object, 
    required: true 
  },

  fechaGuardado: { type: Date, default: Date.now }
});

// Evita que un mismo usuario tenga dos guardados en el mismo slot
saveSlotsSchema.index({ usuarioId: 1, numeroSlot: 1 }, { unique: true });

const SaveSlot = model('SaveSlot', saveSlotsSchema);

module.exports = SaveSlot;