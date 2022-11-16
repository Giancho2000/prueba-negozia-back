const CNN_MONGOBD: string = (process.env.CNN_MONGODB) || 'mongodb+srv://prueba:12345@pruebanegozia.iyxunfg.mongodb.net/test';
const PORT: number = Number(process.env.PORT) || 8080;

export { 
    CNN_MONGOBD,
    PORT
}