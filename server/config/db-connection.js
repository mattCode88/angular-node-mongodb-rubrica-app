//importo mongoose
const mongoose = require('mongoose');

//creo funzione asincrona di connessione al db che importo in server.js
const connectDb = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI);

        console.log(`MongoDB connected: ${connect.connection.host}`);

    }catch (err) {
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDb;
