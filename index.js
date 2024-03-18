/**
 * Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
 * @type {import('express')}
 */
/**
 * Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
 * @type {import('express')}
 */
/**
 * The Express module.
 * @type {object}
 */
const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

app.get('/products', (req, res) => {
  res.json([
    { id: 1, name: 'Producto 1', price: 100 },
    { id: 2, name: 'Producto 2', price: 200 },


  ]);
});
app.get('/products/:id', (req, res) => {
  const  {id} = req.params;
  res.json({
    id,
    name: `Producto ${req.params.id}`,
    price: 100,
  });
},);
app.get('/categories', (req, res) => {
  res.json({
    name: 'Categoria 1',
  });
});


app.get("/categories/:categorityId/products/:productId", (req, res) => {
  const { categorityId, productId } = req.params;
  res.json([
    {
      categorityId, productId
    },

  ]);
});

app.get('/users', (req, res) => {
  res.json({
    id: 1,
    name: 'Lobsang',
    age: 30,
  });
});
app.get('/users/:usersId/orders/:ordersId', (req, res) => {
  const { usersId, ordersId } = req.params;
  res.json({
    usersId,
    ordersId,
  });
});

app.get("/home", (req, res) => {
  res.send("Bienvenido a la página de inicio");
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
