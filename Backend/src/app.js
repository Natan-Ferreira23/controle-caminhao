const express = require('express');
const app = express();

app.use(express.json());

//adicionando rota de usuario 
const userRoutes = require('./routes/userRoutes');
app.use('/usuarios', userRoutes);

//adicionando rota de empresa
const employerRoutes = require('./routes/employerRoutes');
app.use('/empresas', employerRoutes);


//adicionando rota de caminhoes
const truckRoutes = require('./routes/truckRoutes');
app.use('/caminhoes', truckRoutes);

//adicionando rota de abastecimentos
const fuelRoutes = require('./routes/fuelRoutes');
app.use('/abastecimentos', fuelRoutes);

//adicionando rota de gastos
const expenseRoutes = require('./routes/expenseRoutes');
app.use('/gastos', expenseRoutes);

// autenticacao
const authRoutes = require('./routes/authRoutes');
app.use('/auth', authRoutes);

module.exports = app;