const express=require('express');
const morgan=require('morgan');
const cors=require('cors');
require('./database');
const app=express();

app.use(cors("http://localhost:4200"));
app.use(express.json()); 

app.use('/api/empleados',require('./src/routes/empleados.routes'));

app.set('puerto',process.env.PORT|| 3000);
app.set('nombreApp','Gestión de empleados');
app.use(morgan('dev'));
module.exports=app;