import express from 'express';
const app= express();
app.get('/', (req, res)=>{
    res.send('Respuesta de Servidor')
})
app.listen(3000)
console.log('Puerto de Servidor', 3000)
