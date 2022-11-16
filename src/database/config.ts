import mongoose from 'mongoose';
import { CNN_MONGOBD, PORT } from '../utils/configVars';

const dbConnerction = async () => {
    
    try {
            await mongoose.connect( CNN_MONGOBD );
            console.log( `Se establecio conexion con la DB en el puerto: ${PORT}` );    

    } catch (error) {
        console.log(error);
        throw new Error(`Algo no salio bien en la conexión:${CNN_MONGOBD} puerto: ${PORT}`);
    }
}

export default dbConnerction
