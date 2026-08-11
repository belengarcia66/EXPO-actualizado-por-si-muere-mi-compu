require('dotenv').config();
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const path = require('path');

// Modelos y Conexión
const Usuario = require('./usuarioEsquema');
const SaveSlot = require('./saveSlotsEsquema');
const conectarBD = require('./conexion');

const app = express();

// Se lee la clave secreta desde el archivo .env
const SECRETO = process.env.JWT_SECRET;

// Middlewares
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Inicializar Servidor y Base de Datos
const PORT = process.env.PORT || 3000;

async function iniciarServidor() {
  try {
    await conectarBD();
    app.listen(PORT, () => {
      console.log(`🚀 Servidor del juego corriendo en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Error al iniciar el servidor:', error);
  }
}

iniciarServidor();

// Middleware de Ciberseguridad: Verificar Token JWT
function verificarToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  if (!authHeader) {
    return res.status(401).json({ error: 'Token requerido' });
  }

  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, SECRETO);
    req.usuarioId = decoded.id;
    next();
  } catch (err) {
    return res.status(403).json({ error: 'Token inválido o expirado' });
  }
}

// =====================================================
// RUTAS DE AUTENTICACIÓN
// =====================================================

// Registro de Usuario
app.post('/api/registro', async (req, res) => {
  try {
    const { nombre, email, clave } = req.body;
    
    console.log('Intento de registro recibido:', req.body);

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(clave, salt);

    const nuevoUsuario = new Usuario({ nombre, email, clave: hash });
    await nuevoUsuario.save();

    console.log('¡Usuario guardado con éxito en MongoDB!');
    res.status(201).json({ 
      mensaje: 'Usuario registrado con éxito', 
      id: nuevoUsuario._id 
    });
  } catch (error) {
    console.error('Error al registrar:', error);
    res.status(400).json({ error: error.message || 'No se pudo registrar el usuario' });
  }
});

// Login de Usuario
app.post('/api/login', async (req, res) => {
  try {
    const { email, clave } = req.body;

    const usuario = await Usuario.findOne({ email });
    if (!usuario) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    const passwordOk = await bcrypt.compare(clave, usuario.clave);
    if (!passwordOk) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    const token = jwt.sign({ id: usuario._id }, SECRETO, { expiresIn: '8h' });

    res.json({ token, mensaje: 'Inicio de sesión exitoso' });
  } catch (error) {
    res.status(500).json({ error: 'Error en el servidor' });
  }
});

// Obtener los datos del usuario logueado
app.get('/api/usuario-logueado', verificarToken, async (req, res) => {
  try {
    const usuario = await Usuario.findById(req.usuarioId).select('-clave');
    if (!usuario) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    res.json(usuario);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener datos del usuario' });
  }
});

// =====================================================
// CRUD DE SAVE SLOTS (PARTIDAS DE RPG MAKER)
// =====================================================

app.get('/api/slots', verificarToken, async (req, res) => {
  try {
    const slots = await SaveSlot.find({ usuarioId: req.usuarioId }).sort({ numeroSlot: 1 });
    res.json(slots);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las partidas guardadas' });
  }
});

app.post('/api/slots', verificarToken, async (req, res) => {
  try {
    const { numeroSlot, resumen, datosRpgMaker } = req.body;

    const slotGuardado = await SaveSlot.findOneAndUpdate(
      { usuarioId: req.usuarioId, numeroSlot },
      { 
        usuarioId: req.usuarioId, 
        numeroSlot, 
        resumen, 
        datosRpgMaker, 
        fechaGuardado: Date.now() 
      },
      { new: true, upsert: true, runValidators: true }
    );

    res.status(201).json({ mensaje: 'Partida guardada exitosamente', slot: slotGuardado });
  } catch (error) {
    res.status(400).json({ error: 'Error al guardar la partida en la base de datos' });
  }
});

app.get('/api/slots/:numeroSlot', verificarToken, async (req, res) => {
  try {
    const slot = await SaveSlot.findOne({ 
      usuarioId: req.usuarioId, 
      numeroSlot: req.params.numeroSlot 
    });

    if (!slot) {
      return res.status(404).json({ error: 'Slot de guardado vacío' });
    }

    res.json(slot);
  } catch (error) {
    res.status(500).json({ error: 'Error al cargar el slot' });
  }
});

app.delete('/api/slots/:numeroSlot', verificarToken, async (req, res) => {
  try {
    const slotEliminado = await SaveSlot.findOneAndDelete({ 
      usuarioId: req.usuarioId, 
      numeroSlot: req.params.numeroSlot 
    });

    if (!slotEliminado) {
      return res.status(404).json({ error: 'No hay partida para eliminar en este slot' });
    }

    res.json({ mensaje: `Partida del Slot ${req.params.numeroSlot} eliminada correctamente` });
  } catch (error) {
    res.status(500).json({ error: 'Error al borrar el slot' });
  }
});