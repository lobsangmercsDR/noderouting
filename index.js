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
const routerApi = require('./routes');


const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

app.get("/home", (req, res) => {
  res.send("Bienvenido a la página de inicio");
});

routerApi(app);

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
