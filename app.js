const express = require('express');
const app = express();
const port = 3000;

// Configurar directorio público
app.use(express.static('public'));

// Configurar vista engine
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

// Ruta para la página principal
app.get('/', (req, res) => {
  res.render('propuesta2');
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
