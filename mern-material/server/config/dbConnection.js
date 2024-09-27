import mongoose from "mongoose";
import config from "./index";

const URI = config.mongoURI;
mongoose.connect(URI);

//when successfilly connected
mongoose.connection.on("connected", ()=>{
    console.log("Established mongoose default connection");   
});

//when connection throws an error
mongoose.connection.on("error", ()=>{
    console.log("mongoose default connection error : " + err);
});