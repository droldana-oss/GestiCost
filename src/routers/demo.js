// Vista local con datos ficticios para capturas, sin conexión a Firebase.
const { Router } = require('express');
const router = Router();
const transactions = {
  groceries: { nombre: 'Mercado del mes', costo: 285000, metodo: 'Tarjeta', categoria: 'Comida', descripcion: 'Compras del hogar' },
  transport: { nombre: 'Transporte semanal', costo: 45000, metodo: 'Efectivo', categoria: 'Transporte', descripcion: 'Traslados al trabajo' },
  dinner: { nombre: 'Cena en familia', costo: 98000, metodo: 'Tarjeta', categoria: 'Comida', descripcion: 'Salida del fin de semana' },
  cinema: { nombre: 'Cine', costo: 42000, metodo: 'Efectivo', categoria: 'Entretenimiento', descripcion: 'Entradas y palomitas' },
  savings: { nombre: 'Ahorro para vacaciones', costo: 350000, metodo: 'Transferencia', categoria: 'Meta', descripcion: 'Aporte mensual' },
};
const goals = {
  vacation: { nombre: 'Vacaciones', objetivo: 3000000, monto: 1250000 },
  laptop: { nombre: 'Nuevo computador', objetivo: 4500000, monto: 2100000 },
};
router.get('/', (req, res) => res.redirect('/transacciones'));
router.get('/transacciones', (req, res) => res.render('index', { demo: true, transactionsPage: true }));
router.get('/metas', (req, res) => res.render('metas', { demo: true, goalsPage: true }));
router.get('/api/transacciones', (req, res) => res.json(transactions));
router.get('/api/metas', (req, res) => res.json(goals));
router.get('/api/categorias', (req, res) => res.json({}));
router.post('/api/checkTokenValidity', (req, res) => res.json({ valid: true }));
router.use('/api', (req, res) => res.status(405).json({ error: 'Demo de solo lectura para capturas' }));
module.exports = router;
