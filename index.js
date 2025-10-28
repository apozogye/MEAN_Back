const app= require('./app')
app.listen(app.get('puerto'), '0.0.0.0', ()=>{
 console.log('Nombre de la App',app.get('nombreApp'));
 console.log('Puerto del servidor',app.get('puerto'));
})