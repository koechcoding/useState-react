import mongoose from "mongoose";
import config from './index';

const URI = config.mongoURI;
mongoose.connect(URI);

//when successfully connected
mongoose.connection.on('connected', ()=>{
    console.log('Established mongoose default connection');
});

//when connection throws an error
mongoose.connection.on('error', ()=>{
    console.log('Mongoose Default Connection Error : ' + err);
});