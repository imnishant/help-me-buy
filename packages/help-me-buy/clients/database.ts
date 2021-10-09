import * as Mongoose from 'mongoose';

let database: Mongoose.Connection;

export const connect = () => {
    const uri = '';

    if (database) {
        return;
    }

    Mongoose.connect(uri);
    database = Mongoose.connection;

    database.once('open', async () => {
        console.log("Connected to database");
    });

    database.once('error', async () => {
        console.log("Error connecting to database");
    });
};

export const disconnect = () => {
    if (!database) {
        return;
    }

    Mongoose.disconnect();
};
