const app = require('./app');
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const yaml = require('yamljs');
const { sequelize } = require('./models');

const app = express();
const port = 3000;

// Carregar o arquivo Swagger em formato YAML
const swaggerDocument = yaml.load('./swagger.yaml');

// Usar o Swagger para exibir a documentação em /api-docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Aqui você define os outros endpoints da sua API
app.get('/', (req, res) => {
    res.send('Hello, World!');
  });

// // Iniciar o servidor
// app.listen(port, () => {
//     console.log(`Servidor rodando em http://localhost:${3000}`);
//   });

sequelize.sync().then(() => {
  console.log('Database connected!');
  app.listen(PORT, () => {
    // console.log(`Server running on port ${PORT}`);
  });
});