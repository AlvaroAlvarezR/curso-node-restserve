const express = require('express');
const cors = require('cors');
const router = require('../routes/user.routes');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/users';

        // Middleware
        this.middlewares();

        // Rutas de la aplicación
        this.routes();
    }

    routes() {
        this.app.use(this.usuariosPath, router)
    }

    start() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en puerto ${this.port}`)
        })
    }

    middlewares() {
        // Directorio público
        this.app.use(express.static('public'));
        this.app.use(cors());
        this.app.use(express.json());
    }
}

module.exports =  Server