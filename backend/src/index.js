const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para procesar JSON
app.use(express.json());

// Endpoint GET para la raíz
app.get('/', (req, res) => {
  res.send('¡Bienvenido a mi API REST!');
});

// Endpoint GET para obtener una lista de elementos
app.get('/api/items', (req, res) => {
  // Aquí puedes devolver una lista de elementos, por ejemplo:
  const items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' }
  ];
  res.json(items);
});

// Endpoint POST para crear un nuevo elemento
app.post('/api/items', (req, res) => {
  // Aquí puedes manejar la lógica para crear un nuevo elemento
  const newItem = req.body; // Nuevo elemento enviado en el cuerpo de la solicitud
  // Por ahora, simplemente devolvemos el nuevo elemento creado
  res.status(201).json(newItem);
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
