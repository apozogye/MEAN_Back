const mongoose = require('mongoose');

/*const URI = 'mongodb://localhost:27017/usuarios_db';*/
/*const URI = 'mongodb://atlas-sql-68e7f039c9c8a049c37d019e-0z7ui7.a.query.mongodb.net/usuarios_db?ssl=true&authSource=admin';*/
/*const URI = 'mongodb://atlas-sql-68e7f039c9c8a049c37d019e-0z7ui7.a.query.mongodb.net/usuarios_db?ssl=true&authSource=admin';*/
const URI = 'mongodb+srv://agpozo14_db_user:U3yOL4SRDFP3SNTi@cluster0.q2ujaqg.mongodb.net/usuarios_db?appName=Cluster0';


mongoose.connect(URI)
.then(() => console.log('DB Conectada'))
.catch(err => console.error(err));
