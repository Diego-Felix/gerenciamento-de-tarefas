const express = require('express');
const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');
const swagger = require('./swagger');

const app = express();
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/tasks', taskRoutes);

swagger(app);


module.exports = app;