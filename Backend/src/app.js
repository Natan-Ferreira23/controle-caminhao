const express = require('express');
const app = express();
app.use(express.json());

//adicionando rota de usuario 
const userRoutes = require('./routes/userRoutes');
app.use('/usuarios', userRoutes);
// autenticacao
const authRoutes = require('./routes/authRoutes');
app.use('/auth', authRoutes);

module.exports = app;