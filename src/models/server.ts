import express from 'express';
import cors from 'cors';

import dbConnection from '../database/config';
import { PORT } from '../utils/configVars';
import { Path } from 'mongoose';
class Server {
    public port = PORT;
    public app: express.Application;
    
    constructor() {
        this.app = express();
        this.routes()
    }

    async conectarDB() {
        await dbConnection()
    }

    middlwares() {
        //CORS
        this.app.use( cors() );

        //Parseo y lectura del body
        this.app.use( express.json() );

        // Directorio Publico estatico
        this.app.use( express.static('public'));

    }

    // routes methods
    routes() {

    }
    
    // Metodo de escucha del puerto de nuestro server.
    
    async listen() {
        await this.conectarDB();
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en el puerto: ',this.port);
        } );
    }
}

export default Server
