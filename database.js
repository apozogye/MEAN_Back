const mongoose = require('mongoose');

const URI = 'mongodb://localhost:27017/usuarios_db';

mongoose.connect(URI)
.then(() => console.log('DB Conectada'))
.catch(err => console.error(err));
